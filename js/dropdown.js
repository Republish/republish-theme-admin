(function ($) {
    Drupal.behaviors.dropdown = {
        attach: function(context, settings) {
            $('.dropdown-toggle', context).click(function() {
                $(this).closest('.dropdown-group').addClass('js-remain');
                $('.dropdown-toggle').closest('.dropdown-group:not(.js-remain)').removeClass('open');
                $(this).closest('.dropdown-group').toggleClass('open');
                $(this).closest('.dropdown-group').removeClass('js-remain');
            });
        }
    };
})(jQuery);

