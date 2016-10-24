		function setBody() {
			$('body').css({'height': $(window).height(), 'width': $(window).width()});
			$('main').css({'width': $(window).width() * 8});
			$('section').css({'width': $(window).width()});
			$('.wHeight').css({'height': $(window).height()});
		}

		function animateArrow() {
			$('.btnArrow i').animate({
				'left': '8px'
			}, 1200, 'swing', function() {
				$('.btnArrow i').animate({'left': '-2px'}, 1200, 'swing', function(){
					animateArrow();
				});
			})
		};

		function animateLanding() {
			setTimeout(function() {
				$('.landing-logo img').fadeTo(2400, 1);
			}, 800);

			setTimeout(function() {
				$('.landing-logo button').fadeTo(3000, 1);
			}, 1600)
		}

		function scrolling() {
	        var $window = $(window);
			var scrollTime = .8;
			var scrollDistance = 170;

			$window.on("mousewheel DOMMouseScroll", function(event){

				event.preventDefault();	

				var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
				var scrollTop = $window.scrollLeft();
				var finalScroll = scrollTop - parseInt(delta*scrollDistance);

				TweenMax.to($window, scrollTime, {
					scrollTo : { x: finalScroll, autoKill:true },
						ease: Power1.easeOut,
						overwrite: 5							
				});
			});
		}

		function aboutCycle() {
			var _this = $('.about .cycle');
			var msg = ['THE PEOPLE.', 'CHANGE.', 'READY TO SERVE.', 'THE STUDENT COUNCIL.'];
			var timer = 1;
			var opacityTimer = 3000;
			var opacityTimer2 = 5000;
			
			msg.forEach(function(content) {

				setTimeout(function() {
					_this.html(content);
				}, timer);

				setTimeout(function() {
					_this.fadeTo(500, 1);
				}, opacityTimer2);

				timer += 5000;
				opacityTimer2 += 5000;

				if(content == 'THE STUDENT COUNCIL.') {
					return;
				} else {
					setTimeout(function() {
						_this.fadeTo(500, 0);
					}, opacityTimer);

					opacityTimer += 5000
				}
				
			});
		}

		function scrollMagic() {

			var screenWidth = $(window).width()/4;

			var controller = new ScrollMagic.Controller({vertical: false});
			
			var updatesTimelineAuto = new TimelineMax()
				.add(TweenMax.fromTo(".updates .container", .2, {opacity: 0}, {opacity: 1, useFrames: false}))
				.add(TweenMax.to(".updates .transform", .2, {transform: 'rotateX(90deg)', ease: Power0.easeNone, useFrames: false}))
				.add(TweenMax.fromTo(".updates .news-heading p", .2, {opacity: 0, bottom: '-300px'}, {opacity: 1, bottom: 0, ease: Expo.easeOut, useFrames: false}))
				.add(TweenMax.fromTo(".updates .carousel-wrapper", .3, {opacity: 0, bottom: '-300px'}, {opacity: 1, bottom: 0, useFrames: false}))
				.add(TweenMax.fromTo(".updates .news-box", .4, {opacity: 0, bottom: '-300px'}, {opacity: 1, bottom: 0, useFrames: false}))

			var scene = new ScrollMagic.Scene({triggerElement: "#section-updates"})
				.setTween(updatesTimelineAuto)
				.triggerHook(.75)
				.addIndicators()
				.addTo(controller);			

			var galleryTimelineAuto = new TimelineMax()
				.add(TweenMax.fromTo(".gallery .container", .2, {opacity: 0}, {opacity: 1, useFrames: false}))
				.add(TweenMax.to(".gallery .transform", .2, {transform: 'rotateX(90deg)', ease: Power0.easeNone, useFrames: false}))
				.add(TweenMax.fromTo(".gallery-images li:nth-child(even)", 1, {opacity: 0, bottom: '-100px'}, {opacity: 1, bottom: 0, useFrames: false}))
				.add(TweenMax.fromTo(".gallery-images li:nth-child(odd)", 1, {opacity: 0, top: '-100px'}, {opacity: 1, top: 0, useFrames: false}))
				.add(TweenMax.fromTo(".gallery-tab li:nth-child(1)", .75, {opacity: 0}, {opacity: 1, useFrames: false}))
				.add(TweenMax.fromTo(".gallery-tab li:nth-child(2)", .75, {opacity: 0}, {opacity: 1, useFrames: false}))
				.add(TweenMax.fromTo(".gallery-tab li:nth-child(3)", .75, {opacity: 0}, {opacity: 1, useFrames: false}))
				

			var scene = new ScrollMagic.Scene({triggerElement: "#section-gallery"})
				.setTween(galleryTimelineAuto)
				.triggerHook(.75)
				.addIndicators()
				.addTo(controller);	
		}

		function scrollLeft() {
		  var delay = false;

		  $(document).on('mousewheel DOMMouseScroll', function(event) {
		    event.preventDefault();
		    if(delay) return;

		    delay = true;
		    setTimeout(function(){delay = false}, 1200)

		    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

		    var a = document.getElementsByTagName('section');

		    if(wd < 0) {
		      for(var i = 0 ; i < a.length-1 ; i++) {
		        var t = a[i].getClientRects()[0].left;
		        if(t >= 40) break;
		      }
		    }
		    else {
		      for(var i = a.length-2; i >= 0 ; i--) {
		        var t = a[i].getClientRects()[0].left;
		        if(t <= -40) break;
		      }
		    }
		    $('html,body').animate({
		      scrollLeft: a[i].offsetLeft,
		    }, 800);
		  });
		};	

		$(function() {
			setBody();
			scrolling();
			scrollLeft();
			animateArrow();
			animateLanding();
			aboutCycle();
			scrollMagic();
		});
		
		$(window).resize(function(){
			setBody();
		});