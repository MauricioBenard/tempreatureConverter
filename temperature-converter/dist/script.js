document.getElementById("btn").addEventListener("click", function() {
  
   let fahrenheitTemp =  document.getElementbyId("temperature").value;      fahrenheitTemp = parseInt(fahrenheitTemp);
  
   document.getElementById("result".textContent) = ((fahrenheitTemp - 32 ) * 5/9.toFixed(2);
                                                
  )}