// const input = document.querySelector('input');
// // Debounce function
// function DebounceFun(fn, delay) {
//     let timer;
//     return (...args) => {   // Collect arguments using ...args
//         if (timer) clearTimeout(timer);
//          timer=setTimeout(() => {
//             fn(...args);  // Call the function after the delay
//         }, delay);
//     };
// }

// // Function that makes an "API call"
// function fun() {
//     console.log('API call ho rahi hai debouncing se');
// }

// // Create a debounced version of the function with a 500ms delay
// const debouncedFun = DebounceFun(fun, 200);
// input.addEventListener('input', debouncedFun);  

