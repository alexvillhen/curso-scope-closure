var var1 = 1;
let let1 = 1;

function myFunction(){
    //Function scope
    var var2 = 2;
    let let2 = 2;

    for(var i = 0; i < 1; i++){
        //block scope
        var var3 = 3;
        let let3 = 3;
    }
    console.log(var3);
}

myFunction();