$(document).ready(function () {

  var $doc = $('html, body');
  var $toggle = $('[data-js="nav-toggle"]');
  var $top = $('[data-js="top"]');
  var $nav = $('[data-js="nav-sidebar"]');
  var $navLink = $('[data-js="sub-nav"] a');

  $(function() {
    $toggle.click(function(e) {
      var $this = $(this);

      e.preventDefault();

      if (!$this.hasClass('menu-active')) {
        $doc.addClass('menu-active');
        $this.addClass('menu-active');
        $nav.addClass('menu-active');
      } else {
        $doc.removeClass('menu-active');
        $this.removeClass('menu-active');
        $nav.removeClass('menu-active');
      }
    });

    $(window).resize(function() {
      if ($(window).width() >= 768) {
        $toggle.removeClass('menu-active');
        $nav.removeClass('menu-active');
      }
    });
  });

  $(function() {
    $top.click(function(e) {
      e.preventDefault();

      $doc.animate({
        scrollTop: 0
      }, 400);

      if ($doc.hasClass('menu-active')) {
        $doc.removeClass('menu-active');
        $toggle.removeClass('menu-active');
        $nav.removeClass('menu-active');
      }
    });

    $('a[href*="#"]:not([href="#"])').click(function(e) {
      var target = $(this.hash);

      e.preventDefault();

      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $doc.animate({
            scrollTop: target.offset().top
          }, 400);
        }
        if ($doc.hasClass('menu-active')) {
          $doc.removeClass('menu-active');
          $toggle.removeClass('menu-active');
          $nav.removeClass('menu-active');
        }
      }
    });
  });

  var $subNavItem = $('[data-js="sub-nav"] li').not('li:first-child');
  var $navChildren = $subNavItem.children();
  var navArray = [];

  for (var i = 0; i < $navChildren.length; i++) {
    var navChild = $navChildren[i];
    var navHref = $(navChild).attr('href');

    navArray.push(navHref);
  }

  $(window).scroll(function() {
    var $header = $('[data-js="header"]');
    var winPos = $(window).scrollTop();
    var winH = $(window).height();
    var docH = $(document).height();

    if (winPos > 0) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    for (var i = 0; i < navArray.length; i++) {
      var Id = navArray[i];
      var $sec = $('[data-js="' + Id + '"]');
      var secH = $sec.height();
      var secPos = $sec.offset().top - 64;

      if (winPos >= secPos && winPos < (secPos + secH)) {
        $('a[href="' + Id + '"]').addClass('nav-active');
      } else {
        $('a[href="' + Id + '"]').removeClass('nav-active');
      }
    }

    if (winPos + winH == docH) {
      var $subNavItemLast = $('[data-js="sub-nav"] li:last-child a');

      if (!$subNavItemLast.hasClass('nav-active')) {
        var navCurr = $('.nav-active').attr('href');

        $('a[href="' + navCurr + '"]').removeClass('nav-active');
        $subNavItemLast.addClass('nav-active');
      }
    }

  });

});

// Add pattern scripts here
$(document).ready(function(){

  // Radio Buttons
  $('[data-js="form-radio"]').change(function(){
    var name = $(this).find('input[type="radio"]:checked');
    if (name.length > 0) {
      $('.radio-name').html('<span style="font-weight:400;">Name:&nbsp;</span>' + name.val()).fadeIn(100);
    }
  });

  // Sliders
  $('.bxslider').bxSlider();

  // Modals
  $('.modal-open').click(function(){
    $('.modal').fadeIn(300);
  });
  $('.modal-close').click(function(){
    $('.modal').fadeOut(300);
  });

  // Numeric Steppers
  $('.stepper .btn:first-of-type').on('click', function() {
    var stepper = $(this).parent().parent().find('input');
    stepper.val(parseInt(stepper.val(), 10) + 1);
  });
  $('.stepper .btn:last-of-type').on('click', function() {
    var stepper = $(this).parent().parent().find('input');
    stepper.val(parseInt(stepper.val(), 10) - 1);
  });

  // Tabs
  var tabWrapper = $('#tab-block');
  var tabMnu = tabWrapper.find('.tab-mnu  li');
  var tabContent = tabWrapper.find('.tab-cont > .tab-pane');

  tabContent.not(':first-child').hide();

  tabMnu.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });
  tabContent.each(function(i){
    $(this).attr('data-tab','tab'+i);
  });

  tabMnu.click(function(){
    var tabData = $(this).data('tab');
    tabWrapper.find(tabContent).hide();
    tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show();
  });

  $('.tab-mnu > li').click(function(){
    var before = $('.tab-mnu li.active');
    before.removeClass('active');
    $(this).addClass('active');
  });

});

//# sourceMappingURL=index.js.map
