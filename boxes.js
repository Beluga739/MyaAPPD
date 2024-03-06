AFRAME.registerComponent('play',{
    init:function(){
    var duration = 120;
    var timerEl = document.querySelector("#timer");
    this.startTimer(duration, timerEl);
  },

    update: function () {
    this.isCollided(this.data.elementId);
  },

    startTimer: function (duration, timerEl) {
    var minutes;
    var seconds;

    setInterval(()=> {
      if (duration >=0) {
        minutes = parseInt(duration / 60);
        seconds = parseInt(duration % 60);

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        timerEl.setAttribute("text", {
          value: minutes + ":" + seconds,
        });

        duration -= 1;
      } 
    },1000)
  },
    isCollided: function (elemntId) {
    var element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
      if (elemntId.includes("#boxes")) {
        element.setAttribute("visible", false);
        this.updateScore();
      } 
    });
  },
  updateScore: function () {
    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value;
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });
  },

});