// ambil semua tombol drum
const drums = document.querySelectorAll(".drum");

// fungsi utama untuk memainkan suara
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
        default:
            console.log("tombol tidak dikenali:", key);
            return;
    }

    sound.play().catch(error => {
        console.log("Gagal memutar audio:", error);
    });
}

// event untuk klik (laptop) + sentuh (HP)
drums.forEach(button => {

    function handlePress() {
        let key = this.innerText.trim().toLowerCase();
        playSound(key);
    }

    button.addEventListener("click", handlePress);       // laptop
    button.addEventListener("touchstart", handlePress);  // HP
});

// event keyboard (hanya laptop / PC)
document.addEventListener("keydown", function(event) {
    let key = event.key.toLowerCase();
    playSound(key);
});