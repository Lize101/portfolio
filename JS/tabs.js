
const links = document.querySelectorAll('.Tabs');
const content = document.querySelectorAll('.content');

// Attach click event listener to each link element
links.forEach((link, index) => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        links.forEach(link => {link.classList.remove('active')});

        // Add 'active' class to the clicked link
        link.classList.add('active');

        content.forEach(content => {content.classList.remove('active')});
        content[index].classList.add('active');
    });


});