window.addEventListener("keydown", playing);

function playing (e) {
    const key = document.querySelector(`div[keycode="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[keycode="${e.keyCode}"]`);

    if (!key) return;
    key.classList.add("playing");
    audio.play();
    audio.currentTime = 0;   
}

window.onload = function (e) {
    const keys = document.querySelectorAll(".white_key, .black_key");
    const audio = document.querySelectorAll("audio");

    setInterval(() => {
        keys.forEach(key => key.classList.remove("playing"));
    }, 1000);
}

