const footer = document.getElementsByTagName('footer')[0];

let numberOfAlbums = document.querySelectorAll('.card.h-100').length;

let albumCounter = document.createElement('p');
albumCounter.innerText = `Number of Albums: ${numberOfAlbums}`;
footer.appendChild(albumCounter);


