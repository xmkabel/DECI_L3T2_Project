/** TODO: Build the navigation bar using JavaScript **/
let sections = document.getElementsByTagName('section')
for (let section of sections){
    sectionData = section.dataset.nav
    const navSectionElement = document.createElement('li')
    navSectionElement.innerHTML = sectionData
    navSectionElement.classList.add('menu__link')
    document.getElementById('navbar__list').appendChild(navSectionElement)
}
/** TODO: Add smooth scrolling **/

/** TODO: Add an active state **/

/** TODO: Add a comment form **/
