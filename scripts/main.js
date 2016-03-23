var runonce = true;
var done = true;
function startYourEngines(){
  var $wrapper = $(".wrapper");
  var $display = $(".time span");
  updateDOM($wrapper);
  done = false;
  $display.html("running");
}

//Sample function
function tick(){
  if (!runonce && !done){
  var lastChild = $(".wrapper:last-child");
  $(".wrapper").prepend($('<div class="color" style="background-color: #0f0">'))
}
}

//Sample HTML interactions
function updateDOM(parent){
  var $p = parent;
  for (var i = 0; i < 50; i++){
    var $section = $('<div class="color" style="background-color: #000">');
    $p.append($section);
  }
}

//Sample event handler
$(".time span").on("click", function(e) {
  if (runonce){
    startYourEngines();
    runonce=false;
  }
});

var myInterval = window.setInterval(tick, 500);
