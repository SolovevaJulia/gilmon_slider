const startInizilationSwipper = () => {

     // Иницилизируем нижний слайдер (preview)

    const swiperThumbs = new Swiper(".thumbs .swiper-container", {
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            0: {
                direction: 'vertical',
                autoHeight: false,
                slidesPerView: 8,
                spaceBetween: 0,
                grid: {
                fill: 'row',
                rows: 2
            }
            },
            900: {
                    direction: "horizontal",
                    slidesPerView: 8
                    },
                },
            });

            // Иницилизируем основной слайдер

            const swiper = new Swiper(".slider .swiper-container", {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },

                spaceBetween: 20,

                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },

                slidesPerView: 1,

                thumbs: {
                    swiper: swiperThumbs,
                },
            });

    //    const browser = navigator.userAgent.toLowerCase(); 
        
    
            
    //  При разрешение меньше или равно 570 получаем все картинки thunmb slider
    


    if (document.documentElement.clientWidth <= 570) {
         //  Получаем все картинки относящиеся к preview
        const thumbSlide = document.querySelectorAll('.review-img')

        //  Скролим с плавной прокруткой наверх страницы

        const listenerClickThumbSlide = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

        // Отслеживаем клик по одной картинки в preview

        thumbSlide.forEach((item) => {
            item.addEventListener('click', () => listenerClickThumbSlide())
        })
    }
}
