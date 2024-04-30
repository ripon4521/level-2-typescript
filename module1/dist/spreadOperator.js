"use strict";
{
    const mentors1 = {
        next: "ripon",
        prisma: "ripon",
        deops: "ripon"
    };
    const mentors2 = {
        next1: "ripon",
        prisma2: "ripon",
        deops3: "ripon"
    };
    const mentrsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // console.log(mentrsList)
    const array = (...friends) => {
        friends.forEach((friend) => console.log(`hi ${friend}`));
    };
    array("froid", "Fff");
}
