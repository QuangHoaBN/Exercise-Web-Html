$(document).ready(function(){
	      $('.blog-items').slick({
	      	infinite: true,
	      	dots: true,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			        dots: true
			      }
			    },
			    {
			      breakpoint: 576,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    },
			  ]
	      });
	    });