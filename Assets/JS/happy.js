console.log("Welcome to Emosify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Assets/Music/Happy/1.mp3');
let masterPlay = document.getElementById('play');
let myProgressBar = document.getElementById('duration_slider');


let previous = document.querySelector('#pre');
let next = document.querySelector('#next');
//data collection
let songs = [
    {songName: "SongName", filePath: "Assets/Music/Happy/1.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/2.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/3.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/4.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/5.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/6.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/7.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/8.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/9.mp3"},
    {songName: "SongName", filePath: "Assets/Music/Happy/10.mp3"},
]

//Song Play and Pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//Next
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Assets/Music/Happy/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

})

//Previous
document.getElementById('pre').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Assets/Music/Happy/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})