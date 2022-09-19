  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

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


  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

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
