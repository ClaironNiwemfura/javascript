const save= document.getElementById("save");
// save.addEventListener("click",()=>{
//     console.log("Hello");
// });
save.addEventListener("dblclick",()=>{
    // console.log("Hello double click")
    // alert("Hello double click")
});



const form=document.getElementById("form");
form.addEventListener("submit",()=>{
    // event.preventDefault();
    // alert("submit");

    // let text=form.name.value;
    // alert(text);

    //  let password=form.password.value;
    //  alert(password);

    //  form.reset();
    let text=form.name.value;
    let password=form.password.value;
    if (text=="") {
        alert ("please fill this form");
    }
    if (password==""){
        alert("please fill the password space")
    }
})
