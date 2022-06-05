// pseudocode
// - take inputs
// - split ==> convert to array
// - compare  arr and reverse.arr

// //! Palindrome

// const minNum = 0;
// const maxNum = 34;

// for (let i = minNum; i < maxNum; i++) {
//   const strI = String(i).split(``);

//   if (strI.join() === strI.reverse().join()) {
//     console.log(i);
//   }
// }

// //*

const minNum = document.querySelector(".min");
const maxNum = document.querySelector(".max");
const palTextArea = document.querySelector(".palTextArea");
const perTextArea = document.querySelector(".perTextArea");
const palBtn = document.querySelector(".pal-btn");
palBtn.addEventListener("click", () => {
  palTextArea.textContent = "";

  for (let i = Number(minNum.value); i <= Number(maxNum.value); i++) {
    const strI = String(i).split(``);

    if (strI.join() == strI.reverse().join()) {
      palTextArea.textContent += i + "\n";
    }
  }
  palTextArea.style.backgroundColor = "black";
  palTextArea.style.color = "white";
});

const perBtn = document.querySelector(".perfect-btn");

perBtn.addEventListener("click", () => {
  perTextArea.textContent = "";
  let total = 0;

  for (let i = minNum.value; i <= maxNum.value; i++) {
    for (let ii = 1; ii < i; ii++) {
      if (i % ii === 0) {
        total += ii;
        console.log(total);
      }
    }

    if (total === i) {
      perTextArea.textContent += i + "\n";
      total = 0;
    } else {
      total = 0;
    }
  }
  perTextArea.style.backgroundColor = "black";
  perTextArea.style.color = "white";
});
