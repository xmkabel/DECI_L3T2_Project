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
function showNav() {
    navBar.classList.toggle("navHidden");
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
// listen for a Scroll to Update Active
window.addEventListener('scroll',function(){
    updateActive()
});

// Comment Section
// Comment Button
document.getElementById('commentsForm').addEventListener('submit', function(e) {
    e.preventDefault();
let commentText = document.getElementById('commentTextInput').value;
let commentAuthor = document.getElementById('commentAuthorInput').value;
let commentEmail = document.getElementById('commentEmailInput').value;
    // Comment Box
    let newComment = document.createElement('div');
    newComment.classList.add('comment-box')
    // Comment Paragraph
    let newCommentText = document.createElement('p');
    newCommentText.classList.add('comment-text')
    newCommentText.textContent = commentText
    // Comment Email
    let newCommentEmail = document.createElement('p');
    newCommentEmail.classList.add('comment-email')
    newCommentEmail.textContent = commentEmail
    // Comment Author
    let newCommentAuthor = document.createElement('p');
    newCommentAuthor.classList.add('comment-author')
    newCommentAuthor.textContent = commentAuthor
    // Appending
    newComment.appendChild(newCommentText);
    newComment.appendChild(newCommentAuthor);
    newComment.appendChild(newCommentEmail);
    console.log(newCommentAuthor,newCommentEmail,newCommentText)
    // Append Comment
    console.log(commentText,commentAuthor,commentEmail)
    document.getElementById('commentsList').appendChild(newComment);
    // Clear the form
    document.getElementById('commentsForm').reset();
});