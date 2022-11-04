const showOverlay = document.querySelector(".active_mobile_nav");
// for add class in slider
function toggleDropwown() {
	document.querySelector(".mobile-menu").classList.add("mobile-menu-open");
	showOverlay.classList.add("overlay_visible")
}
// for remove class in slider
function closeNav() {
	document.querySelector(".mobile-menu").classList.remove("mobile-menu-open");
	showOverlay.classList.remove("overlay_visible")
}
// for remove class in through overlay
function overlayClose() {
	showOverlay.classList.remove("overlay_visible");
	document.querySelector(".mobile-menu").classList.remove("mobile-menu-open");
}

var $question = $('.has_mobile_dropdown');
var $answer = $('.mobile-mega-menu-inner');
$question.click(function(event) {
	event.preventDefault();
	// Hide all answers
	$answer.slideUp();
	// Check if this answer is already open
	if ($(this).hasClass('active')) {
		// If already open, remove 'open' class and hide answer
		$(this).removeClass('active').next($answer).slideUp();
		// If it is not open...
	} else {
		// Remove 'open' class from all other questions
		$question.removeClass('active');
		// Open this answer and add 'open' class
		$(this).addClass('active').next($answer).slideDown();
	}
});

var $question_two = $('.mobile-dropdown-item');
var $answer_two = $('.mobile-level-three');
$question_two.click(function(event) {
	event.preventDefault();
	// Hide all answers
	$answer_two.slideUp();
	// Check if this answer is already open
	if ($(this).hasClass('active')) {
		// If already open, remove 'open' class and hide answer
		$(this).removeClass('active').next($answer_two).slideUp();
		// If it is not open...
	} else {
		// Remove 'open' class from all other questions
		$question_two.removeClass('active');
		// Open this answer and add 'open' class
		$(this).addClass('active').next($answer_two).slideDown();
	}
});


/**** sticky header ****/
if ($(window).width() > 1020) {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 20) {
			$('.sticky-header').addClass('sticky-header-active');
		} else {
			$('.sticky-header').removeClass('sticky-header-active');
		}
	});
} else if ($(window).width() < 1020) {
	if ($(this).scrollTop() > 20) {
		$('.mobile-header-container').addClass('sticky-header-active');
	} else {
		$('.mobile-header-container').removeClass('sticky-header-active');
	}

}
