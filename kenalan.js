// Daftar foto
const photos = [
    { src: "story1.jpeg", description: "Kenalan Yuks !" },
    { src: "story2.jpeg", description: "Story" },
    { src: "story3.jpeg", description: "Harapan" },
];

// Indeks foto saat ini
let currentIndex = 0;

// Elemen gambar dan deskripsi
const photoElement = document.getElementById("currentPhoto");
const descriptionElement = document.getElementById("photoDescription");

// Fungsi untuk memperbarui foto dan deskripsi
function updatePhoto() {
    photoElement.src = photos[currentIndex].src;
    descriptionElement.textContent = photos[currentIndex].description;
}

// Fungsi untuk navigasi ke foto sebelumnya
function prevPhotos() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updatePhoto();
}

// Fungsi untuk navigasi ke foto berikutnya
function nextPhotos() {
    currentIndex = (currentIndex + 1) % photos.length;
    updatePhoto();
}

// Inisialisasi tampilan awal
updatePhoto();