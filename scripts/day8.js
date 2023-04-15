console.log(1/4);
console.log(7%4);
console.log(0%5);


if (5%5==0){
    console.log("this number is divisible by 5");
    
}else if(4%4==0){
    console.log("this is number is divisable by 4");
    
}else {
    console.log("this number is not divisible by 5");
}


let b=["1",2,3,4,5,6,7,8,9,0];
let total=b.length;
if(total%2==0){
    console.log("even");
   }else{
    console.log("odd");
   }
   
function numbers(f){
     let h= f.length;
      if(h%2==0){
        console.log("even");
       }else{
        console.log("odd");
       }
     return h;

}

let d= numbers([1,2,3]);
console.log(d);
