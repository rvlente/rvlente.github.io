let memes = [
    "https://i.kym-cdn.com/photos/images/newsfeed/001/613/878/02d.jpg",
    "https://i.makeagif.com/media/8-18-2016/2nl1Al.gif",
    "https://i.kym-cdn.com/photos/images/original/000/965/147/4eb.gif",
    "https://media1.tenor.com/images/863d2f9d696da6ef9a134ff9caaefa70/tenor.gif?itemid=7565163",
    "https://forum.playboundless.com/uploads/default/original/3X/8/c/8c4b2c4a516fab726536944d6b5f124a098e927a.gif",
    "https://media2.giphy.com/media/d5Fbtoj47ROk0J9IgW/giphy.gif",
    "https://thumbs.gfycat.com/MistySelfreliantBengaltiger-small.gif",
    "https://media0.giphy.com/media/SFJDkCE9wefecClpL6/giphy.gif",
    "https://media.tenor.com/images/99779991dde5e4504d5e77d98397d438/tenor.gif",
    "https://i.imgur.com/W0KnU6F.gif",
    "https://media1.tenor.com/images/86c76f9c1d4778b111eb3837d2ae825c/tenor.gif?itemid=13805257",
    "https://i.redd.it/m988q4ytcf621.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/844841281463791402/8E04A646F63E466A553E385E381BE5C5FD712FC7/",
    "https://www.nicepng.com/png/full/212-2120727_pepe-monkagun-monkagun-emote.png",
    "https://i.imgur.com/oEJctZZ.jpg",
    "images/feelseggman.png",
    "images/feelsweirdman.png",
    "images/wednesday.jpg",
    "https://i.imgur.com/iZiMcGZ.jpg",
    "https://i.kym-cdn.com/photos/images/original/001/297/314/17e.jpg"
];

function newMeme()
{
    let index = Math.floor(Math.random() * memes.length);
    document.getElementById("meme").src = memes[index];
}

window.onload = newMeme;
window.setInterval(newMeme, 20000);