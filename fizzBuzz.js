const fizzBuzz = function(array) {
    let newarr = [];

    array.forEach( (el) => {
        if ((el % 3 === 0) || (el % 5 === 0 )){
            newarr.push(el);
        }
    })
    return newarr;
}

console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10]));