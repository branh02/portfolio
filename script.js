window.addEventListener('load', () => {
    setTimeout(() => {
        const quotePage = document.querySelector('.quote-page');
        const mainHomepage = document.querySelector('.homepage');
        
        quotePage.classList.add('fade-up');
        
        setTimeout(() => {
            quotePage.style.display = 'none';
            mainHomepage.style.display = 'block';
        }, 500); // Adjust the delay as needed
    }, 1100); // 5000 milliseconds (5 seconds)
});


function updateLocalTime() {
    const currentTime = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById('local-time').textContent = 'Local Time: ' + formattedTime;
}
setInterval(updateLocalTime, 1000);
updateLocalTime();

window.onload = function() {
    var workText = document.querySelector('.work-text');
    var tooltipImage = document.querySelector('#tooltip-image');
    var workTextRect = workText.getBoundingClientRect();

    tooltipImage.style.top = workTextRect.top + 'px';
    tooltipImage.style.left = workTextRect.left + 'px';
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

navSlide();