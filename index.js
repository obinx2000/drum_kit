

// ambil semua tombol dengan class drum
const drums = document.querySelectorAll(".drum");

// loop semua tombol
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        alert("tombol "+ this.innerText + " di klik");
    });
}
