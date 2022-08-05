'use strict';
pi = 3.1416; //pi is not defined
console.log(pi);

function myFunction(){
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); //pi is not defined

'use strict'
let a
a = 5;
console.log(a);
