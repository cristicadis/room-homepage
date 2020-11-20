var images=["images/desktop-image-hero-1.jpg","images/desktop-image-hero-2.jpg","images/desktop-image-hero-3.jpg"];
var text_title=["Discover innovative ways to decorate","We are available all across the globe","Manufactured with the best materials"];
var textp=["We provide unmatched quality, comfort, and style for properly owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.","With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.","Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];
i=0;

//if screen is less than 800px then choose another src for the images;
if ($(window).width()<800) {
  images[0]=["images/mobile-image-hero-1.jpg"];
  images[1]=["images/mobile-image-hero-2.jpg"];
  images[2]=["images/mobile-image-hero-3.jpg"];
}


$(document).ready(function(){

$(".angle-right").click(function(){
        // Change src attribute of image
        i++;
        if(i>2){i=0;}
        $(".left").css("background-image", "url(" + images[i] + ")");
          $("h1").text(text_title[i]);
          $(".text").text(textp[i]);
    });
    $(".angle-left").click(function(){
            // Change src attribute of image
            i--;
            if(i<0){i=2;}
            $(".left").css("background-image", "url(" + images[i] + ")");
            $("h1").text(text_title[i]);
                      $(".text").text(textp[i]);
        });



        $(".hamburger").click(function(){
          var nav = $(".menu");
          var icon = $(".hamburger img");
          nav.slideToggle(200);


          if (icon.attr("src") == "images/icon-hamburger.svg"){
              icon.attr("src","images/icon-close.svg");
              $(".logo").css("display","none");
              $("#page-mask").show();
            }else{
              $(".logo").css("display","inline-block");
              icon.attr("src","images/icon-hamburger.svg");
              $("#page-mask").css("display","none");
            }

        });
      });


// if screen is less than 800px then change the images src;


// mobile nav
