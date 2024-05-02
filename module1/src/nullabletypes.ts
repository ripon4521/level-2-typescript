{
// 

// function name(student:string | null) {
//         if (student) {
//             console.log("Student")
//         }
//         else if (student = "null"){
//             console.log("Not student")
//         }
// }
// name(null)
function converter(dollar:unknown) {
    if (typeof dollar === "number") {
      const tk = (109.71 * dollar);
      console.log(tk)
    } else if (typeof dollar === 'string') {
        console.log("please provide a valid number")
    }
   else {
    console.log("null/ undefined not a valid number")
   }
}

converter(2)









// 
}