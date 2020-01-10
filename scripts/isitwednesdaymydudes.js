// isitwednesdaymydudes.js

function isItWednesday() {
    let date = new Date();
    let day = date.getDay();
    return day == 3;
}

function showAppropriateFrog() {
    let itsWednesdayMyDudes = isItWednesday();

    if (itsWednesdayMyDudes)
    {
        document.getElementById("meme").src = "images/wednesday.jpg";
    }
    else
    {
        document.getElementById("meme").src = "images/notwednesday.jpg";
    }
}

window.onload = showAppropriateFrog;
window.setInterval(showAppropriateFrog, 60000);
