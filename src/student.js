export class Student {
  constructor (name){
    this.max = 10;
    this.studyLevel = this.max;
    this.energyLevel = this.max;
    this.networkLevel = this.max;
    this.name = name; 
    this.toolBox = [];
    this.level = 1;
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
    setTimeout(() => {
    this.whatLevel();
    console.log('level', this.level)
    }, 2000);
  }

  whatLevel()  {
    this.level = this.level += 1; 
    console.log(this.level)
    this.max = this.level * 10;
    this.studyLevel = this.max;
    this.energyLevel = this.max;
    this.networkLevel = this.max;
    console.log(this.max)
    return this.max;
  }

  coffeeBreak() {
    this.energyLevel = this.max;
  }
  study() {
    this.studyLevel = this.max;
  }
  meetUp() {
    this.networkLevel = this.max;
  }
}

