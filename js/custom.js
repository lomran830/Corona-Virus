$(function(){
  /* Header */
  $(window).on("scroll",function(){
    if($(window).scrollTop()){
      $(".header").css("box-shadow","1px 1px 4px 4px #ccc");
    } else{
      $(".header").css("box-shadow","none");
    }
  })


var height = $(".Seriousness .left").innerHeight();
$(".Seriousness .right").height(height);


$(".advices .left li").on("click",function(e){
      e.preventDefault();
  $(this).addClass("active").siblings().removeClass("active");
  $(".advices .right div").hide();
  $('.' + $(this).data('class')).show();

})

$(".advices .left li.adv").on("click",function(e){
  $(".advices .right aside").animate({
    marginTop:'13px'
  });
  $(".advices .right").animate({
    top:'0'
  })
})
$(".advices .left li.speed").on("click",function(e){
  $(".advices .right aside").animate({
    marginTop:'90px'
  });
  $(".advices .right").animate({
    top:'0'
  })
})
$(".advices .left li.the").on("click",function(e){
  $(".advices .right aside").animate({
    marginTop:'131px'
  });
  $(".advices .right").animate({
    top:'21px'
  })
})

$(".advices .left li.hist").on("click",function(e){
  $(".advices .right aside").animate({
    marginTop:'210px'
  });
  $(".advices .right").animate({
    top:'0'
  })
})
$(window).on("scroll", function () {

    if ($(this).scrollTop() >= 720) {
        $(".scroll").fadeIn(2000);
    } else {
        $(".scroll").fadeOut();
    }
});

$(".scroll").on("click", function () {

    $("html,body").animate({scrollTop: 0}, 600);

});


  var list = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail' ];

    $(".email-suggest").on("keyup",function() {
          finalResult = ' ';
      if(! $(this).next().is(".suggest-box")){

        $("<ul class='suggest-box'></ul>").insertAfter($(this));
      }



      for (var i = 0; i < list.length; i++){
        finalResult += '<li>' + $(this).val() + '@' + list[i] + '</li>';
      }
  if ($(".email-suggest").val() === '') {

                $(".suggest-box li").parent().fadeOut(3000).remove();
      }

        $(".suggest-box").html(finalResult);
        $("body").on("click",".suggest-box li",function(){
          $(".email-suggest").val($(this).text());
          $(this).parent().fadeOut(3000).remove();
        });
  });
  $('.email-suggest').focus(function() {

    if ($(this).val() !== '') {
      console.log($(this).val($(this).val().split('@', 1)))

    }

  });
  $('.suggest-email').focus(function() {

    if ($(this).val() !== '') {

      console.log($(this).val($(this).val().split('@', 1)))

    }

  });
$(".chat .message  svg").on("click",function(){
  $(this).parent().fadeOut();
})
$(".chat svg.fa-comment-dots").on("click",function(){
  $(".chat .message").fadeIn();
})

  $(".input_type").on("keyup",function(e){
if(e.keyCode == 13 && $(".input_type").val() != "")
{
  var task = $("<p class='parg'></p>").text($(".input_type").val());

    $(".chat .message .message_scroll p.pargraph").before(task);
      $("#input").val("");;

}
});


});



/**javascript */

/* Carsoul */
var currentImge    = Array.from(document.querySelectorAll(".slider .item")),
    currentCaption = Array.from(document.querySelectorAll(".slider .item .caption")),
    currentSlider  = 0,
    nextButton     = document.getElementById("next"),
    prevButton     = document.getElementById("prev");

/* Remove Active Class */
let removeAllActive = () =>{
  currentImge.forEach(item => {
    item.classList.remove("active");
  });
  currentCaption.forEach(item => {
    item.classList.remove("active");
  });
}

/* Add Active Class */
let addActive = () =>{
  removeAllActive();
  currentImge[currentSlider].classList.add("active");
  currentCaption[currentSlider].classList.add("active");
}

/* If Current Slider Is The last, Then Restart carsoul */
let add = ()=>{
   currentSlider = 0;
  addActive();

}
    /* If Current Slider Is The First, Then Restart carsoul from last to first */
let remove = ()=>{
   currentSlider = currentImge.length-1;
  addActive();

}


addActive();
/* Click to go to next slide */
nextButton.onclick = ()=>{
  console.log("hello");
currentSlider == currentImge.length-1 ?  add(): currentSlider++; addActive();
}
/* Click to go to previous slide */
prevButton.onclick = ()=>{
currentSlider == 0 ?  remove(): currentSlider--; addActive();
}
/*end*/
var information = document.getElementById("io");
information.onclick = function(){
  console.log(window.pageYOffset==(1104));
        window.pageYOffset=(1104)
}

/**Comments */
let $once = Array.from(document.querySelectorAll(".customer .opinion_row .row")),
    $next = document.getElementById("nextB"),
    $prev = document.getElementById("prevB"),
    current = 0;

 

    /* Remove Active Class */
let removeActive = () =>{
  $once.forEach(item => {
    item.classList.remove("active");
  });
}
let addActv = ()=>{
  removeActive();
$once[current].classList.add("active");
}

let addItem = ()=>{
current = 0;
addActv();
}
let removeItem = ()=>{
  current = $once.length-1;
  addActv();
  }
$next.onclick=()=>{
  console.log("hy");
current == $once.length-1 ?  addItem(): current++; addActv()
}
$prev.onclick=()=>{
  current == 0 ?  removeItem(): current--; addActv()
  }



