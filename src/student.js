export class Student {
  constructor (name){
    this.studyLevel = 10;
    this.energyLevel = 10;
    this.networkLevel = 10;
    this.name = name; 
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

