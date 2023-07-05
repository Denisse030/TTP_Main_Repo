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
const element = document.
querySelector("div");
console.log(element);
element.textContent = "New text";

//Example 2
const element2 = document.
querySelector("#myElement");
element2.style.backgroundColor = "pink";

//Example 3
const element3 = document.
querySelector(".myClass");
element3.style.fontSize = "100px";

//Example 4
// const image = document.
// querySelector("img");
// image.setAttribute("src","cat.JPG");

//Example 6
function getValue() {
    const input = document.
    querySelector("#myInput");
    const value = input.value;
    console.log(value);
}