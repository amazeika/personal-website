var lists = ['posts', 'projects', 'experiences', 'education', 'skills'];

var hide_lists = function(cb)
{
    $.each(lists, function (idx, label) {
        var selector = '#' + label;
        $(selector).fadeOut(300);
        selector += '-btn';
        $(selector).removeClass('disabled');
    });
};

var show_list = function(label)
{
    var selector = '#' + label;
    var current = $(selector);
    selector += '-btn';
    var current_btn = $(selector);

    var active;

    $.each(lists, function(idx, label)
    {
        var selector = '#' + label + '-btn';
        var el = $(selector);

        if (el.hasClass('disabled')) {
            active = label;
            return false;
        }
    });

    if (active != label)
    {
        if (active)
        {
            $('#' + active + '-btn').removeClass('disabled');

            $('#' + active).fadeOut(300, function() {
                $(current).fadeIn(300);
            });
        }
        else $(current).fadeIn(300);

        current_btn.addClass('disabled');

        // Unpin headroom on click
        $(".my-footer").headroom('unpin');
    }
};