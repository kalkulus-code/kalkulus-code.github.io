function adjustLayout() {
    const screenWidth = window.innerWidth;
    const imageContent = document.querySelector('.image-content img');
    
    if (screenWidth <= 768) {
        imageContent.style.width = '100%'; 
    } else if (screenWidth > 768 && screenWidth <= 1024) {
        imageContent.style.width = '80%'; 
    } else {
        imageContent.style.width = '60%'; 
    }
}


window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
