let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}

// throws error due to y not being visible outside of the function
// also, program seems to have stopped at this error
//console.log(x + y);

console.log(x + z);
