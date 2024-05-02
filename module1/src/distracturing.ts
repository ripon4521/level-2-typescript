{
// 
 type User = {

        name: string;
        age: number;
        compnay: string;
        salary: number;
        addres: {
            roadno: number;
            block: string;
            thana: string;
            jila: string;
            PostCode?: number;
        };
    
 }

const user: User = {
    name : "mezba",
    age : 25,
    compnay: "programming hero",
    salary : 1200,
    addres : {
        roadno : 1,
        block : "B",
        thana : "Mohammadpur",
        jila : "Dhaka",
     
    }
}

const { age, addres: { PostCode} } = user;
console.log({age}, {PostCode})


















// 


}