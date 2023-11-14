// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]


function subStr(str) { // สร้างฟังก์ชั่น
    let subset = []; // สร้างตัวแปร arr ไว้รับค่า
    for (let i = 0; i < str.length; i++) { // run ไปให้ครบทุกตัว 
        for (let n = i + 1; n < str.length + 1; n++) { //จับคู่กับตัวถัดไป แล้วนไปตัว i ที่ถัดไปให้วนกลับมาจับคู่แบบเดิมถัดไป

            subset.push(str.slice(i, n)); // push เข้าไปใน arr 
        }
    }
    return subset;// หลังวนครบก็ return ค่าที่เราทำไว้
}
let str = 'holy'
console.log(subStr(str));