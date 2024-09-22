let button = document.querySelectorAll("button");
let input = document.querySelector("input");
let backspace= document.getElementById('backspace')
for (let buttons of button) {
  buttons.addEventListener("click", function (event) {
    let btnText = buttons.innerText;
    if (btnText === "C") {
      input.value = "";
    } else if (btnText === "=") {
      // this is another way to evaluate
      input.value = eval(input.value);
      // second way of doing this
      //    try {
      //         input.value = new Function('return ' + input.value)();
      //     } catch (error) {
      //         input.value = "Error";
      //     }
    } else if (btnText === '←') {
      input.value = input.value.slice(0, -1);
    } else {
      input.value += btnText;
    }
  });
}
