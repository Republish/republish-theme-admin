(function ($) {
    Drupal.behaviors.select2 = {
        attach: function(context, settings) {
            $('select', context).select2({
                minimumResultsForSearch: 20
            });
        }
    };
})(jQuery);

