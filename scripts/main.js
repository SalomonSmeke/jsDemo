var runonce = true;

function startYourEngines(){
  var $wrapper = $(".wrapper");
  var $display = $(".time");

  updateDOM($wrapper);

}

//Sample function
function tick(){

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
