var imgGallery = document.querySelectorAll('.row--novidades > div a img');
for(let i = 0; i < imgGallery.length; i++){
    let overlayImgGallery = document.createElement('div');
    overlayImgGallery.className = 'hvrbox-layer_top';
    imgGallery[i].parentNode.className = 'hvrbox';
    imgGallery[i].parentNode.insertBefore(overlayImgGallery, imgGallery.nextSibling);
}

AOS.init();

$('#carousel').carousel()

let body = document.querySelector("body");
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = ()=>{
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        alwaysShowClose: true
    });
});