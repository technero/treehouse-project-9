// Assuming you have a container element with id 'container'
const container = document.getElementById('container');

// Sample data for cards
const cardDetails = [
    {
        imgSrc: 'Screenshot 2023-10-11 115846.png',
        title: 'Photo Gallery 1',
        description: 'This is a kind of natural photos that make you meditate for a while.',
        link: 'https://technero.github.io/treehouse-project5/',
    },
    {
        imgSrc: 'another_image.png',
        title: 'Photo Gallery 2',
        description: 'Description for gallery 2.',
        link: 'https://example.com/gallery2',
    },
    // Add more card details as needed
];
// Loop through cardDetails and create cards
cardDetails.forEach(detail => {
    const colDiv = document.createElement('div');
    colDiv.classList.add("col");

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const img = document.createElement('img');
    img.src = detail.imgSrc;
    img.classList.add('card-img-top');

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = detail.title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = 'This is a kind of natural photos that make you meditate for a while.';

    const link = document.createElement('a');
    link.classList.add('btn', 'btn-primary', 'btn-lg');
    link.href = detail.link;
    link.target = '_blank';
    link.textContent = 'Gallery';

    // Append elements
    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(text);
    cardBodyDiv.appendChild(link);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);
    container.appendChild(colDiv);
});

// Append the 'col' element to your existing DOM
// For example, if you have a container element with id 'container', you can do:
// document.getElementById('container').appendChild(colDiv);

