function delay(ms){
  "use strict";
  return new Promise( (resolve, reject)=>{
    setTimeout(function(){resolve();}, ms)
  });
}

delay(1000).then(function(){alert("ssdsds ")});