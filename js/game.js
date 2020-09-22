$(function () {
  //目前題號
  var choosedQuestion = 0;
  var completed = 0;
  //答案
  var answers = ["ABCDE", "A", "A", "D", "D", "E", "F", "B", "G", "A"];

  //預載圖片
  for (var i = 1; i <= 10; i++) {
    var p = new Image();
    var q = new Image();
    var s = new Image();
    p.src = "images/puzzleDone-" + i + ".png";
    q.src = "images/question-q" + i + ".png";
    s.src = "images/question-q" + i + "-success.png";
  }

  //Step1.選擇拼圖題號
  $(".puzzle-item").on("click", function () {
    choosedQuestion = $(this).off().index();
    $(".questionWrap--q" + (choosedQuestion + 1)).fadeIn();
    $(".questionArea").fadeIn();
  });

  $(".question input").on("click", function () {
    if (answers[choosedQuestion].indexOf($(this).val()) != -1) {
      $(".question--q" + (choosedQuestion + 1)).addClass(
        "animate__animated animate__flipOutY"
      );
      $(".questionSuccess--q" + (choosedQuestion + 1)).addClass(
        "animate__animated animate__flipInY"
      );
      setTimeout(function () {
        $(".questionWrap--q" + (choosedQuestion + 1)).fadeOut();
        $(".questionArea").fadeOut();
        $(".puzzle-item")
          .eq(choosedQuestion)
          .addClass(
            "puzzle-item--active puzzle-item--pu" +
              (choosedQuestion + 1) +
              "--active"
          )
          .find(".puzzle-item-text")
          .addClass("puzzle-item-text--active");
        onComplete();
      }, 1800);
    } else {
      $(".questionFail span").text(" " + answers[choosedQuestion] + " ");
      // $('.questionFail').fadeIn().delay(1500).fadeOut();
      $(".questionFail").fadeIn();
      $(".buttonBack").on("click", function () {
        $(".questionFail").fadeOut();
      });
    }
  });

  function onComplete() {
    completed++;
    if (completed == 10) {
      $(".bg-CTCI").addClass("bg-CTCI--finish");
      $(".bg-CTCI--finish--text").fadeIn();
      $(".puzzle").fadeOut();
    }
  }
});
