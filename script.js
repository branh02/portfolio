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

var currentPage = 1;
var totalPages = 2;
var images = [
    "https://cdn.discordapp.com/attachments/1020395598131769516/1204166528006750218/image.png?ex=65d3be78&is=65c14978&hm=46e87ff2dcbd4571980a84c457b9bf1fdef03f5ff0a5a6b22b9891fece881417&",
    "https://cdn.discordapp.com/attachments/1020395598131769516/1204166528488964168/image.png?ex=65d3be78&is=65c14978&hm=b5c9fe622603974b2ad94edce152525d4a14cf0c87c8d4cf4a65ba7bc6ecb4bb&"
]
function nextPage() {
    currentPage = (currentPage % totalPages) + 1
    document.getElementById('resumeImage').src = images[currentPage - 1]
}