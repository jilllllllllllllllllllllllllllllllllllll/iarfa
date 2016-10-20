		function setBody() {
			$('body').css({'height': $(window).height(), 'width': $(window).width()});
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
			scrollMagic();
		});
		
		$(window).resize(function(){
			setBody();
		});