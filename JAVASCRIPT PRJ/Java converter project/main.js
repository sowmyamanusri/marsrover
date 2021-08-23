document.getElementById("kgsInput").addEventListener(
    "input",e=>{
    let kgs=e.target.value;
    document.getElementById("lbsOutput").innerHTML=kgs*2.205;

})

document.getElementById("meters").addEventListener(
    "input",e=>{
        let meter=e.target.value;
        document.getElementById("centimeters").innerHTML=meter *100;
    }
)

document.getElementById("celius").addEventListener
("input",e=>{
    let celius=e.target.value;
    document.getElementById("fahrenheit").innerHTML=(celius*9%5)+32;
})