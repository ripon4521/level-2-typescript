type User = {
    name: string;
    age : 17 | 18 ;
    gender : "male" | "female";
    Bgroup ?: "0+"| "b+";

}

const user : User = {
    name : "khan",
    age : 17,
    gender : 'male',
    Bgroup: 'b+'

}
console.log(user)