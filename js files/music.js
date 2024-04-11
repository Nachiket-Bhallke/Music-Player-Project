let check = "";
let songIndex = 0;
let audioElement = new Audio();
let playbtn = document.getElementById("play");
let myProgressBar = document.getElementById("progressBar");
let songTitle = document.getElementById("songTitle");
let imageContainer = document.getElementById("imgContainer");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songitem = document.getElementsByClassName("songItem");
let volumeIcon = document.getElementById("volumeIcon");
let currentVolume = document.getElementById("songVolume");
let lastPlayedSongIndex = "";

window.onload = function(){
    audioElement.src = songs[0].filePath;
    imageContainer.src = songs[0].coverPath;
    songTitle.innerText = songs[0].songName;
    currentVolume.value = 50;
    audioElement.volume = currentVolume.value;
};

//Song Volume Adjust-->
currentVolume.addEventListener('change', changeVolume);


function changeVolume(){
    audioElement.volume = currentVolume.value/100;
}

// Sound ON/OFF Icon -->
volumeIcon.addEventListener("click", () => {
    if(check == 0){
        check = 0;
        volumeIcon.classList.remove('ri-volume-up-fill');
        volumeIcon.classList.add('ri-volume-mute-fill');
        audioElement.volume = 0;
        check++;
    }
    else{
        volumeIcon.classList.remove('ri-volume-mute-fill');
        volumeIcon.classList.add('ri-volume-up-fill');
        audioElement.volume = currentVolume.value/100;
        check = 0;
    }
});

// Play/Pause Button -->
playbtn.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        playbtn.classList.remove('ri-play-fill');
        playbtn.classList.add('ri-pause-circle-line');
    }
    else{
        audioElement.pause();
        playbtn.classList.remove('ri-pause-circle-line');
        playbtn.classList.add('ri-play-fill');
    }
});

// Sound Progress Bar -->
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});

// Random Song Play Icons -->
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('ri-pause-circle-line');
        element.classList.add('ri-play-circle-line');
    });
};
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('ri-play-circle-line');
        e.target.classList.add('ri-pause-circle-line');
        audioElement.src = `Audios/${songIndex+1}.mp3`
        imageContainer.src = `images/${songIndex+1}.jpg`;
        songTitle.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playbtn.classList.remove('ri-play-fill');
        playbtn.classList.add('ri-pause-circle-line');
        localStorage.setItem("lastPlayedSongIndex", songIndex);
    });
});

// Next Song Icon -->
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Audios/${songIndex+1}.mp3`;
    imageContainer.src = `images/${songIndex+1}.jpg`;
    songTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playbtn.classList.remove('ri-play-fill');
    playbtn.classList.add('ri-pause-circle-line');
    localStorage.setItem("lastPlayedSongIndex", songIndex);
});

// Previous Song Icon -->
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Audios/${songIndex+1}.mp3`;
    imageContainer.src = `images/${songIndex+1}.jpg`;
    songTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playbtn.classList.remove('ri-play-fill');
    playbtn.classList.add('ri-pause-circle-line');
    localStorage.setItem("lastPlayedSongIndex", songIndex);
})

// AutoPlay Next Song -->
audioElement.addEventListener('ended', function() {
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Audios/${songIndex+1}.mp3`;
    imageContainer.src = `images/${songIndex+1}.jpg`;
    songTitle.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playbtn.classList.remove('ri-play-fill');
    playbtn.classList.add('ri-pause-circle-line');
    localStorage.setItem("lastPlayedSongIndex", songIndex);
  });
  
// function addSongToPlaylist(songIndex) {
//     if (0 < songIndex <= 9) {
  
//       playlistItem.innerHTML = `
//         <img src="images/${songIndex + 1}.jpg" alt="1">
//         <span>${song.songName}</span>
//         <span id="songlistplay">
//           <span id="timestamp">${song.tracklength} <i class="ri-play-circle-line songItemPlay"></i></span>
//         </span>
//         <i class="ri-close-fill"></i>
//       `;
  
//       playList.appendChild(playlistItem);
//     }
//   }

