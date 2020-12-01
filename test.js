var a = [];
for (var i=0, t=5; i<t; i++) {
    a.push(Math.floor(Math.random() * t));
}
console.log("Mảng random: ");
console.log(a);
function functionArray(a){
    var b = [];
    var sum = 0;
    for (i=0; i<a.length; i++){
        if (typeof a[i-1] !== 'undefined'){
            sum += a[i-1];
        }
        if (typeof a[i] !== 'undefined'){
            sum += a[i];
        }
        if (typeof a[i+1] !== 'undefined'){
            sum += a[i+1];
        }
        b.push(sum);
        sum=0;
    }
    return b;
}
console.log("Mảng sau khi Mutation: ")
console.log(functionArray(a));

