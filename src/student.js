export class Student {
  constructor (name){
    this.studyLevel = 10;
    this.energyLevel = 10;
    this.networkLevel = 10;
    this.name = name; 
    this.toolBox = [];
}

life() {
  let clock = setInterval(() => {
    this.energyLevel-- ;
    this.studyLevel--;
    this.networkLevel--;
    if (this.studyLevel === 0 || this.energyLevel === 0 || this.networkLevel === 0) {
      clearInterval(clock);
      console.log('isliving');
    }
  }, 1000);
}
leveling() {
  let levelOne = setTimeout(() => {
  this.levelOne();
  }, 2000)
}

levelOne()  {
  this.studyLevel = 20;
  this.energyLevel = 20;
  this.networkLevel = 20;
}
  coffeeBreak() {
    this.energyLevel = 10
  }
  study() {
    this.studyLevel = 10
  }
  meetUp() {
    this.networkLevel = 10
  }
}

