{

    
const mentors1: {
    next: string;
    prisma: string;
    deops: string;
} = {
    next : "ripon",
    prisma : "ripon",
    deops : "ripon"
}

const mentors2: {
    next1: string;
    prisma2: string;
    deops3: string;
} = {
    next1 : "ripon",
    prisma2 : "ripon",
    deops3 : "ripon"
}

const mentrsList :{
    next1: string;
    prisma2: string;
    deops3: string;
    next: string;
    prisma: string;
    deops: string;
} = {
    ...mentors1,
    ...mentors2
}

// console.log(mentrsList)

const  array = (...friends:string[] ) =>{


    friends.forEach((friend:string) => console.log(`hi ${friend}`))
}
array ( "froid", "Fff")














}