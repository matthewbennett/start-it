
$(document).ready(function() {
  var height;
  var width;


var setHeight = {
  init:function() {
    this.setDem();
  },
  setDem:function() {
    height = $(window).height();
    width = $(window).width();
    $(".panel").css("height",height);
    height = height -250;
    $(".backLayer").css("height",height);
  }
};

var pagination = {
  init:function() {
    this.position();
  },
  position:function() {
    var currentTile = ".pagination li:nth-child(1)";
    $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();
      //tile #1
      if(scrollPos > 0 && scrollPos < 500) 
      {
        $(currentTile).find('.active').empty();
        $(currentTile).find('.active').removeClass();
        $(currentTile).removeClass("activeTab");
        //next tile
        currentTile = ".pagination li:nth-child(1)";
        $(currentTile).addClass("activeTab");
        $(currentTile).find('div').addClass('active');
        $('.active').html('1');
      } 
      //tile #2
      if(scrollPos > 500 && scrollPos < 1000) 
      {
        $(currentTile).find('.active').empty();
        $(currentTile).find('.active').removeClass();
        $(currentTile).removeClass("activeTab");
        //next tile
        currentTile = ".pagination li:nth-child(2)";
        $(currentTile).addClass("activeTab");
        $(currentTile).find('div').addClass('active');
        $('.active').html('2');
      } 
      //tile #3
      if(scrollPos > 1000 && scrollPos < 1500) 
      {
        $(currentTile).find('.active').empty();
        $(currentTile).find('.active').removeClass();
        $(currentTile).removeClass("activeTab");
        //next tile
        currentTile = ".pagination li:nth-child(3)";
        $(currentTile).addClass("activeTab");
        $(currentTile).find('div').addClass('active');
        $('.active').html('3');
      } 
    });
  }
};

var continueButton = {
  init:function() {
    this.nextTile();
  },
  nextTile:function() {
    // to tile 2
    $('#tile1').click(function(){
      $('html,body').animate({
          scrollTop: 700
        }, 1000);
    });
    //to tile 3
    $('#tile2').click(function(){
      $('html,body').animate({
          scrollTop: 1400
        }, 1000);
    });
  }

};





  (function() {
    setHeight.init();
    pagination.init();
    continueButton.init();
  }()); 

}); 