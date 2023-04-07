function btn4(){
    document.getElementById("saida").innerHTML+="4";
}
function btn7(){
    document.getElementById("saida").innerHTML+="7";
}
function btn1(){
    document.getElementById("saida").innerHTML+="1";
}
function btnPonto(){
    document.getElementById("saida").innerHTML+=".";
}
function btn8(){
    document.getElementById("saida").innerHTML+="8";
}
function btn5(){
    document.getElementById("saida").innerHTML+="5";
}
function btn2(){
    document.getElementById("saida").innerHTML+="2";
}
function btn0(){
    document.getElementById("saida").innerHTML+="0";
}
function btn9(){
    document.getElementById("saida").innerHTML+="9";
}
function btn6(){
    document.getElementById("saida").innerHTML+="6";
}
function btn3(){
    document.getElementById("saida").innerHTML+="3";
}
function btnBarra(){
    document.getElementById("saida").innerHTML+="/";
}
function btnMais(){
    document.getElementById("saida").innerHTML+="+";
}
function btnMenos(){
    document.getElementById("saida").innerHTML+="-";
}
function btnVezes(){
    document.getElementById("saida").innerHTML+="*";
}
//functionCalcular
function calcular(){  
    x=document.getElementById("saida");
    if(x.innerHTML.length===0){
        alert("Digite algo");
    }else{
        x.innerHTML=eval(x.innerHTML);
    }
}
//functioReset
function reset(){
   x=document.getElementById("saida");
    x.innerHTML="";
}
//FunctionExcluir
function excluir(){ 
    var o=document.getElementById("saida");
     o=o.innerHTML.slice(0,-1);
     document.getElementById("saida").innerHTML=o;
}