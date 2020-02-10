export class Student {
  constructor (name){
    this.studyLevel = 10;
    this.energyLevel = 10;
    this.networkLevel = 10;
    this.name = name; 
}
//Energy Level
  coffeeBreak() {
    this.energyLevel = 10
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


  // setEnergy() {
  //   let energyClock = setInterval(() => {
  //       this.energyLevel--;
  //   }, 1000);
  // }

// Study Level
  studyTime() {
    this.studyLevel = 10
  }

  // setStudy() {
  //   let energyClock = setInterval(() => {
  //     this.energyLevel--;
  // }, 1000);
  // }

//Network Level
  meetUpTime() {
    this.networkLevel = 10
  }

  // setNetwork() {
  //   setInterval(() => {
  //     this.networkLevel--;
  //   }, 1000);
  // }

  // kickedOut(interval) {
  //   clearInterval(interval);
  //   console.log(interval)
  //   console.log('interval')
  // }

  // isLiving() {
  //   if (this.studyLevel === 0 || this.energyLevel === 0 || this.networkLevel === 0) {
  //     kickedOut(setEnergy());
  //     console.log('isliving')
  //   }
  // }
}

