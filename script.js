window.addEventListener('load', () => {
    setTimeout(() => {
        const quotePage = document.querySelector('.quote-page');
        const mainHomepage = document.querySelector('.homepage');
        
        quotePage.classList.add('fade-up');
        
        setTimeout(() => {
            quotePage.style.display = 'none';
            mainHomepage.style.display = 'block';
        }, 500); // Adjust the delay as needed
    }, 900); // 5000 milliseconds (5 seconds)
});


function updateLocalTime() {
    const currentTime = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
    document.getElementById('local-time').textContent = 'Local Time: ' + formattedTime;
}

// Update the local time every second
setInterval(updateLocalTime, 1000);

// Call the function to initially display the time
updateLocalTime();