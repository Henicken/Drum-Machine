const display = document.getElementById("display");
display.textContent = "Let's make some music!";

const drumPads = document.querySelectorAll(".drum-pad");
/* drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        const clip = pad.querySelector(".clip");
        clip.currentTime = 0;
        clip.play();
        display.textContent = pad.id;
    });
}); */

function playClip(clip) {
    clip.currentTime = 0;
    clip.play();
    display.textContent = clip.parentElement.id;
}

drumPads.forEach((pad) => {
    pad.addEventListener("click", () => {
        playClip(pad.querySelector(".clip"));
    });
});

document.addEventListener("keydown", (event) =>{
    const clip = document.getElementById(event.key.toUpperCase());
    if (clip && clip.classList.contains("clip")) {
        playClip(clip);
    }
});