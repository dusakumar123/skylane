// for(var i=0; i<=35;i++){
//     var num=document.getElementById('num');
//     num.innerText=i;
//     console.log(i);
    
// }

async function delayedLoop() {
    
    for (let i = 0; i <=35; i++) {
        var num=document.getElementById('num');
      // Delay execution for 1 second
      await new Promise(resolve => setTimeout(resolve, 100));
     
       num.innerText=i;

    }
   
  }
  async function delayedLoop2() {
    
  for (let i = 0; i <=5; i++) {
    var num2=document.getElementById('num2');
    // Delay execution for 1 second
    await new Promise(resolve => setTimeout(resolve, 100));
   
     num2.innerText=i;

  }
}
  delayedLoop();
  delayedLoop2();
  