
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
$(function(){
      $('.ld').addClass('is-active');
  setTimeout(function() {
    $('.ld').fadeOut();
  }, 6000);
});

// ハンバーガーメニュ
$(".ham_btn").click(function () {
  $(this).toggleClass('active');
});

// カルーセル
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
    autospeed: 5000,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: false,//下部ドットナビゲーションの表示
});
    
