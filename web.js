const items = [
    {
        id: 1,
        cap: "This is Me",
        img:"./images/profile.png"
    },
    {
        id: 2,
        cap: "We design and develop",
        img:"./images/ade.png"

    },
    {
        id: 3,
        cap: "The Future is Here",
        img:"./images/utiva.png"
    },
];

let previousbtn = document.getElementById("previous")
let nextbtn = document.getElementById("next")
let counter = 0

previousbtn.addEventListener("click", function(e){
    counter--
    let captionElement = document.getElementById("caption")
    let photosElement = document.getElementById("photos")
    captionElement.textContent = items[counter].cap
    photosElement.setAttribute("src", items[counter].img)
});

nextbtn.addEventListener("click", function(e){
    let captionElement = document.getElementById("caption")
    let photosElement = document.getElementById("photos")
    // let gallerybackground = document.getElementsByClassName("gallery")
    // gallerybackground.style.background-color = yellow
    captionElement.textContent = items[counter].cap
    photosElement.setAttribute("src", items[counter].img)
    counter++

});
 let hirebtn = document.getElementById("hire")
 hirebtn.addEventListener("click", function(e){
         prompt("Connect me through my Social Media handle")
 });