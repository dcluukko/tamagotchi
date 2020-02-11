export class Student {
  constructor (name){
    this.max = 10;
    this.studyLevel = this.max;
    this.energyLevel = this.max;
    this.networkLevel = this.max;
    this.name = name; 
    this.toolBox = [];
    this.level = 1;
    this.easylevel = 8;
  }

  life() {
    let clock = setInterval(() => {
      this.energyLevel-- ;
      this.studyLevel--;
      this.networkLevel--;
      if (this.studyLevel === 0 || this.energyLevel === 0 || this.networkLevel === 0) {
        clearInterval(clock);
        console.log('isdead');
        clearInterval(this.levelInterval);
      } else if (this.energyLevel === this.max /2 || this.studyLevel === this.max/2 || this.networkLevel === this.max/2) {
        alert("U ON ACADEMIC PROBATION");
      }
    }, this.level * 1000);
    // }, 1000);
  }
  
  leveling() {
    this.levelInterval = setInterval(() => {
      this.levelUp();
      console.log('level', this.level);
      if (this.level === 8) {
        alert("YOU MADE IT!!!! Now go find a job >:D");
      }
    }, 20000);
  }

  levelUp()  {
    this.level = this.level += 1; 
    this.easylevel = this.easylevel -= 1; 
    console.log(this.easylevel);
    this.max = this.easylevel * 10;
    this.studyLevel = this.max;
    this.energyLevel = this.max;
    this.networkLevel = this.max;
    console.log(this.max);
    return this.max;
  }

  coffeeBreak() {
    this.energyLevel = this.max;
    console.log('energy=',this.max);
  }
  study() {
    this.studyLevel = this.max;
  }
  meetUp() {
    this.networkLevel = this.max;
  }
}

