
$(document).ready(function(){
	$('.vis_slider').slick({
		fade:true,
		dots: true,
		infinite: true,
		arrows: false,
		appendDots: $('.dots .inner'), //커스터마이징 닷
		customPaging: function(slider, i) { 
			console.log($(slider.$slides[i]).html());
			return '<button class="tab">' +  $(slider.$slides[i]).find('.vis_slide').attr('data-dot-title') + '</button>';
		}
	});
	$('.header').hover(function(){
		$(this).toggleClass('on');
	});
	$('.gnb > li').hover(function(){
		$(this).find('.gnb_bar').stop().toggleClass('on');
		$('.bg').toggleClass('on');
	});
	$('.sec02_slider').slick({
		dots:false,
		arrows: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive:[
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
	});
	$('.sec03_slider').slick({
		dots:false,
		arrows: true
	});
	$('.sec04_slider').slick({
		dots:false,
		arrows: true
	});

	var cnt = 0;
		$('.tab_con').hide().eq(0).show();
		$('.tab_menu li').click(function() {
			cnt = $(this).index();
			var select = $(this).text();
			$('.tab_menu li').removeClass('on').eq(cnt).addClass('on');
			$('.tab_con').hide().eq(cnt).fadeIn();
			$('.tab_menu').removeClass('on');
		});

		$('.tab_tit').click(function(){
			$('.tab_menu').toggleClass('on');
		});
});

jQuery(function ($) {
  var topMenuHeight = $("#desktop-nav").outerHeight();
  $("#desktop-nav").menuScroll(topMenuHeight);
});

jQuery.fn.extend({
  menuScroll: function (offset) {
    // Declare all global variables
    var topMenu = this;
    var topOffset = offset ? offset : 0;
    var menuItems = $(topMenu).find("a");
    var lastId;

    // Save all menu items into scrollItems array
    var scrollItems = $(menuItems).map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

    // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
    $(topMenu).on("click", "a", function (e) {
      var href = $(this).attr("href");

   //   var offsetTop = href === "#" ? 0 : $(href).offset().top - topOffset;
      var offsetTop = href === "#" ? 0 : $(href).offset().top;

      $('html, body').stop().animate({
        scrollTop: offsetTop },
      300);
      e.preventDefault();

    });

    // When page is scrolled
    $(window).scroll(function () {
      var nm = $("html").scrollTop();
      var nw = $("body").scrollTop();
      var fromTop = (nm > nw ? nm : nw) + topOffset;


      // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
      var current = $(scrollItems).map(function () {
        if ($(this).offset().top <= fromTop)
        return this;
      });

      // Get the most recent passed section from current array
      current = current[current.length - 1];
      var id = current && current.length ? current[0].id : "";
      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        $(menuItems).
        parent().removeClass("active").
        end().filter("[href='#" + id + "']").parent().addClass("active");
      }

    });
  } });

