let sections = document.getElementsByTagName('section');
let navBar = document.getElementById('navbar__list');
function addToNav(section){
    // Fetching Data
    let sectionTitle = section.dataset.nav;
    var sectionID = section.id;
    let navSectionElement = document.createElement('li');

    // Titling
    navSectionElement.innerHTML = sectionTitle;

    // Styling
    navSectionElement.classList.add('menu__link');

    // Smooth Scrolling
    navSectionElement.addEventListener('click', function() {
        goSection(section);
    });

    // Appending
    navBar.appendChild(navSectionElement);
}
// Loop across the sections for building the navBar
for (let section of sections){
    addToNav(section);
}
// Smooth Scrolling Function
function goSection(section){
       section.scrollIntoView({behavior: 'smooth', block: 'start'});
}
// Getting Position
function getPosition(section){
    return section.getBoundingClientRect()['top'];
}
// Remove Active
function removeActive(){
    const elements = document.getElementsByClassName('active');
    for (let element of elements) {
        element.classList.remove('active');
    }
}
// Add Active
function addActive(section){
    section.classList.add('active')
}
// Get Closest Section to the User's View
function getClosest(){
    let positions = []
    for (let section of sections){
        positions.push({section: section, position: getPosition(section)})
    }
    let closest = positions[0]
    for (let x of positions){
        if (Math.abs(x.position) < Math.abs(closest.position)){
            closest = x
        }
    }
        return closest.section
}
// Update the Active Section according to the closest function
function updateActive(){
    removeActive()
    addActive(getClosest())
}
window.addEventListener('scroll',function(){
    updateActive()
    console.log('You Scrolled')
});

/** TODO: Add a comment form **/
