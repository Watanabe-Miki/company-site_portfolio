  /* ドロワー */
  $(function(){
    $(".js-drawer-icon").on("click", function(e){
        e.preventDefault();
        $(".js-drawer-icon").toggleClass("is-active"); 
        $(".js-drawer-content").toggleClass("is-active"); 
        $(".js-drawer-background").toggleClass("is-active"); 

        return false;
    });
  });


  // スムーススクロール
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

/* ヘッダースクロール */
var mvh = $('.main').height();

$(window).scroll(function () {
  var top = $(window).scrollTop();

  if (mvh < top) {
    $('.js-header').addClass('change-color');
  } else {
    $('.js-header').removeClass('change-color');
  }

  return false;
});

/* fadeup */
function fadeUp(){

  // ふわっ
  $('.js-fadeup').each(function(){ 
    var elemPos = $(this).offset().top-20; //js-fadeup要素の上20pxの位置の座標を取得
    var scroll = $(window).scrollTop(); //"window"でブラウザを指定。scroll量を取得
    var windowHeight = $(window).height(); //"window"の高さを取得
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeup');
    }else{
    $(this).removeClass('fadeup');
    }
    });
}

  $(window).scroll(function (){
    fadeUp();
  });

/* delayup */
function delayScrollAnime() {
  var time = 0.1;
  var value = time;
  $('.js-delayup-wrapper').each(function () {
    var parent = this;				
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        
        if (!$(this).hasClass("delayup")) {
          
          $(parent).addClass("play");	
          $(this).css("animation-delay", value + "s");
          $(this).addClass("delayup");
          value = value + time;
          
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("delayup");
      value = time;
    }
  })
}

$(window).scroll(function (){
  delayScrollAnime();
});

/* ScrollHint */
new ScrollHint('.js-scrollable');