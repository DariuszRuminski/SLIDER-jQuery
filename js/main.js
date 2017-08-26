"use strict";

$(function(){
    //Zmienne
    var slider = $("#slider");
    var slidesShow = $(".slide-show");
    var slideCount = $(".slide-show").children().length;
    var slideWidth = 100/slideCount;
    var slideIndex = 0;
    
    //funkcja animująca, której parametrem jest nowy index slidu
    function slide(newSlideIndex){
        if(newSlideIndex < 0 || newSlideIndex >= slideCount){
            return ;
        }
        
        var slideCaption = $(".slider-caption").eq(newSlideIndex);
        slideCaption.hide();
        
        var marginLeft = (newSlideIndex * (-100)) + "%";
        
        slidesShow.animate({
            "margin-left": marginLeft
        }, 800, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn("slow");
        });
    }
    
    //szerokosc kontenera slideshow
    slidesShow.css("width", slideCount * 100 + "%");
    
    //iteracja po wszystkich slajdach i nadanie im marginesów oraz szerokości
    slidesShow.find(".single-slide").each(function(index){
       $(this).css({"width": slideWidth + "%",
                   "margin-left": index * slideWidth + "%"}) 
    });
    
    //przyciski -wywołanie funkcji slide()
    $(".prev-slide").click(function(){
        slide(slideIndex -1);
    });
    
    $(".next-slide").click(function(){
        slide(slideIndex +1);
    });
});
