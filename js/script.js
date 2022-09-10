$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});


	$('.accordion__trigger').click(function () {
		$(this).toggleClass('open')
		$(this).next('.accordion__content').slideToggle();
	});

	$('.case__slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true
	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true
	});
});
