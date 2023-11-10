
let hisoblash =document.getElementById("yechish")

    hisoblash.onclick = function diff21(){
    let n1 =document.getElementById("son").value
    let parag =document.getElementById("natija")
    if(n1>21){
     return parag.innerHTML=(n1-21)*2;
    }
    else if(n1<21){
      return parag.innerHTML=21-n1;
    }
    else{
      return parag.innerHTML=0;
    }
  }
