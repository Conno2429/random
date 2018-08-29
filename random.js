var random1 = Math.floor(Math.random() * 100);

//console.log('Random Number Generated:' + random);

var time = new Date();
var curTime = time.getTime();


function random2(seed) {
    var seed = curTime;
    var val = seed / (10000000000000);
    return (val);
}

var rannum2 = random2(curTime);
console.log("Random #1", random1);
console.log("Random #2:", rannum2);

