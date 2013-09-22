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

Lift.prototype.help = {};
Lift.prototype.help['Squat'] = {
    description: "The squat is a compound, full body exercise that trains primarily lower body and core, as well as strengthening the bones, ligaments and tendons throughout the lower body. Squats are considered a vital exercise for increasing the strength, power, and size of the legs and glutes. Primary Muscle Worked: Quadriceps. Other Muscles: Calves, Glutes, Hamstrings, Lower Back",
    link: "http://www.youtube.com/watch?v=kZjDb1LRtRc"
}

Lift.prototype.help['Bench Press'] = {
    description: "The bench press is an exercise of the upper body, performed by laying on the back on a bench, lowering a weighted barbell to chest level, and then pushing the bar back up until the arms are straight. The exercise focuses on the development of chest muscles. Primary Muscle Worked: Chest. Other Muscles: Shoulders, Triceps",
    link: "http://www.youtube.com/watch?v=sss-zYhHpq0"
}

Lift.prototype.help['Deadlift'] = {
    description: "The deadlift is the act of lifting a loaded barbell from ground to hip-level without momentum. It is considered one of the best full-body lifts for overall muscle development. Primary Muscle Worked: Lower Back. Other Muscles: Calves, Forearms, Glutes, Hamstrings, Lats, Middle Back, Quadriceps, Traps",
    link: "http://www.youtube.com/watch?v=6XiPP8D_qA0"
}

Lift.prototype.help['Press'] = {
    description: "The press, overhead press or shoulder press is a weight training exercise in which a weight is pressed straight upwards from the shoulders until it is locked out overhead. The lift is performed standing. Primary Muscle Worked: Shoulders. Other Muscles: Triceps",
    link: "http://www.youtube.com/watch?v=SDM3PhEXCo4"
}

Lift.prototype.help['Row'] = {
    description: "A bent-over barbell row (or barbell row) is a weight training exercise that targets a variety of back muscles. Exercise is performed by lifting a barbell to the torso, keeping elbows close to body, contracting the back, holding the position for a brief pause. Primary Muscle Worked: Middle Back. Other Muscles: Biceps, Lats, Shoulders",
    link: "http://www.youtube.com/watch?v=-xlBxIMqh3A"
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
