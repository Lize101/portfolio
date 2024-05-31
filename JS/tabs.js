const links = document.querySelectorAll('.Tabs');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent the default link behavior (e.g., navigating to the top of the page)
        event.preventDefault();

        // Remove "active" class from all links
        links.forEach(link => link.classList.remove('active'));

        // Add "active" class to the clicked link
        this.classList.add('active');
    });
});