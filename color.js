// JavaScript File

var colors=["Blue","red","yellow","green","purple","pink","indigo"]; 
var colorIndex=2;




$(document).ready(function() {
  $("#bc").click(makePageChange);
  for (var i=0; i<colors.length; i=i+1) {
    console.log(colors[i]);
    $("#NameColor").append( "<li>"+ colors[i] + "</li>" );
   } 
});
function makePageChange() {
  $("body").css("background-color",colors[colorIndex]);
  colorIndex=colorIndex +1
  if (colorIndex>=colors.length) {
      colorIndex=0
  }
 
}

    
    

//for (var colorIndex=0; colorIndex<colors.length;colorIndex=colorIndex+1) {
//console.log(colors[colorIndex);  } 
