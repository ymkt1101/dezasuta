
// フォント
(function(d) {
    var config = {
      kitId: 'nno0dtt',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

// ローディング 
jQuery(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      console.log('2回目以降のアクセスです');
      $(".loading").addClass('is-active');
      
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 7000); // ローディングを表示する時間
    }
  }
  webStorage();
 
});

// ハンバーガーメニュ
$(".nv_btn").click(function () {
  $(this).toggleClass('active');
});

// カルーセルとリサイズ時
function initializeSlick() {
  var windowWidth = $(window).width();
  var slidesToShow = (windowWidth < 768) ? 1 : 3;

  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    dots: false,
  });
}

initializeSlick();

$(window).on('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    var windowWidth = $(window).width();

    if (windowWidth < 768) {
      $('.slider').slick('unslick');
    } else {
      initializeSlick();
    }
  }, 250);
});

// モーダル
$(function () {
  $('#openModal').click(function(){
      $('#modalArea').fadeIn();
  });
  $('#closeModal , #modalBg').click(function(){
    $('#modalArea').fadeOut();
  });
});