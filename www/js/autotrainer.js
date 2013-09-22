(function() {
  autotrainer = {
    initialize: function() {
      populateTodaysWorkout('A');

      $('#complete-workout').click(function() {
        $('.workout-list li').remove();
        populateTodaysWorkout('B');
      })
    },

    program: new StartingStrength()
  }

  var populateTodaysWorkout = function(a) {
    var lifts = autotrainer.program.newWorkout(a)
    for(var i=0; i<lifts.length; i++) {
      lift = lifts[i];
      addLift(lift);
    }
  }

  var loadWorkoutHistory = function() {
    var history = window.localStorage.getItem('workoutHistory');

    if (history !== null) {
      autotrainer.workoutHistory = JSON.parse(history);
    } else {
      autotrainer.workoutHistory = [];
    }
  }

  var addLift = function(lift) {
    newLift = $('.workout-list').loadTemplate($('#lift-template'),
    {
      lift: lift.details.name,
      weight: lift.details.weight,
      reps: lift.details.reps,
      helpDescription: lift.help[lift.details.name]['description'],
      helpLink: lift.help[lift.details.name]['link']
    },
    {
      append: true,
      afterInsert: function($elem) {
        $elem.swipeleft(function(){
          $(this).addClass('failed');
          $(this).hide( "explode" );
          lift.result = 'fail';
        })

        $elem.swiperight(function(){
          $(this).addClass('succeeded');
          $(this).hide( "explode" );
          lift.result = 'pass';
        })
      }
    })
  }
})();
