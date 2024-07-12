let val="x";
function cal(obj){
    if(obj.innerHTML == ""){
    
    if(val == "x"){
        obj.innerHTML="x";
        check(obj);
        val="0";
    }
    else 
    {
        obj.innerHTML="0";
        check(obj);
        val="x";
    }
}
}
function check(obj){
    var key = obj.innerHTML;

    var key1=document.getElementById("container11").innerHTML;
    var key2=document.getElementById("container12").innerHTML;
    var key3=document.getElementById("container13").innerHTML;
    var key4=document.getElementById("container14").innerHTML;
    var key5=document.getElementById("container15").innerHTML;
    var key6=document.getElementById("container16").innerHTML;
    var key7=document.getElementById("container17").innerHTML;
    var key8=document.getElementById("container18").innerHTML;
    var key9=document.getElementById("container19").innerHTML;
    

 if((key==key1) && ((key1==key2)&&(key1==key3)||(key1==key4)&&(key1==key7)||(key1==key5)&&(key1==key9)))
 {
    alert(`${key} wins`)
 }

else if((key==key2) && ((key2==key1)&&(key2==key3)||(key2==key5)&&(key2==key8)))
{
    alert(`${key} wins`)
 }
 else if((key==key3) && ((key3==key1)&&(key3==key2)||(key3==key6)&&(key3==key9)||(key3==key5)&&(key3==key7)))
    {
        alert(`${key} wins`)
     }
else if((key==key4) && ((key4==key5)&&(key4==key6)||(key4==key1)&&(key4==key7)))
    {
        alert(`${key} wins`)
     }
     else if((key==key5)&&((key5==key1)&&(key5==key9)||(key5==key3)&&(key5==key7) ||(key5==key4)&&(key5==key6) ||(key5==key2)&&(key5==key8)))
        {
          alert(`${key} wins`)
          resetbutton();
        }
        else if((key==key6)&&((key6==key3)&&(key6==key9)||(key6==key5)&&(key6==key4)))
        {
          alert(`${key} wins`)
          resetbutton();
        }
        else if((key==key7)&&((key7==key4)&&(key7==key1)||(key7==key8)&&(key7==key9)||(key7==key5)&&(key7==key3)))
        {
          alert(`${key} wins`)
          resetbutton();
        }
        else if((key==key8)&&((key8==key5)&&(key8==key2)||(key8==key7)&&(key8==key9)))
       {
          alert(`${key} wins`)
          resetbutton();
        }
        else if((key==key9)&&((key9==key8)&&(key9==key7)||(key9==key5)&&(key9==key1)||(key9==key6)&&(key9==key3)))
        {
         alert(`${key} wins`)
         resetbutton();
        }     
}
function restart(){
    for(let i=1;i<10;i++)
    {
        document.getElementById(`container1${i}`).innerHTML="";
    }
}