// let button = document.getElementById('btn')
// button.style.position = 'absolute';
// button.addEventListener('click', function(event) {
//     console.log("I've been clicked!", event)
//     // Anything you want to do goes here
//     document.body.style.backgroundColor = 'lightblue'

//     let p = document.createElement('p')
//     p.innerText = 'Hello, I am new.'
//     document.body.appendChild(p)
// })
let counter = 0;

let imageBtn = document.getElementById("cookie")
imageBtn.addEventListener("Click", function(evt) {
    counter++

    let P =document.querySelector("#exercise-1 >p")
    P.innerText = counter
})