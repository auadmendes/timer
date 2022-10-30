// function solution(N) {
//   // write your code in JavaScript (Node.js 14)
//   let findNumberOne = false //= [1,2,147, 483,647]

//   let res = N
//   let gap = 0
//   let countZero = 0

//   while (res != 0) {
//     if (res % 2) {
//       findNumberOne = true
//       countZero = 0
//     } else if (findNumberOne) {
//       countZero++
//       if (countZero > gap) {
//         gap = countZero
//       }
//     }
//     res = Math.floor(res / 2)
//   }
//   return gap
// }

// "
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].
// "

// //rotate arrays

// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');
// let A = [3, 8, 9, 7, 6]
// let K = 3

// function solution(A, K) {
//     // write your code in JavaScript (Node.js 14)
//     for (let i = 0; i < K; i++){
//         A.unshift(A.pop());
//     }

//     return A
// }
