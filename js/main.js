
$(document).ready(function() {
  var height;
  var width;
  var lastPage;

//find out what was the last page before reload
var pageLocation = {
  init:function() {
    this.onRefresh();
    this.golandPage();
  },

  onRefresh:function() {
    lastPage = localStorage.getItem("pageLocation");
    $(".ideaName").html(localStorage.getItem("projectName"));
    if(lastPage == null)
    {
      lastPage ='.startCover, .start';
    }
    $(lastPage).show();
  },

  golandPage:function(){
    $(".logo").click(function(){
        $(lastPage).fadeOut(200);
        $('.startCover, .start').fadeIn(200);
        localStorage.setItem("pageLocation",".startCover, .start");
    });
  }
};


var setHeight = {
  init:function() {
    this.setDem();
  },
  setDem:function() {
    height = $(window).height();
    width = $(window).width();
    $(".start").css("height",height);
    $(".startCover").css("height",height);
    $(".panel").css("height",height);
  }
};

var sampleNames = {
  init:function() {
    this.placeHolderSwitch();
  },

  placeHolderSwitch:function(){
    var counter = 0;
    setInterval(
          function() 
          {
            var names = ["yik yak","SherpaDesk","Facebook","Uber","Space-X","Bitcoin","Creative Loot"];
            //$("#nameInput").attr("placeholder").fadeOut("slow");
            $("#nameInput").attr("placeholder",names[counter]);
            counter++;
            if(counter > 2){counter =0;}
            setTimeout(
              function() 
              {
                //$("#nameInput").attr("placeholder").fadeIn("slow");
              }, 400);

          }, 2500);
  }
};


var changePanel = {
  init:function() {
    this.landingpage();
  },

  landingpage:function() {
    $(".powerButton").click(function(){
      localStorage.setItem("projectName",$("#nameInput").val());
      $(".ideaName").html(localStorage.getItem("projectName"));
      $(".description").fadeIn();
      $(".start, .startCover").fadeOut();
      localStorage.setItem("pageLocation",".description");
    });
  }

};

var helper = {
  init:function() {
    this.disapear();
  },

  disapear:function() {
    $(".helperNote").mouseleave(function(){
      $(".helperNote").fadeOut();
    });
  }
};



  (function() {
    pageLocation.init();
    setHeight.init();
    sampleNames.init();
    changePanel.init();
    helper.init();

  }()); 

}); 