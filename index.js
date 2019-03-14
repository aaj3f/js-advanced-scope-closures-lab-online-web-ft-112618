function produceDrivingRange(range) {
  return function (start, end) {
    let remainder = range - Math.abs(parseInt(end) - parseInt(start))
    if (remainder > 0) {
      return `within range by ${remainder}`
    } else {
      return `${Math.abs(remainder)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (total) {
    return percentage * total;
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
