var text = "w3resource";
for (var i = 0;i<10;i++){
	setInterval(function(){
	  text = text[text.length-1] + text.substring(0, text.length - 1);
	  console.log(text)
	},100)
}

