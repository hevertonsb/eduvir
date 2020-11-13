var imgGallery = document.querySelectorAll('.row--novidades > div a img');
for(let i = 0; i < imgGallery.length; i++){
    let overlayImgGallery = document.createElement('div');
    overlayImgGallery.className = 'hvrbox-layer_top';
    imgGallery[i].parentNode.className = 'hvrbox';
    imgGallery[i].parentNode.insertBefore(overlayImgGallery, imgGallery.nextSibling);
}

AOS.init();

$('#carousel').carousel()