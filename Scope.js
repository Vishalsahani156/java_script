// scope in js
// gloable scope 
let a = 20000;
if (true) {
    let a = 30;
    const b = 300;
    var c = 2000;
    // console.log('inner values ',a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const y = "VIshal ";
    function twoo() {
        const x = 'hello';
        // console.log(x);
    }
    // console.log(y, 'one function ');

    twoo();

}
// execute the function 
one()


// nested if 
if (true) {
    const y = "vishal ";
    if (y == "vishal") {
        const free = 'price';
       console.log(free);

    } 
    
}