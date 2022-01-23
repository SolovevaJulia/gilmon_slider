class SetImageSliderLayout {

    constructor(payload) {

        const { staticImage,classNames, imageList, api, limit, keyImage } = payload

        this.staticImage = staticImage
        this.classNames = classNames
        this.imageList = imageList || []
        this.lengthClassName = classNames.length
        this.startIndexClassName = 0
        this.elementsClass = []
        this.api = api
        this.limit = limit || 0
        this.keyImage = keyImage
        this.initialParamsClass()
    }

    // Иницилизируем переданные параметры в класс

    initialParamsClass = () => {
        if (!this.staticImage) {
            this.fetchImagesApi()
        } else if(!Array.isArray(this.classNames)) {
            throw 'Ошибка: [classNames: должен быть массивом]'
        } else if (this.classNames.length === 0 || this.classNames[0] === '') {
            throw 'Ошибка: [classNames: кол-во элементов не должен быть меньше 0 и строчки не должны быть пустыми]'
        } else if (!Array.isArray(this.imageList)) {
            throw 'Ошибка: [imageList: должен быть массивом]'
        } else if (this.imageList.length === 0 || this.imageList[0] === '') {
            throw 'Ошибка: [imageList: кол-во элементов не должен быть меньше 0 и строчки не должны быть пустыми]'
        } else if (this.keyImage.length === 0 && typeof this.api !== String) {
            throw 'Ошибка: [keyImage: Не должна быть пустой и должна передаваться как строка]'
        } else {
            this.addAllElementsWithClass()
        }
    }

    // Выдергиваем данные с api

    fetchImagesApi () {
        if (!this.api.length > 0 && typeof this.api !== String) {
            throw 'Ошибка: [api: Не должна быть пустой и должна передаваться как строка]'
        } else if (typeof this.limit !== 'number') {
            throw 'Ошибка: [limit: Должен передоватся как число]'
        } else if(!Array.isArray(this.classNames)) {
            throw 'Ошибка: [classNames: должен быть массивом]'
        } else if (this.classNames.length === 0 || this.classNames[0] === '') {
            throw 'Ошибка: [classNames: кол-во элементов не должен быть меньше 0 и строчки не должны быть пустыми]'
        } else if (this.keyImage.length === 0 && typeof this.api !== String) {
            throw 'Ошибка: [keyImage: Не должна быть пустой и должна передаваться как строка]'
        } else {
            fetch(this.api)
                .then(response => response.json())
                .then(data => {
                    console.log('this.limit', this.limit)
                    const photos = this.limit === 0 ? data : data.slice(0, this.limit)
                    this.imageList = photos
                    this.addAllElementsWithClass()
                })
        }
    }

    // Выдергиваем с переданных классов элементы DOM дерева

    addAllElementsWithClass() {

        if (this.startIndexClassName === this.lengthClassName) {
            this.startIndexClassName = 0
            this.rerenderAddImageLayoutSlider()
        } else {
            const getElementsClass = document.querySelectorAll(`.${this.classNames[this.startIndexClassName]}`)
            if (getElementsClass.length === 0) {
                throw `Ошибка: [класс ${this.classNames[this.startIndexClassName]} не найден]`
            } else {
                this.elementsClass = [...this.elementsClass, ...getElementsClass]
                this.startIndexClassName = this.startIndexClassName + 1
                this.addAllElementsWithClass()
            }

        }

    }

    // Перезапускаем функцию addImageLayout Slider пока не закончится длина массива с классами

    rerenderAddImageLayoutSlider() {

        if (this.startIndexClassName === this.lengthClassName) {
            startInizilationSwipper()
        } else {
            this.addImageLayoutSlider()
        }
    }

    // Создаем div -> swiper-slide в него добавляем тег img с данными о картинке передаваемые в класс

    addImageLayoutSlider() {

        this.imageList.forEach((item) => {
            const divSwiperSlider = document.createElement('div')
            divSwiperSlider.classList = this.startIndexClassName === 1 ? 'swiper-slide thumb-slide': 'swiper-slide'
            const divImage = document.createElement('div')
            divImage.classList = 'slider-image'
            const newTagImg = document.createElement('img')
            newTagImg.className = 'review-img'
            newTagImg.id = item.id
            newTagImg.alt = item.title ? item.title : ''
            if (item[this.keyImage] === undefined) {
                throw `[Ошибка: "${this.keyImage}" - такой ключ в списке массива не найден]`
            } else {
                newTagImg.src = item[this.keyImage]
                divImage.appendChild(newTagImg)
                divSwiperSlider.appendChild(divImage)
                this.elementsClass[this.startIndexClassName].appendChild(divSwiperSlider)
            }
        })
        this.startIndexClassName = this.startIndexClassName + 1
        this.rerenderAddImageLayoutSlider()
    }

    reInstall() {
        const getAllElements = document.querySelectorAll('.swiper-slide')
        getAllElements.forEach((item) => {
            item.remove()
            console.log('remove')
        })
        setTimeout(() => {
            this.addAllElementsWithClass()
        }, 300)
    }

}




