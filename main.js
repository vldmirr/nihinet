function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();

    var clock = document.getElementById("clock");

    clock.innerText = updateTime(hour) + ":" + updateTime(min) + ":" + updateTime(sec); /* adding time to the div */
    document.getElementById("cur_date").innerHTML = "年 " + y + " 月 " + m + " 日 " + d;

    /* setting timer */
    
    var t = setTimeout(
      function(){ 
        currentTime() 
    }, 1000); 
  }
  
  updateTime=(k)=> {
    var x;
    (k < 10)? x="0" + k: x=k; /* setting format time */
    return x;
  }
  
currentTime()
document.querySelector('.fa-address-card').onclick=function a(){
    clock.classList.toggle('fade');
    // document.getElementById("contact").classList.toggle('fade');
}



  /*test*/
  

  
  