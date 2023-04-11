let table={
    color:"brown",
    size:"2m",
    weight:"2kg",
    legs:4,
    shape:"rectangle"
}
console.log(table);
console.log(table.size);

table.shape="circular";
table.price=2000;
console.log(table);

let names =["patrick","prosper","mamie"];
console.log (names);

let w =[10,20,25];
console.log(w);

let p=[{color:"brown",
height:"tall"
},
{color:"black",
height:"medium"
},
{color:"brown",
height:"medium"}];
console.log(p);

let patric={color:"brown",
height:"tall"
}
let prospe={color:"black",
height:"medium"

}
let mami={color:"brown",
height:"medium"

}
let pr=[patric,prospe,mami]
console.log(pr);

names[0];
console.log(names[0]);

console.log(pr[2].color);

let cla="i love Jesus"
let uppercla= cla.toUpperCase();
console.log(uppercla);
let lowercla= cla.toLowerCase();
console.log(lowercla);
let leng= cla. length;
console.log(leng);

let ch="Hello class ,xyz";
let str1=ch.slice(10,16);
console.log(str1);
let str2=ch.replace("class","morning");
console.log(str2);


ch="Hello class,xyz"+"teck-code";
console.log(ch);
let str3=str2.split(" ");
console.log(str3);



// document.body.innerHTML=document.body.innerHTML.replace("we","you");

const ch2= document.getElementById("p").innerHTML;
let sentences= ch2.split(". ");
console.log(sentences);
let sent1= sentences[0].replace("we","you");
console.log(sent1);
let sent2=sentences[1].replace("we ","You " ).replace("exercises","practice").toUpperCase;
let sent3= sentences[2].replace("I","you");
let sent4= sentences[3];
let result =sent1+ ".\n " +sent2+ ".\n" +sent3+".\n" +sent4;

console.log(result);

// result= sent2.toUpperCase();
// console.log(result);

// result= sent2.replace("exercises","practice");
// console.log(result);


let a=2.333;
let b= 1;
let d =a.toFixed(2);
let c= d+b;
console.log(d);

let namess=["clairon","Niwemfura","Aimee","Angelique"];
let all =namess . join("to");
console.log(all);
let rev = namess. reverse();
console.log(rev);

let x="Today is tuesday";
let r= x. split("");
let re = r. reverse();
console.log(r);

let y= 10024;
let z= y.toString();
let o= z.split("");
let k= o.reverse();
let l=k.join("");
let j=parseInt(l);
console.log (j);

let s="i.like.this.program.very.much";
let h=s.split(".")
let f=h.reverse("");
let q=f.join(".");
console.log(q);
