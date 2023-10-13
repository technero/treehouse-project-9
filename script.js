// Assuming you have a container element with id 'container'
const container = document.getElementById('container');

// Sample data for cards
const cardDetails = [
    {
        imgSrc: 'Screenshot 2023-10-11 115846.png',
        title: 'Photo Gallery',
        description: 'This is a kind of natural photos that make you meditate for a while.',
        link: 'https://technero.github.io/treehouse-project5/',
        linkText: 'Gallery'
    },
    {
        imgSrc: 'Screenshot 2023-10-12 231442.png',
        title: 'Game Wheel Of Success',
        description: 'This is a sixth project that I made and it was a nice game.You can try it now!',
        link: 'https://technero.github.io/treehouse-project6/',
        linkText: `Let's Play`
    },
    {
        imgSrc: 'Screenshot 2023-10-12 231228.png',
        title: 'Chart Web App',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content',
        link: 'https://technero.github.io/treehouse-project-7/',
        linkText: 'Visit Project'
    },
    {
        imgSrc: 'Screenshot 2023-10-12 133629.png',
        title: 'Startup Employee Directory',
        description: 'This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.',
        link: 'https://technero.github.io/treehouse-project-8/',
        linkText: 'Visit Project'
    },
    {
        imgSrc: 'Screenshot 2023-10-11 224118.png',
        title: 'Circles',
        description: 'This is a forth project for me, i used SASS in it.',
        link: 'https://technero.github.io/treehouse-project4/',
        linkText: 'SASS Project'
    },
    // Add more card details as needed
];
// Loop through cardDetails and create cards
cardDetails.forEach(detail => {
    const { imgSrc, title, description, link, linkText } = detail;
    const colDiv = document.createElement('div');
    colDiv.classList.add("col");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'pt-3', 'card-size');

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

    const linkEl = document.createElement('a');
    linkEl.classList.add('btn', 'btn-secondary', 'btn-lg');
    linkEl.href = link;
    linkEl.target = '_blank';
    linkEl.textContent = linkText;

    // Append elements
    cardBodyDiv.appendChild(titleEl);
    cardBodyDiv.appendChild(textEl);
    cardBodyDiv.appendChild(linkEl);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
});

// Append the 'col' element to your existing DOM
// For example, if you have a container element with id 'container', you can do:
// document.getElementById('container').appendChild(colDiv);

