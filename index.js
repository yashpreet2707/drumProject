
var drumButtons = document.querySelectorAll(".drum").length ;

for ( var i = 0 ; i < drumButtons ; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , drumClick ) ;
}

function drumClick() {
    alert("Hey there") ;
}