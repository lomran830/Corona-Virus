$(function(){
  /* Header */
  $(window).on("scroll",function(){
    if($(window).scrollTop()){
      $(".header").css("box-shadow","1px 1px 4px 4px #ccc");
    } else{
      $(".header").css("box-shadow","none");
    }
  })
/* Carsoul */
$(".container .slider .btn .next").on("click",function(){

if(!$(".carsoul .active").is(":last-of-type")){
    $(".carsoul .active").removeClass("active").next().addClass("active");
}

});

$(".container .slider .btn .prev").on("click",function(){

if(!$(".carsoul .active").is(":first-of-type")){
    $(".carsoul .active").removeClass("active").prev().addClass("active");
}

});

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
$(".customer .next").on("click",function(){
  if(!$(".customer .opinion_row .active").is(":last-of-type")){
        $(".customer .opinion_row .active").removeClass("active").next().addClass("active");

  }
})

$(".customer .prev").on("click",function(){
  if(!$(".customer .opinion_row .active").is(":first-of-type")){
  $(".customer .opinion_row .active").removeClass("active").prev().addClass("active");
  }
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
