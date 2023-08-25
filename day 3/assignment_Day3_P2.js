const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;
const nameDisplay = document.getElementById("nameDisplay");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

function updateName() {
    nameDisplay.textContent = names[currentIndex];
}

nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % names.length;
    updateName();
});

previousButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    updateName();
});

// Initial display
//updateName();























// const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya" ];
// let currentIndex = 0;
// const nameDisplay = document.getElementById('nameDisplay');
// const nextButton = document.getElementById('');
// const previousButton = document.getElementById('btn2');

// function updateName(){
//     nameDisplay.textContent = names[currentIndex];
// }

// function nextName (){
//     currentIndex.textContent = (currentIndex + 1) % names.length;
//     updateName()
// }

// previousButton.addEventListener('click',function(){
//     currentIndex.textContent = (currentIndex - 1 + names.length) % names.length;
//     updateName();
// });

// nextButton.addEventListener('click',nextName);
// //previousButton.addEventListener('click',previousName);

//  updateName();
// // inc.addEventListener('click',(names)=>{
// //     for(let i = 1; i<names.length; i++){
// //         names[i] +=1;
// //     }
// //     nameValue.innerText = names;
// //     return names;
// // });


// // // function increment() {
// // //     for (let i = 0 ; i < names.length; i++){
// // //         names[i] += 1; 
// // //     }
    
// // //     nameValue.innerHTML = names;
// // //     return names
// // // }

// // // btn1.onclick = increment();
