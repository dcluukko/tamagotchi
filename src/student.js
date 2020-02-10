export class Student {
  constructor (name){
    this.studyLevel = 10;
    this.energyLevel = 10;
    this.networkLevel = 10;
    this.name = name; 
  }

  coffeeBreak() {
    this.energyLevel = 10
  }

  setEnergy() {
    setInterval(() => {
        this.energyLevel--;
    }, 1000);
  }
}

