$(document).ready(function(){
    console.log("Hello friends!");
})


$(".text").click(function(){
    $('.codebox').append('<div class="box"><h1 class="textex" id="1">' + $(this).html() + '</h1></div>')
})