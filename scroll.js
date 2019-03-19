jQuery(document).on('scroll', function() {
    var scroll_top = jQuery(this).scrollTop();
    if (scroll_top > 150) {
        jQuery('.head-modal').addClass('header_fixed');
    }else{
        jQuery('.head-modal').removeClass('header_fixed');
    }
    if (scroll_top > 1800) {
        jQuery('#execphp-2').addClass('adversting_fixed');
    }else{
        jQuery('#execphp-2').removeClass('adversting_fixed');
    }
});