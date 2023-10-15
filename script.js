// Assuming you have a container element with id 'container'
const container = document.getElementById('container');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('projectModalTitle');
const modalIframe = document.getElementById('projectSrc');
const modalLink = document.getElementById('projectLink');

// Sample data for cards
const cardDetails = [
    {
        imgSrc: 'photo-gallery-project.png',
        title: 'Photo Gallery',
        description: 'Searchable gallery of photos with a carousel image view. Implemented with HTML5 & CSS3',
        link: 'https://technero.github.io/treehouse-project5/',
    },
    {
        imgSrc: 'wheel-of-success.png',
        title: 'Game Wheel Of Success',
        description: 'Fun game of word guessing. The game interface is built with HTML5 & CSS3. The game logic is built with Vanilla JavaScript. JavaScript is also used for DOM manipulation based on user interactions',
        link: 'https://technero.github.io/treehouse-project6/',
    },
    {
        imgSrc: 'chart-web-app.png',
        title: 'Chart Web App',
        description: 'Dashboard static page built with HTML5, CSS3 and JavaScript. It highlights the use chart library & grid layout. Javascript is used to demonstrate notification popup & dismissal. The project replaced raster images with SVG images in a responsive layout',
        link: 'https://technero.github.io/treehouse-project-7/',
    },
    {
        imgSrc: 'startup-employee-directory.png',
        title: 'Startup Employee Directory',
        description: 'Directory of employees (randomly generated using random user API). JavaScript is used to manage fetch requests, dynamically generate employees cards and handle showing and dismissing employee details on card click.',
        link: 'https://technero.github.io/treehouse-project-8/',
    },
    {
        imgSrc: 'circles-project.png',
        title: 'Circles',
        description: 'Static web page styled with HTML5 & Sass. It highlights the use of grid, responsive & mobile first approach.',
        link: 'https://technero.github.io/treehouse-project4/',
    },
    // Add more card details as needed
];

function setModalDetails(details) {
    modalTitle.textContent = details.title;
    modalIframe.setAttribute('src', details.link);
    modalLink.setAttribute('href', details.link);
    modal.classList.add('show');
}

// Loop through cardDetails and create cards
cardDetails.forEach(detail => {
    const { imgSrc, title, description, link, linkText } = detail;
    const colDiv = document.createElement('div');
    colDiv.classList.add("col");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'pt-3', 'card-size', "h-100");
    cardDiv.setAttribute('data-bs-toggle', 'modal');
    cardDiv.setAttribute('data-bs-target', '#projectModal');

    cardDiv.addEventListener('click', () => {
        setModalDetails(detail);
    })

    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('card-img-top');

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body', 'mt-3');

    const titleEl = document.createElement('h5');
    titleEl.classList.add('card-title');
    titleEl.textContent = title;

    const textEl = document.createElement('p');
    textEl.classList.add('card-text');
    textEl.textContent = description;

    // Append elements
    cardBodyDiv.appendChild(titleEl);
    cardBodyDiv.appendChild(textEl);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    container.appendChild(colDiv);
});

// Append the 'col' element to your existing DOM
// For example, if you have a container element with id 'container', you can do:
// document.getElementById('container').appendChild(colDiv);

