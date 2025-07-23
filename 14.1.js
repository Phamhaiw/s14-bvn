let length = Math.floor(Math.random() * 11) + 10; 
let numbers = [];

for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 100); 
    numbers.push(randomNumber);
}


let tongChan = 0;
let tongLe = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        tongChan = tongChan + numbers[i];
    } else {
        tongLe = tongLe + numbers[i];
    }
}


alert("Mảng đã tạo: " + numbers.join(", "));
alert("Tổng các số chẵn là: " + tongChan);
alert("Tổng các số lẻ là: " + tongLe);
