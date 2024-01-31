
(function($) {
    "use strict"; 
	
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 60) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });
    
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
    });

    $('[data-toggle="offcanvas"], .nav-link:not(.dropdown-toggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })

    function toggleDropdown (e) {
        const _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
        setTimeout(function(){
            const shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
        }, e.type === 'mouseleave' ? 300 : 0);
    }
    $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    $('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    var cardSlider = new Swiper('.card-slider', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 70,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        breakpoints: {
            767: {
                slidesPerView: 1
            },
            1023: {
                slidesPerView: 3,
            }
        },
        on: {
            slideChange: function () {
                // Remove 'active' class from all slides
                var slides = this.slides;
                for (var i = 0; i < slides.length; i++) {
                    slides[i].classList.remove('active');
                }
    
                // Add 'active' class to the active slide
                var activeIndex = this.activeIndex;
                slides[activeIndex].classList.add('active');
            }
        }
    }); 
    

	var a = 0;
$(window).scroll(function () {
    if ($('#counter').length) {
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text().replace(/\+/g, '')
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum) + '+' );
                        },
                        complete: function () {
                            $this.text(this.countNum + '+');
                            // alert('finished');
                        }
                    });
            });
            a = 1;
        }
    }
});


    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
	});
	
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

	/* Function to get the navigation links for smooth page scroll */
	function getMenuItems() {
		var menuItems = [];
		$('.nav-link').each(function() {
			var hash = $(this).attr('href').substr(1);
			if(hash !== "")
				menuItems.push(hash);
		})
		return menuItems;
	}	

	$('.nav-link').click(function (e) {
		var hash = $(this).attr('href').substr(1);
		if(hash == "")
			e.preventDefault();
	});

	changeActive();


	$(document).scroll(function(){
		changeActive();
	});
})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    var phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(event) {
      var inputValue = event.target.value;
      event.target.value = inputValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    });
  });

    $(document).ready(function() {
        // Smooth scrolling
        $('.page-scroll').click(function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });

        // Active navigation link
        $(document).scroll(function() {
            changeActive();
        });

        function changeActive() {
            const menuItems = getMenuItems();
            $.each(menuItems, function(index, value) {
                var offsetSection = $('#' + value).offset().top;
                var docScroll = $(document).scrollTop();
                var docScroll1 = docScroll + 1;

                if (docScroll1 >= offsetSection) {
                    $('.nav-link').removeClass('active');
                    $('.nav-link[href$="#' + value + '"]').addClass('active');
                }
            });
        }

        function getMenuItems() {
            var menuItems = [];
            $('.nav-link').each(function() {
                var hash = $(this).attr('href').substr(1);
                if (hash !== "")
                    menuItems.push(hash);
            });
            return menuItems;
        }
    });

