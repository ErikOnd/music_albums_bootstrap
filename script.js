const footer = document.getElementsByTagName('footer')[0];

let numberOfAlbums = document.querySelectorAll('.card.h-100').length;

let albumCounter = document.createElement('p');
albumCounter.innerText = `Number of Albums: ${numberOfAlbums}`;
footer.appendChild(albumCounter);

let trackNumber = document.getElementById('trackNumber');
let trackTitle = document.getElementById('trackTitle');
let trackArtist = document.getElementById('trackArtist');
let trackDuration = document.getElementById('trackDuration');
let addedTrackAlert = document.getElementsByClassName('added-track-alert')[0];
let trackTable = document.getElementById('trackTable');
let deleteBtns = document.getElementsByClassName('btn-outline-danger');


for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    })
}


function addTrack() {
    let trNode = document.createElement('tr');
    trNode.innerHTML = ` <th scope="row" class="tracklist-row">${trackNumber.value}</th>
    <td>${trackTitle.value}</td>
    <td>${trackArtist.value}</td>
    <td><span class="badge badge-dark">${trackDuration.value} min</span> <button type="button"
            class="btn btn-outline-danger float-right">Delete</button></td>`;
    trackTable.appendChild(trNode);

    let succesAlert = document.createElement('div');
    succesAlert.classList.add('alert', 'alert-success', 'mt-3')
    succesAlert.innerText = `You successfully added that track "${trackTitle.value}"`
    addedTrackAlert.appendChild(succesAlert);

    trackNumber.value = null;
    trackTitle.value = null;
    trackArtist.value = null;
    trackDuration.value = null;

    let deleteBtns = document.getElementsByClassName('btn-outline-danger');
    for (let i = 0; i < deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function () {
            this.parentElement.parentElement.remove();
        })
    }

}


function closeTrackInput() {
    let alerts = document.querySelectorAll('.alert.alert-success.mt-3');
    for (const alert of alerts) {
        alert.remove();
    }
}







/*
           <div class="alert alert-success mt-3" role="alert">
                    A simple success alert—check it out!
                </div>

*/