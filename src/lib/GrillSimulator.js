
/*

given an initial temp for food
and a current temp for oven
it should incrementally increase food temp
*/

const COOK_FACTOR = 0.063; // fake percentage increase of difference

const incrementFoodTemp = (foodTemp, ovenTemp) => {
  return (foodTemp + ((ovenTemp - foodTemp) * COOK_FACTOR));
}

function * cookFood (foodTemp, ovenTemp) {
  console.log(`cooking: food: ${foodTemp.toFixed(2)}, oven: ${ovenTemp}`);
  while (foodTemp < ovenTemp) {
    foodTemp = incrementFoodTemp(foodTemp, ovenTemp);
    yield foodTemp;
  }
}

class Sensor {
  constructor(sampleGenerator, updateCallback, interval=1000) {
    this.values = [];
    this.sampleGenerator = sampleGenerator;
    this.sampleInterval = null;
    this.updateCallback = updateCallback;
    this.interval = interval;
  }

  sample() {
    let val = this.sampleGenerator.next().value;
    // console.log(`sampled ${val}`);
    this.values.push(val);
    if (this.updateCallback) {
      this.updateCallback();
    }
  }

  start() {
    if (this.sampleInterval) {
      return;
    }

    this.sampleInterval = setInterval(this.sample.bind(this), this.interval);
  }

  stop() {
    clearInterval(this.sampleInterval);
  }

  minutesAgo(howMany) {
    // assuming a 1 second sampling rate
    // 1 minute ago is [length - 60]
    // 5 minutes ago is [length - 300]
    // 10 minutes ago is [length - 600]

    // but really, we'll fudge it
    // and divide by 10
    let index = this.values.length - (howMany * 6);
    return index >= 0 ? this.values[index] : '--'
  }

  current() {
    return this.values[this.values.length-1];
  }

}

export {
  cookFood,
  Sensor
}
