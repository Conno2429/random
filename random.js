var random1 = Math.floor(Math.random() * 100);

//console.log('Random Number Generated:' + random);

var denom = 101;




function random2() {
    var seed = Date.now();
    var val = Math.pow(seed % denom, 5);
    denom++;
    return (val);
}

 function genRandomNumbers(count) {
    var result = [];
    for (var i = 1; i <= count; i++) {
        result.push(random2());
    }
    return result;
}

function printList(list) {
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

console.log("Random #1", random1);
console.log("Random #2:", (random2()));

var rlist = genRandomNumbers(2000);
// console.log(rlist);
printList(rlist);



