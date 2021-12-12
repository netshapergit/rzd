$(document).ready(function() {
	
	$('.rzdp-tabs-control__link').on('click', function() {
		let tab = $(this).attr('data-tab')
		$(this)
			.parent()
			.addClass('rzdp-tabs-control--active')
			.siblings('.rzdp-tabs-control')
			.removeClass('rzdp-tabs-control--active')
			.closest('.rzdp-tabs')
			.find('.rzdp-tab[data-tab="' + tab + '"]')
			.show()
			.siblings('.rzdp-tab')
			.hide()
		
	})
	
	$('.rzdp-tabs-control:first-child .rzdp-tabs-control__link').click()
	
})