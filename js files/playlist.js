let musicPlaylist = document.querySelector(".music-playlist");
let pDiv = document.querySelector(".playlist-div");
let songPlaylist = [];
 // Show PlayList
   function showPlayList() {
   musicPlaylist.style.transform = "translateX(0)";
 }
 // Hide PlayList
   function hidePlayList() {
   musicPlaylist.style.transform = "translateX(-100%)";
 }
 
 // Add Tracks in playlist
 Array.from(document.getElementsByClassName('ri-menu-add-line')).forEach((element)=>{
   element.addEventListener('click', (e)=> {
      if(0 < songIndex <= 9){
           songIndex = parseInt(e.target.id);

            const song = songs[songIndex];
            const playlistItem = document.createElement("div");
            playlistItem.classList.add("playlist");
           
            playlistItem.innerHTML = `
            <img src="images/${song}.jpg" alt="1">
            <span>${song.songName}</span>
            <span id="songlistplay"> <span id="timestamp"> ${song.tracklength} <i class="ri-play-circle-line songItemPlay"></i> </span> </span>
            <i class="ri-close-fill"></i>
            `;
           pDiv.appendChild(playlistItem);
           }
       }
   );
   });