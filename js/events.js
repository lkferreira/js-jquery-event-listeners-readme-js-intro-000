function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
});
}

function frameIt() {
  $('img').on('load', function(){
    $( "img" ).addClass( "tasty" );
});
}

funtion pressIt() {
  $('form').on('keydown', function(key) {
  if(key.which == G){
      alert('G was pressed');
  }
});
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()

});
