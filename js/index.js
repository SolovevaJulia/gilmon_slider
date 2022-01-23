/**
 
 Иницилизация слайдера перенесена в обертку SetImageSliderLayout. После того как все картинки отрисовались в DOM дереве, происходит иницилизация слайдера.

**/

//  Создаем тестовый массив с данными

const imageListTest = [
    {
        id: 1,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 2,
        image: "./img/slide-2.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 3,
        image: "./img/slide-3.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 4,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 5,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 6,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 7,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 8,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 9,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
    {
        id: 10,
        image: "./img/slide-1.jpg",
        title: "отзывы к сушам",
        className: "review",
    },
];

// Параметры для статичских картинок

// main-wrapper - должен идти первым
// thumbs-wrapper - должен идти вторым
// keyImage = указываем тот клююч, который приходит в массиве с api
// limit = Если не указываем лимит, то он не учитывается.

const setImageSlider = new SetImageSliderLayout({
    staticImage: true,
    classNames: ["main-wrapper", "thumbs-wrapper"],
    imageList: imageListTest,
    keyImage: "image",
});

// Параметры для динамических картинок (принимаем по API)

// const setImageSlider = new SetImageSliderLayout({
//         staticImage: false,
//         classNames: ['main-wrapper', 'thumbs-wrapper'],
//         api: 'https://jsonplaceholder.typicode.com/photos',
//         keyImage: 'thumbnailUrl',
//         limit: 10
//     }
// )

window.addEventListener("resize", () => {
    if (
        document.documentElement.clientWidth >= 870 &&
        document.documentElement.clientWidth <= 901
    ) {
        setImageSlider.reInstall();
    } else if (
        document.documentElement.clientWidth >= 902 &&
        document.documentElement.clientWidth <= 1000
    ) {
        setImageSlider.reInstall();
    }
});
