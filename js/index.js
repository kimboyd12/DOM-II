// Your code goes here

// 1
const mapImg = document.querySelector('.img-content');
mapImg.addEventListener('mouseenter', (event) => {
mapImg.style.transform = "scale(1.1)";
mapImg.style.transition = "all 0.3s";
});

// 2
mapImg.addEventListener('mouseleave', (event) => {
    mapImg.style.transform = "scale(1.0)";
    mapImg.style.transition = "all 0.3s";
});

// 3
const logo = document.querySelector('.logo-heading');
logo.style.transform = "scale(1.1)";
logo.style.transition = "all 0.3s";

// 4
const mainPage = document.querySelector('html');
mainPage.addEventListener('keypress', (event) => {
    mainPage.style.backgroundColor = "green";
})

// 5
mainPage.addEventListener('keyup', (e) => {
    mainPage.style.backgroundColor = "white";
})

// 6
const paragraph = document.querySelectorAll('p');
paragraph.forEach(para => {
    para.addEventListener("copy", (event) => {
        para.style.backgroundColor = "yellow";
    });
});

// 7
const busImg = document.querySelector('.intro img');
busImg.addEventListener('dblclick', (event) => {
    busImg.style.visibility = "hidden";
})

// 8
paragraph.forEach(para => {
    para.addEventListener('wheel', (event) => {
        para.style.borderColor = "red";
    });
});

// 9
const navLinks = document.querySelectorAll('.main-navigation .container.nav-container .nav .nav-link');
navLinks.forEach((nav) => {
    nav.addEventListener('click', function(event){
        event.preventDefault();
        console.log('prevented');
    })
})

// 10
const headers = document.querySelector('.content-section .text-content h2');
headers.addEventListener('mouseenter', (event) => {
    headers.style.transform = "scale(1.1)";
    headers.style.transition = "all 0.3s";
    headers.style.color = "red";
    });