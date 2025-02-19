// For the Scrolling of the title bar

window.addEventListener('scroll', function () {
    let titleBar = document.querySelector('.title_bar');
    if (window.innerWidth >= 900) {
        if (window.scrollY > 50) {
            titleBar.classList.add('scrolled');
            titleBar.style.paddingTop = "10px";
        } else {
            titleBar.classList.remove('scrolled');
            titleBar.style.paddingTop = "45px";
        }
    }
})

$(document).ready(function () {

    //    Changing the main texts JQuery

    $('.header_body').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autplaySpeed: 3000,
        infinite: true,
        speed: 500,
        cssEase: 'ease-in-out'
    });

    //Sliding Articles

    $('.article').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        speed: 500,
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        }]
    });
})

// Contents for the articles section

const articles = [{
        image: "./assets/images/article_1.jpg",
        alt: "Image of a building",
        title: "SEE THE UNMATCHED BEAUTY OF THE GREAT.",
        description: "Free directories: directories are perfect for customers that are searching for...",
        authorImage: "./assets/images/author_1.jpg",
        authorName: "ALJA BRUN",
        date: "20 Jan 2020"
    },
    {
        image: "./assets/images/article_2.jpg",
        alt: "Image of a building",
        title: "EFFECTIVE ADVERTISING POINTERS.",
        description: "Having a home based business is a wonderful asset to your life...",
        authorImage: "./assets/images/author_2.jpg",
        authorName: "DOMINIC FREEMAN",
        date: "13 Dec 2019"
    },
    {
        image: "./assets/images/article_3.jpg",
        alt: "Image of a building",
        title: "HYPNOTIZE YOURSELF INTO THE GHOST.",
        description: "There are many things that are important to catalog design...",
        authorImage: "./assets/images/author_3.jpg",
        authorName: "ALICE WARD",
        date: "30 Nov 2019"
    }
];

const main_container = document.querySelector('.article');

function createCard(article) {

    const container = document.createElement('div');
    container.classList.add('article_details');

    const image = document.createElement("img");
    image.src = article.image;
    image.alt = article.alt;
    container.appendChild(image);

    // Create a new div for the article content
    const articleContent = document.createElement("div");
    articleContent.classList.add("article-content");

    const title = document.createElement("h2");
    title.textContent = article.title;
    articleContent.appendChild(title);

    const description = document.createElement("p");
    description.textContent = article.description;
    articleContent.appendChild(description);

    // Append the article content div to the container
    container.appendChild(articleContent);

    const authors = document.createElement("div");
    authors.classList.add("authors");

    const authorImage = document.createElement("img");
    authorImage.src = article.authorImage;
    authorImage.alt = "Photo of the author";
    authors.appendChild(authorImage);

    const authorDetails = document.createElement("div");
    authorDetails.classList.add("author_details");

    const authorName = document.createElement("h3");
    authorName.textContent = article.authorName;
    authorDetails.appendChild(authorName);

    const date = document.createElement("p");
    date.textContent = article.date;
    authorDetails.appendChild(date);

    authors.appendChild(authorDetails);

    container.appendChild(authors);

    return container;
}

articles.forEach(article => {
    main_container.appendChild(createCard(article));
});

const totalCardsNeeded = 15;
const additionalCardsNeeded = totalCardsNeeded - articles.length;

for (let i = 0; i < additionalCardsNeeded; i++) {
    const article = articles[i % articles.length];
    main_container.appendChild(createCard(article));
}

// Lightgallery

document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgThumbnail, lgZoom, lgFullscreen],
        animateThumb: false,
        zoomFromOrigin: false,
        allowMediaOverlap: true,
        toggleThumb: true,
        showThumbByDefault: true
    });
});

// For the Map

document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([38.72179820242424, -9.141325392761308], 13);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: ''
    }).addTo(map);

    L.marker([38.72537536175249, -9.14979806787607]).addTo(map)
        .bindPopup('We Are Here')
        .openPopup();

    L.marker([38.738131702468145, -9.056774936624093]).addTo(map)
        .bindPopup('Tagus River')
        .openPopup();
})

//Navbar handler

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header_nav');
    const closeButton = document.querySelector('.close-button');
    const bars = document.querySelectorAll('.bar');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('active');
        bars.forEach(bar => bar.classList.toggle('hidden'));
    });

    closeButton.addEventListener('click', function () {
        nav.classList.remove('active');
        bars.forEach(bar => bar.classList.remove('hidden'));
    });
});