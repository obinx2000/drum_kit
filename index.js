// ambil semua tombol
const drums = document.querySelectorAll(".drum");

// fungsi suara
function playSound(key) {
    let sound;

    switch (key) {
        case "w": sound = new Audio("sounds/tom-1.mp3"); break;
        case "a": sound = new Audio("sounds/tom-2.mp3"); break;
        case "s": sound = new Audio("sounds/tom-3.mp3"); break;
        case "d": sound = new Audio("sounds/tom-4.mp3"); break;
        case "j": sound = new Audio("sounds/snare.mp3"); break;
        case "k": sound = new Audio("sounds/crash.mp3"); break;
        case "l": sound = new Audio("sounds/kick-bass.mp3"); break;
        default: return;
    }

    sound.play().catch(err => console.log(err));
}

// 🔥 PENTING: hapus event lama dulu (biar tidak numpuk)
drums.forEach(button => {
    button.replaceWith(button.cloneNode(true));
});

// ambil ulang tombol setelah clone
const newDrums = document.querySelectorAll(".drum");

// pakai SATU event saja
newDrums.forEach(button => {
    button.addEventListener("pointerdown", function () {
        let key = this.innerText.trim().toLowerCase();
        playSound(key);
    });
});

// keyboard (aman)
document.addEventListener("keydown", function (event) {
    playSound(event.key.toLowerCase());
});