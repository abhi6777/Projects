
// getting the html elements

const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

// for decrement button click

decrementbtn.addEventListener("click",() => {
     const value = Number 
     (displayvalue.innerText);
if(value > 0) {
     displayvalue.innerText = value - 1;
} else {
     alert ("negative value not allowed");
}
});

//  for increment button click
incrementbtn.addEventListener("click",() => {
     const value = Number 
     (displayvalue.innerText);
if(value => 10) {
     displayvalue.innerText = value + 1;
} else
{
     alert ("10+ values are not allowed");
}
});

// for reset button 

resetbtn.addEventListener("click", () => {
     displayvalue.innerText = 0
})