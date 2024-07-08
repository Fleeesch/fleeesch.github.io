// Function to open the lightbox with the clicked image
function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var openRawButton = document.getElementById('openRawButton');

    // Set the source of the lightbox image
    lightboxImage.src = img.dataset.src;

    // Set the href of the open raw button
    openRawButton.href = img.dataset.src;

    // Display the lightbox
    lightbox.style.display = 'block';

    // Clear previous image
    lightboxImage.style.opacity = 0;
    lightboxImage.onload = function () {
        lightboxImage.style.opacity = 1;
    };
}
// Function to close the lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Function to handle keyboard events (e.g., Escape key to close lightbox)
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});

// Function to handle navigation between images in lightbox (not fully implemented)
var slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    lightboxImg.src = slides[slideIndex - 1].src;
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Copied to clipboard: ' + text);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy text. Please try again or use Ctrl+C/Cmd+C.');
      });
  }