//1
//   1. Step one will be to put in variables in the parameters. 
//   2. Step 2 will be to create an if statement. 
//   3. Step 3 will be to set ab 


// function areBothSame(a, b){
// if(a == b){
//     return "true"
// }else{ 
//     return "false"
// }
// }
// console.log(areBothSame(true, 1))



//2
// function areBothEqual(a, b){
//  if(a === b){
//     return "true"
// }else{ 
//     return "false"
// }
// }
// // console.log(areBothEqual("2", "2")) 


//3
// function areAllFourEqual(a, b, c, d){
//   if( a === b && a === c && a === d){
//       return "true"
//   }else{ 
//       return "false"
// }
// }
// console.log(areAllFourEqual(2, 2, 2, 2))

// //4
// function areAllFourSame(a, b, c, d){
//   if (a == b && b == c && c ==d){
//       return true
//   } else {
//       return false
//   }
// }
// console.log(areAllFourSame("2", "2", "2", 2))
//5
function areAllFourSameOrEqual(a, b, c, d){
  if ( a === b && a ===c && a === d){
      return "equal"
  }else if( a == b && a == c && a == d){
      return "same"
  }else{
      return "null"
  }
}
console.log(areAllFourSameOrEqual(true, true, true, 2))

