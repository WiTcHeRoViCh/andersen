function requestTo(url){
  "use strict";
  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      return new Error(error);
    });
}


"use strict";
requestTo("http://www.json-generator.com/api/json/get/cfQCylRjuG")
  .then((result) => {
    if (result.getUsersData === true){
      return requestTo("http://www.json-generator.com/api/json/get/cfVGucaXPC");
    }
  }).then((result) => {
    console.log(result);
  })