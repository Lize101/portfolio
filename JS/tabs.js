// const links = document.querySelectorAll('.Tabs');


// const tab = document.getElementsByClassName('tab');


// links.forEach(link => {
//     link.addEventListener('click', function (event) {
        // Prevent the default link behavior (e.g., navigating to the top of the page)
        // event.preventDefault();

        // Remove "active" class from all links
        // links.forEach(link => link.classList.remove('active'));

        // Add "active" class to the clicked link
//         this.classList.add('active');
//     });
// });


// for (let tab of links) {
//     tab.addEventListener('click', function(e) {
//         console.log('clicked');
//         e.preventDefault();
//         console.log(e);
//         let selected = e.target;

//         selected.toggle.style.background = '#3456cb';
//         selected.classList.add('active');
//         selected = 'null';
// })};


// links.forEach(link =>{
//     link.addEventListener('click', function(e){
//         e.preventDefault();
//         let selected = e.target;
//         console.log(selected);
//         if (selected) {
//             selected === ':first-child';
//         }

//     })})

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