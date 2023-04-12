// let sum = 100**3 + 9874;
// console.log(sum);
// let res= 9874 + 100**3;
// console.log(res);

function summation(){
  let add = 100**3 + 9874;
  console.log("sum",add);
  return "add";
}
let a = summation()+20;
let salary= a+1000;
console.log("return",a);
console.log("a+1000",salary);

function even(x,y) {
    let sum = x+y;
    return sum;

}
let v=even(20,40);
console.log(v);
let k=even(10,30)
console.log(k);

let m = even(even(12,13), even(34,35));


function string(i){
    let h=i.split(";");
    return h.length;
}
let g=string("hi;today;is;js");
console.log(g);
let p=string("the;number;is;5;2");
console.log(p);
let l=string("never;again");
console.log(l);
let s=string("last;one;");
console.log(s);

