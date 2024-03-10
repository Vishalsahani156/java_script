// objecte in java scripte in depthe 
//  const tinderzUser=new Object(){}
// not a singlten class 


const tinderuser = {};
tinderuser.id = 33;
tinderuser.name = "vishal";
tinderuser.islogin = false;
// console.log(tinderuser);

const regularuser = {
    email: "vishalsahani233@gmail.com",
    fullname: {
        use_name: {
            fist_name: "vishal",
            last_name: "Sahani",

        }
    }
}
// console.log(regular_user.fullname .use_name.fist_name.last_name);
// console.log(regularuser.fist_name)

const obj1 = { 1: 'a', 2: 'b', };
const obj2 = { 3: 'c', 2: 'd', };
const obj3 = { 1: 'e', 2: 'f', };
const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);
const obj5 = Object.assign({ obj1, obj2, obj3 });


// console.log(obj5);
const jsuser2 = {
    age: "vishal sahani",
    email: "Vishalsahani@gmail.com ",
    mobailNO: 923944949,
    city: "Jaipure ",

}
// console.log(jsuser2);

// create the one array 
const user = [
    {
        id: 2,
        email: "kumarsahani2332gmail.com ",

    },
    {
        id: 1,
        email: "Vi4sdd@gmail.com",
    },
    {
        id: 4,
        email: "ddddd@gmail.com",

    }
]
// console.log(user[1].email);
// console.log(user[2].id);
// console.log(user[0].id);

// De structurin and Json 
const data = {
    name: "VIahal",
    age: 23,
    cours: "js",
    price: 33,
}
//  console.log( data.name);
const { name: h } = data;
console.log(h);
const { age: h1 } = data;
console.log(h1);

// JSON 
// {
//     "name": "Vishal Kumar ",
//     'age':  223,
//     'price': '1444',
//     'instructor': "kumar vishal ",

// }

// Array json 
[
    {},
    {},
    {},
    {},
]