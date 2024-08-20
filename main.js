let palindrome = 'А роза упала на лапу Азора';
let palindrome2 = 'Иван';

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1;
// // или
// let arr2 = [...arr1];

// arr1.push(10);
// // arr1[0] = 10;
// arr1[25] = 10;

// for (const item of arr2) {
//     console.log(item);
    
// }
// // for of для массивов
// // for in для объектов
// console.log(arr1, arr2);




function checkPalindrome(palindrome) {
    palindrome = palindrome.toLowerCase();
    
    // while (palindrome.indexOf(' ') != -1){
    //     palindrome = palindrome.replace(' ', '');
    // }
    // или 
    palindrome = palindrome.replaceAll(' ', '');

    palindrome = palindrome.split('');

    let reversedPalindrome = [...palindrome].reverse();

    return palindrome.toString() == reversedPalindrome.toString() ? true : false;
    // или
    // let reversedPalindrome = palindrome;
    // return palindrome.toString() == reversedPalindrome.reverse().toString() ? true : false;

}
console.log(checkPalindrome(palindrome));
console.log(checkPalindrome(palindrome2));

let profile = {
    name: 'Vladimir',
    age: 25,
};

let profile2 = profile;

profile['name'] = 'Ivan';

console.log(profile);
console.log(profile2);
console.log(profile == profile2);
