
function tossACoin(){
var tossResult;

 var tossNum = Math.floor(Math.random()*2);
if(tossNum==1){
tossResult="<h1>Heads</h1> ";
}
else{
    tossResult="<h1>Tails</h1> ";
}

document.write(tossResult);

document.write("Reload the page to Toss Again");

}
