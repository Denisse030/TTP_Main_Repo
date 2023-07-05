//Example 1
// const element = document.
// getElementById("myElement")
//console.log(element);
// element.textContent = "New text added";

// const paragraph = document.
// getElementById("paragraph");
// paragraph.innerHTML = "<strong>New Content</strong>";

//Example 3
// let property = document.
// getElementById("property")
// property.style.backgroundColor = "blue";
// property.style.fontSize = '3rem';
// property.style.textAlign = 'center';

//getElementByClassName Ex 1
// let elements = document.
// getElementsByClassName("myClass");
//[div(element 1), div(element 2)];

// console.log(elements);
// console.log(elements.length);
// elements[1].style.border = "2px solid red";

//Example 2
// const myClass2 = document.
// getElementsByClassName("myClass2");
// console.log(myClass2)
// myClass2[0].textContent = "Modified text";
// myClass2[0].classList.add("newClass");

//Example 3
// const myClass3 = document.
// getElementsByClassName("myClass3");
// myClass3[0].classList.remove("myClass3");

//Example 4
// const buttons = document.
// getElementsByClassName("toggle-button");
// console.log(buttons);
// function toggleClass(){
//     for(let i = 0; i < buttons.length; i++) {
//         buttons[i].classList.toggle("active");
//     }
// }
// toggleClass();



//querySelector() - Example 1
// const element = document.
// querySelector("div");
// console.log(element);
// element.textContent = "New text";

//Example 2
// const element2 = document.
// querySelector("#myElement");
// element2.style.backgroundColor = "pink";

//Example 3
// const element3 = document.
// querySelector(".myClass");
// element3.style.fontSize = "100px";

//Example 4
// const image = document.
// querySelector(".myImg");
// image.setAttribute("src","images/cat.JPG");

//Example 6
// function getValue() {
//     const input = document.
//     querySelector("#myInput");
//     const value = input.value;
//     console.log(value);
// }





//Example 1
// function highlightItems() {
//     const listItems = document.
//     querySelector("#myList li")
//     listItems.forEach(function(item) {
//         item.style.backgroundColor = "yellow";
//     } );
// }
// highlightItems();

// function printText() {
//     console.log("clicking button");
// }
// function disableButtons() {
//     const buttons = document.querySelectorAll(".containerbutton");
//     console.log(buttons);
//     buttons.forEach(function(b) {
//         b.disabled = true;
//     });
// }

// let randomNum = Math.trunc(Math.random()*6) + 1;
// function changeMsg(text) {
//     document.querySelector(".par").textContent = text;
// }

// function check() {
//     let inputFromUser = document.querySelector(".numInput").value;
//     if (!inputFromUser) {
//     changeMsg("Please Enter a valid number");
//     }
//     if (!inputFromUser === randomNum) {
//         changeMsg("You win!");
//         document.querySelector("body").style.backgroundColor = "green";
//     } else {
//         changeMsg("Try again!");
//     }
// }





let newElement = document.createElement("p");
console.log(newElement);
newElement.textContent = "I just created this";

document.body.appendChild(newElement);

//Ex 2
const div = document.createElement("div");
div.classList.add("box");
console.log(div);
document.getElementById
("container").appendChild(div);



// Ex 5
function removeMultipleChildElements() {
    const container = document.getElementById("container4");
    console.log(container);
    const paragraphs = container.querySelectorAll("p");
    paragraphs.forEach(function(paragraph) {
        container.removeChild(paragraph);
    })
}

removeMultipleChildElements();