function add(){  
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub(){  
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    if(a<b){
        let d=a;
        a=b;
        b=d;
    }
    let c = a-b;
    document.getElementById("answer2").innerHTML="Difference is "+c;
}
function mul(){  
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a*b;
    document.getElementById("answer3").innerHTML="Multiplication is "+c;
}
function div(){  
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c = a/b;
    document.getElementById("answer4").innerHTML="Division is "+c;
}