                             

function myFunction(){
    var who = document.getElementById('whoru').value;
    document.getElementById('hi').innerHTML = "Hello "+who+"!";
    document.getElementById("yeong").src= "hello.png";
    document.getElementById("hi").setAttribute("id", "hi2");
    document.getElementById('hi4').innerHTML = who+", Wanna see my project?";
    document.getElementById("yes").style.display="inline" ;
    document.getElementById("no").style.display="inline";
    document.getElementById('hi4').setAttribute("id", "hi5");
    document.getElementById('yesno').style.color="black";
    document.getElementById('yesno').setAttribute("id", "yesno2");
    document.getElementById('chcolor2').setAttribute("id", "chcolor3");
    document.getElementById("chcol").style.display="inline" ;
}


function ckbutton(){
    document.getElementById('page').style.display='inline';
    document.getElementById('page').style.textDecoration="none";
    document.getElementById('change').style.display='none';
    if (document.getElementById('ckevent')){
    document.getElementById('ckevent').setAttribute("id", "hi5");}
}

function ckbutton2(){
    document.getElementById('page').style.display='none';
    document.getElementById('change').style.display='inline';
    if (document.getElementById('ckevent')){
    document.getElementById('ckevent').setAttribute("id", "hi5");}

}



function changecolor(){
var colorvalue=document.getElementById('chcol').value;

var alist=["#fcf3f6","#eaf5fb","#e6ddee","white"];
var blist=["Next is Pink","Next is Blue","Next is Purple","Next is White"];
for(i=0;i<(blist.length-1);i++){
if( colorvalue === blist[i])
{ document.body.style.backgroundColor=alist[i];
  document.getElementById('chcol').value=blist[i+1];
  console.log(blist[i+1]); 
}
else if (colorvalue === blist[3]){
    document.body.style.backgroundColor=alist[3];
document.getElementById('chcol').value=blist[0];  
}
}
} 

// function changecolor(){
//     var colorvalue=document.getElementById('chcol').value;

// if(colorvalue === "Next is Pink"){
//     document.body.style.backgroundColor="#fcf3f6";
//     document.getElementById('chcol').value="Next is Blue";
// }

// else if(colorvalue=== "Next is Blue")
// { document.body.style.backgroundColor="#eaf5fb";
//     document.getElementById('chcol').value="Next is Purple";
// }

// else if(colorvalue==="Next is Purple")
// {document.body.style.backgroundColor="#e6ddee";
//     document.getElementById('chcol').value="Next is White";
// }

// else if(colorvalue==="Next is White")
// {document.body.style.backgroundColor="white";
//     document.getElementById('chcol').value="Next is Pink";
// }


// }

