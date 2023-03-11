//Calculation
function calculate() {
   TextFromInput = document.getElementById("textarea").value;

   //numbers
   TextArray = TextFromInput.split("");
   let i = 0;
   let arrNumbers = [];
   let arrLetters = [];
   while (i < TextArray.length) {
      if (TextArray[i] === "0") {
         arrNumbers.push(0);
      } else if (TextArray[i] === "1") {
         arrNumbers.push(1);
      } else if (TextArray[i] === "2") {
         arrNumbers.push(2);
      } else if (TextArray[i] === "3") {
         arrNumbers.push(3);
      } else if (TextArray[i] === "4") {
         arrNumbers.push(4);
      } else if (TextArray[i] === "5") {
         arrNumbers.push(5);
      } else if (TextArray[i] === "6") {
         arrNumbers.push(6);
      } else if (TextArray[i] === "7") {
         arrNumbers.push(7);
      } else if (TextArray[i] === "8") {
         arrNumbers.push(8);
      } else if (TextArray[i] === "9") {
         arrNumbers.push(9);
      } else {
         arrLetters.push(TextArray[i]);
      };
      i++;
   }

   document.getElementById("resultNumbers").innerHTML = arrNumbers.length;

   //letters
   let t = 0;
   arrString = [];
   arrSentences = [];
   while (t < arrLetters.length) {
      if (arrLetters[t] !== ' ' && arrLetters[t] !== ".") {
         arrString.push(arrLetters[t]);
      } else if (arrLetters[t] === ".") {
         arrSentences.push(arrLetters[t]);
      }
      t++;
   }

   document.getElementById("resultLetters").innerHTML = arrString.length;

   //Sentences
   document.getElementById("resultSentences").innerHTML = arrSentences.length;

   //Words   
   arrForWords = TextFromInput.split(" ");
   Words = [];
   arrForWords.forEach((value) => {
      str = value / 1;
      if (Number.isNaN(str)) {
         Words.push(value);
      }
   });
   document.getElementById("resultWords").innerHTML = Words.length;

}
