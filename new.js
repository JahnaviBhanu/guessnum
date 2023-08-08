var num=Math.floor(Math.random()*100)+1;
var count=0;
document.getElementById('btn').addEventListener('click',function(){
     var guess=parseInt(document.getElementById('guess-ip').value);
     count++;
     if(guess===num){
       displaymsg("Congratulations! Your Guess is Correct in "+count+" Attempt");
       document.getElementById('btn').disabled=true;
     }
     else if(guess<num){
        displaymsg("Too Low! Try a high  Number");
         }
     else{
        displaymsg("Too High! Try a Low Number");
     }
    });
     function displaymsg(msg){
        document.getElementById('msg').textContent=msg;
     }