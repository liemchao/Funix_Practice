//1. Việt Nam
let neighbours = ["Trung Quốc", "Lào", "Cam-pu-chia"];

//2. Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn.Vậy hãy thêm nó vào cuối array 'neighbours'.
neighbours.push("Utopia");
console.log(`After add 'Utopia': [${neighbours}]\n`);

// 3. Remove Utopia;
neighbours.pop();
console.log(`After remove 'Utopia': [${neighbours}]\n`);

// 4.
if (neighbours.includes("Germany"))
    console.log('Probably not a central European country :D');
else {
    console.log('Probably is a central European country :D');
}

// 5.
let position = neighbours.indexOf('Trung Quốc');
if (position > -1) {
    neighbours[position] = 'Republic of Sweden';
    console.log(`After replace: [${neighbours}]\n`);
} else {
    console.log(`No replace: [${neighbours}]\n`);
}


