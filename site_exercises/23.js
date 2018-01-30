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

get("http://marijnhaverbeke.nl").then((res) => {
  let urls = [];
  res.match(/href=+\"\w+[.html]*\/*\"/g).forEach((el) =>{
    urls.push("http://marijnhaverbeke.nl/"+el.split('"')[1]);
  })
  return urls;
}).then((result) => {

  Promise.all(result.map(get)).then((res) => {
    console.log(res)
  })
})