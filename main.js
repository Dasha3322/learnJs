// let palindrome = 'А роза упала на лапу Азора';
// let palindrome2 = 'Иван';

// // let arr1 = [1, 2, 3, 4, 5];
// // let arr2 = arr1;
// // // или
// // let arr2 = [...arr1];

// // arr1.push(10);
// // // arr1[0] = 10;
// // arr1[25] = 10;

// // for (const item of arr2) {
// //     console.log(item);

// // }
// // // for of для массивов
// // // for in для объектов
// // console.log(arr1, arr2);

// function checkPalindrome(palindrome) {
//     palindrome = palindrome.toLowerCase();

//     // while (palindrome.indexOf(' ') != -1){
//     //     palindrome = palindrome.replace(' ', '');
//     // }
//     // или
//     palindrome = palindrome.replaceAll(' ', '');

//     palindrome = palindrome.split('');

//     let reversedPalindrome = [...palindrome].reverse();

//     return palindrome.toString() == reversedPalindrome.toString() ? true : false;
//     // или
//     // let reversedPalindrome = palindrome;
//     // return palindrome.toString() == reversedPalindrome.reverse().toString() ? true : false;

// }
// console.log(checkPalindrome(palindrome));
// console.log(checkPalindrome(palindrome2));

// let profile = {
//     name: 'Vladimir',
//     age: 25,
// };

// let profile2 = profile;

// profile['name'] = 'Ivan';

// console.log(profile);
// console.log(profile2);
// console.log(profile == profile2);

// 22.08.2024

// let value1 = 15; // Number
// let value2 = 'Vladimir';
// let value3 = true;
// let value4 = 15n; // BigInt хранит только целые значенияб в отличии от number

// console.log(15n + 15); // BigInt не применяется в другими типами, только в BigInt, со строками работает

// console.log(value2[0]); // под капотом строка это массив

// let arr = [7, 4, 3, 11, 2];
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 4; j++) {
//         console.log('Hello World!'[i + j]);

//     }
// }
//во внешнем и внутреннем цикле должны быть разные переменные, в основном применяются i, j, k

// let arr = [7, 4, 3, 11, 2];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
// // матрица
// let arr2 = [[1, 2, 3], [4, 5, 6, 4], [7, 8, 9], [10, 11, 12]];
// console.log(arr2);
// console.log(arr2[0][1]);

// for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < arr2[i].length; j++) {
//         console.log(arr2[i][j]);

//     }
// }

// let arr = [7, 4, 3, 11, 2];

// // Bubble sort

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
// }
// bubbleSort(arr);
// console.log(arr);

//Сделать игру камень, ножницы, бумага

// console.log(Math.floor(Math.random() * 3)); // рандом выведет цифры до 3(0,1,2), Math.floor округляет в меньшую сторону



    //  ФУНКЦИИ 02.09.2024

// function verbNoun() {
//     console.log(15);
// }
// // verbNoun();
// console.log(verbNoun);
// console.log(verbNoun());

// let myFunc = verbNoun;
// myFunc()




// function verbNoun(func) {
//     func();
// }

// function print() {
//     console.log('hello world!');
// }

// verbNoun(print);

// let myFunc = new Function('let b = 13; console.log(b); return 777;');
// console.log(myFunc);
// myFunc();
// console.log(myFunc())

// eval('5 + 50 * 10');
// console.log(eval('5 + 50 * 10'));





// function sum(a, b, c) {
//     return a + b + c;
    
// }

// console.log(sum(3, 11, 17));



// let newSum = function sum(a, b, c) {
//     return a + b + c;
// };
// console.log(newSum(1, 1, 1));
// console.log(sum(1, 1, 1,));



// for (let i = 0, i < 5; i++){
//     function print() {
//         console.log(i);
//     }
//     print();
// }



// {
//     let value = 110;
// }
// console.log(value);
 


// {
//     function getNumber() {
//         return 100;
//     }

//     console.log(getNumber());
// }

// console.log(getNumber());



let sum = () => 5 + 5;

console.log(() => 5 + 5);
console.log(sum());
console.log(sum);

console.log((() => 5 + 5)());
console.log(((a, b) => a + b)(10, 20));
