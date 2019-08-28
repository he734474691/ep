var count = 0;
var arr = [];
for (var i=0 ; i<5; i++) {
    var newArr = [];
    for(var j = 0 ;j < 5;j++){
     newArr.push(++count);   
    }
    arr.push(newArr);
}