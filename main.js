var arrayforgame = ['come','india','love','hate','war','stingy','arrogant','blind','peace','lotus'];

   var answer = document.querySelector("#getinput"); 
   
   var playerscore;
	 var display2  = document.querySelector("#display");
   var getscore = document.querySelector("#score");
   
   var array;
   var interval1;
   var interval2;
   
   function start(){
    clearInterval(interval1);
    clearInterval(interval2);
    
    answer.select();
    array=arrayforgame;
    answer.value="";
    getscore.innerHTML="0";
    countdown();
  }

  function countdown(){
    var i=2;
    display2.innerHTML=3;
    interval1=setInterval(count,1000);
    function count(){
      display2.innerHTML=i;
      i-=1;
      if(i<0){
        clearInterval(interval1);
        play();
        return;
      }
      return;
    }
  }

  function play(){
    playerscore=0;
    display2.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
    
    interval2=setInterval(count,3000);
    function count(){
      
      
    
        if(answer.value.toLowerCase()!=(display2.innerHTML).toLowerCase()){
          clearInterval(interval2);
          gameEnd();
          return;
        } 
        else{
        playerscore++;
        getscore.innerHTML=playerscore;
        display2.innerHTML=(array[Math.floor((Math.random()*array.length))]).toLowerCase();
        answer.value="";
        
        }
      
      
      
    }
    
  }

  function gameEnd(){
    display2.innerHTML="try again";
    answer.value="";
    window.getSelection().empty();
  }
  
  