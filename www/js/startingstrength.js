function Lift(name, weight, reps) {
  this.details = {
    name: name,
    weight: weight,
    reps: reps
  }
  this.result = null
}

function StartingStrength() {
  this.squat = 220;
  this.bench = 130;
  this.dl = 270;
  this.press = 90;
  this.row = 80;
  this.day = 'A';
  this.liftList = [];
}

StartingStrength.prototype.lifts = function() {
  function addLift(list, liftName, workWeight) {
    incr = (workWeight - 45) / 4;

    var weight;
    for (weight = 45; weight < workWeight; weight += incr) {
      list.push(new Lift(liftName, roundDownToFive(weight), 5));
    }

    var i;
    for (i = 0; i < 3; i++) {
      list.push(new Lift(liftName, workWeight, 5));
    }
  }

  function roundDownToFive(n) {
    rounded = Math.floor(n);
    while ((rounded % 5) !== 0) {
      rounded--;
    }
    return rounded;
  }

  if (this.day = 'A') {
    addLift(this.liftList, 'Squat', this.squat);
    addLift(this.liftList, 'Bench Press', this.bench);
    addLift(this.liftList, 'Deadlift', this.dl);
  }

  return this.liftList;
}
