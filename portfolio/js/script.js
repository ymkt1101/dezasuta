
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
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      $(".loading").addClass('is-active');
      
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        $(".loading").addClass('is-active');
        // ローディングを指定時間表示してクラスを外す
        $(".loading-animation").removeClass('is-active');
      }, 7000); 
    }
  }
  webStorage();
 
});

// ハンバーガーメニュ
$(function(){
  var flg = false;
  
  $('.ham_btn,.nv_mdl').on('click', function () {
    $('.ham_btn').toggleClass('active');
    $('.nv_mdl').toggleClass('open');
    
    if (flg == false) {
      $('body').addClass('scrolllock');
      flg = true;
    } else {
      $('body').removeClass('scrolllock');
      flg = false;
    }
  });
});

// カルーセルとリサイズ時
function initializeSlick() {
  var windowWidth = $(window).width();
  var slidesToShow = (windowWidth < 768) ? 1 : 3;
  
  // $('.slider').slick({
    $('.slider').not('.slick-initialized').slick ({
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
    var elements = document.getElementsByClassName("skill");
    var windowWidth = window.innerWidth;
    
    initializeSlick();
  
  if (windowWidth > 480 && windowWidth < 660) {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = "480px";
    }
      // $('.slider').slick('unslick');
    } else {
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = "fit-content";
    }
    }
    // var resizeTimer;
    
    // clearTimeout(resizeTimer);
    // resizeTimer = setTimeout(function() {
    //   var windowWidth = $(window).width();
    //   if (windowWidth > 500 && windowWidth < 640) {
    //     $('.slider').slick('unslick');
    //   } else {
    //     initializeSlick();
    //   }
    // }, 250);
});

// モーダル
$('.slick-thumbnail').on('click', function() {
  var modal = $('#wk_modal');
  var modalImg = $('#wk_modalImage');
  var modalDescription1 = $('#modalDescription1');
  var modalDescription2 = $('#modalDescription2');

  // クリックされたサムネイルのdata-large属性と説明文を取得してモーダルに表示
  var largeSrc = $(this).data('large');
  var description1 = document.querySelector('.wk_mdl_txt1').textContent;
  var description2 = document.querySelector('.wk_mdl_txt2').textContent;

  modalDescription1.text(description1);
  modalDescription2.text(description2);
  modalImg.attr('src', largeSrc);
  modal.css('display', 'block');

  $('body').addClass('scrolllock');
});
  
// モーダルを閉じる
$('.wk_mdl_close, .wk_mdl').on('click', function() {
  $('#wk_modal').css('display', 'none');
  $('body').removeClass('scrolllock');
  
});
