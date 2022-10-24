// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// Iteration 1 - using callbacks
getInstruction("mashedPotatoes",0,(step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
getInstruction("mashedPotatoes",1,(step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
getInstruction("mashedPotatoes",2,(step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
getInstruction("mashedPotatoes",3,(step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
getInstruction("mashedPotatoes",4,(step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${"Mashed potatoes are ready!"}</li>`;
},
  (error) => console.log(error)
);
},
  (error) => console.log(error)
);
},
  (error) => console.log(error)
);
},
  (error) => console.log(error)
);
},
  (error) => console.log(error)
);
  (error) => console.log(error);

// Iteration 2 - using promises
obtainInstruction("steak", 0)
.then((step0) => {document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[1]), 1000));
})
.then((step1) => {document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[2]), 1000));
})
.then((step2) => {document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[3]), 1000));
})
.then((step3) => {document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[4]), 1000));
})
.then((step4) => {document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[5]), 1000));
})
.then((step5) => {document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[6]), 1000));
})
.then((step6) => {document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[7]), 1000));
})
.then((step7) => {document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
document.querySelector("#steak").innerHTML += `<li>${"Steak is ready!"}</li>`
document.querySelector("#steakImg").removeAttribute("hidden");
return new Promise ((resolve, reject) => setTimeout(() => resolve(steak[8]), 1000));
})
// ... Your code here

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...
