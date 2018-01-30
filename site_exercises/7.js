var callbacks = [];
for (let i = 0; i < 10; i++) {
  callbacks.push(function(){console.log(i)});
}

callbacks[2]()
