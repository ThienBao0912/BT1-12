var a = [];
for (var i=0, t=5; i<t; i++) {
    a.push(Math.floor(Math.random() * t));
}
console.log("Mảng random: ");
console.log(a);
var b = "";
var c = [];
var i = 0;
a[-1] = 0;
a[a.length] = 0;
do{
    b += a[i-1] + a[i] + a[i+1] + ",";
    i++;
}
while(i<5);
c.push(b);
console.log("Mảng sau khi Mutation: ");
console.log(c);



