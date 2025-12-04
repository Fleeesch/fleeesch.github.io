// ---------------------------------------------------------------------
//  Function : Open Lightbox
// ---------------------------------------------------------------------

function openLightbox(img) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    var openRawButton = document.getElementById('openRawButton');

    if (document.getElementById('lightbox').style.opacity > 0) {
        return;
    }

    // Set the source of the lightbox image
    lightboxImage.src = img.dataset.src;

    // Set the href of the open raw button
    openRawButton.href = img.dataset.src;

    // Display the lightbox
    lightbox.style.display = 'block';
    document.getElementById('lightbox').style.pointerEvents = 'auto';
    document.getElementById('lightbox').style.opacity = 1;

    // Clear previous image
    lightboxImage.style.opacity = 0;
    lightboxImage.onload = function () {
        lightboxImage.style.opacity = 1;
    };
}


// ---------------------------------------------------------------------
//  Function : Close Lightbox
// ---------------------------------------------------------------------

function closeLightbox() {
    document.getElementById('lightbox').style.opacity = 0;
    document.getElementById('lightbox').style.pointerEvents = 'none';
}

// ---------------------------------------------------------------------
//  Function : Add Keyboard Listener
// ---------------------------------------------------------------------

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});


// ---------------------------------------------------------------------
//  Function : Change Slide
// ---------------------------------------------------------------------

// [!] Currently not implemented

var slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// ---------------------------------------------------------------------
//  Function : Show Slides
// ---------------------------------------------------------------------

function showSlides(n) {

    var slides = document.getElementsByClassName('lightbox-slide');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    lightboxImg.src = slides[slideIndex - 1].src;
}

// ---------------------------------------------------------------------
//  Function : Copy to Clipboard
// ---------------------------------------------------------------------
function copyToClipboard(container) {

    // Remove 'mark' class from all copyIcon elements
    const allIcons = document.querySelectorAll('.copyIcon');
    allIcons.forEach(icon => icon.classList.remove('mark'));

    // Copy text and add 'mark' class to the clicked copyIcon
    const link = container.querySelector('.link').textContent;
    const copyIcon = container.querySelector('.copyIcon');

    navigator.clipboard.writeText(link).then(() => {
        copyIcon.classList.add('mark');
    }).catch(err => {
        console.log('Copy Error', link);
    });
}