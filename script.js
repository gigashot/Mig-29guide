function darkModeToggle() {
    document.body.classList.toggle('dark-mode');
   
    function darkModeToggle() {
        document.body.classList.toggle('dark-mode');
    
        const darkSkyImage = document.getElementById('dark-sky');
        const lightSkyImage = document.getElementById('sky');
    
        // Toggle display based on the presence of the dark-mode class
        if (document.body.classList.contains('dark-mode')) {
            darkSkyImage.style.display = 'block';
            lightSkyImage.style.display = 'none';
        } else {
            darkSkyImage.style.display = 'none';
            lightSkyImage.style.display = 'block';
        }
    }
    console.log('dark mode toggled');
}
