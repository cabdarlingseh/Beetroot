// For the Scrolling of the title bar

window.addEventListener('scroll', function () {
    let titleBar = document.querySelector('.title_bar');
    if (window.scrollY > 50) {
        titleBar.classList.add('scrolled');
        titleBar.style.paddingTop = "0";
    } else {
        titleBar.classList.remove('scrolled');
        titleBar.style.paddingTop = "53px";
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

    const title = document.createElement("h2");
    title.textContent = article.title;
    container.appendChild(title);

    const description = document.createElement("p");
    description.textContent = article.description;
    container.appendChild(description);

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