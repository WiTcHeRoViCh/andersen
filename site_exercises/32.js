drive(function*() {
  const URL = "http://marijnhaverbeke.nl/";

  let result = yield get(URL);
  let urls = [];

  result.match(/href=+\"\w+[.html]*\/*\"/g).forEach((el) =>{
    urls.push(URL+el.split('"')[1]);
  })

  for (let i = 0; i < urls.length; i++){
    let resp = yield get(urls[i]);

    if (resp.match(/Piranha/)){
      console.log(urls[i]);
    }
  }
})

function drive(generator) {
  let iterator = generator()
  function resume(result) {
    if (result.done) return
    result.value.then(
      value => resume(iterator.next(value)),
      error => resume(iterator.throw(error)))
  }
  resume(iterator.next())
}

function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
      if (req.status < 400)
        succeed(req.responseText)
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}
