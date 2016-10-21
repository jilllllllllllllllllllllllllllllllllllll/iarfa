		function setBody() {
			$('body').css({'height': $(window).height(), 'width': $(window).width()});
			$('main').css({'width': $(window).width() * 7});
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

		$('body').mousewheel(function(e, delta) {
		    $(this).scrollLeft(this.scrollLeft + (-delta * 40));
		    e.preventDefault();
		});

		function galleryCycle() {
			// $('.gallery-images').cycle({fx: 'fade', speed: 200, timeout: 100}).cycle("pause");

			// $('.gallery-images').hover(function(){
			// 	$(this).cycle('resume');
			// }, function(){
			// 	$(this).cycle('pause');
			// });
		};

		function scrollMagic() {
			var controller = new ScrollMagic.Controller({vertical: false});
			var tween = TweenMax.to("#target", 0.5, {backgroundColor: "green", width: "+=400"});
			var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
		}

		$(function() {
			setBody();
			animateArrow();
			animateLanding();
			galleryCycle();
		});
		
		$(window).resize(function(){
			setBody();
		});