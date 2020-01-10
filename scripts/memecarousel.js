let counter = 0;

let memes = [
    "https://i.kym-cdn.com/photos/images/newsfeed/001/613/878/02d.jpg",
    "https://i.redd.it/pmqkr34i2v241.jpg",
    "https://ih0.redbubble.net/image.87971245.5815/throwpillow,small,750x1000-bg,f8f8f8.u4.jpg"
];

function newMeme()
{
    document.getElementById("meme").src = memes[counter++];
    if (counter >= memes.length)
        counter = 0;
}

window.onload = newMeme;
window.setInterval(newMeme, 30000);