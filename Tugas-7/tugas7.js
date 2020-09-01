console.log("---SOAL 1---");

class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this.cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class Ape extend Animal {
    constructor (name){
        super (name);
        this._frog = frog;
    }
  
    yell() {
      return "AAUUUOOO"
    }

}
class Frog extend Animal {
    constructor (name){
        super (name);
        this._frog = frog;
    }
    jump () {
        return "HOP HOP HOP"
   }
}

let sheep = new Animal("Shaunn");

console.log(sheep._name);
console.log(sheep._legs);
console.log(sheep.cold_blooded);

let sungokong = new Ape("kera sakti")
sungokong.yell();

let kodok = new Frog("buduk")
kodok.jump();


console.log("---SOAL 2---");

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  };

  stop = () => {
    clearInterval(this.timer);
  };

  start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };
}

let clock = new Clock({ template: "h:m:s" });
// clock.start();
