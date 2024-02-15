// function createCounter() {
//   let count = 0;

//   function increment() {
//     count++;
//     console.log(count);
//   }

//   function decrement() {
//     count--;
//     console.log(count);
//   }

//   return {
//     increment,
//     decrement,
//   };
// }

// const counter = createCounter();
// counter.increment(); // 1

// counter.increment(); //2
// counter.decrement(); //-1
// obj={res:counter}

let timer = 0;
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  setInterval(() => {
    timer = timer + 1;
    console.log("timer inside btn1", timer);
  }, 2000);
});

const btn2 = document.getElementById("btn2");

btn.addEventListener("mouseenter", () => {
  timer = timer + 1;
  console.log("timer inside btn2", timer);
});

console.log("timer outside", timer);
