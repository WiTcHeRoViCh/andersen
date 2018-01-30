class Speaker {
  constructor(name, verb) {
    this.name = name
    this.verb = verb || "says";
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'")
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name)
  }
  speak(text) {
    super.speak(text.toUpperCase())
  }
  get verb(){
    return "shouts";
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")
