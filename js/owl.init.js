(function($){
    //front-page
	$(function(){
	if($('body').is('.home.page')){		
		var autoPlayDuration = 3000;

		var owlOptions = function(autoPlayDuration){
			return {
				autoPlay : autoPlayDuration,
				stopOnHover : true,
				navigation:true,
				paginationSpeed : autoPlayDuration,
				rewindSpeed : autoPlayDuration,
				goToFirstSpeed : autoPlayDuration,
				singleItem : true,
				autoHeight : true,
				transitionStyle:"fade",
				pagination : true,
				afterMove: function(element){ this.$elem.trigger('owl.custom.aftermove',this.currentItem); }
			};
		};

		$.fn.owlCarousel.options.navigationText = ["<<", ">>"];

		var initPagination = function($carousel,$pagination,autoPlayDuration){
			$carousel.on('owl.custom.aftermove',function(e,nth){
				$pagination.find('li').removeClass('current').eq(nth).addClass('current');
			});

			$pagination.find('li').on('click',function(e){
				e.preventDefault();
				if(!$(this).is('.current')){
					$carousel.trigger('owl.goTo',$(this).index());
					$carousel.trigger('owl.stop');
					$carousel.trigger('owl.play',autoPlayDuration);
				}
			});

			$pagination.hover(
				function(){
					$carousel.trigger('owl.stop');
				},
				function(){
					$carousel.trigger('owl.play',autoPlayDuration);
				});
//			$pagination.find('.next').on('click',function(e){
//				e.preventDefault();
//				$carousel.trigger('owl.next');
//			});
//			$pagination.find('.prev').on('click',function(e){
//				e.preventDefault();
//				$carousel.trigger('owl.prev');
//			});

		};


		var $owlFirst = $("#events-cycle").addClass('loaded');		
		$owlFirst.owlCarousel(owlOptions(autoPlayDuration));

		var $owlSecond= $("#coda-slider-1").addClass('loaded');
		var $owlSecondNav =$('#coda-nav-1');
		
		var otherOwlSettings = { pagination: false, navigation: true };
		var otherAutoPlayDuration = 9000;
		
		var otherOwlOptions = $.extend({},owlOptions(otherAutoPlayDuration),otherOwlSettings);
		$owlSecond.owlCarousel(otherOwlOptions);
		
		initPagination($owlSecond,$owlSecondNav,otherAutoPlayDuration);

		/*init category toggler*/
		$('.category-toggle').on('click',function(){
			$('.categories-main-page').toggleClass('visible');
		});


	}





	});
})(jQuery);