(function($) {
    "use strict";



    // Earning Report Area Start
    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        series: [
            [50, 45, 41, 23, 22, 20],
            [38, 20, 18, 40, 18, 10]
        ]
    };


    var options = {
        seriesBarDistance: 27
    };

    var responsiveOptions = [

        ['screen and (max-width: 640px)', {
            seriesBarDistance: 15,
            axisX: {
                labelInterpolationFnc: function(value) {
                    return value[0];
                }
            }
        }]
    ];

    new Chartist.Bar('.ct-chart', data, options, responsiveOptions);




    $('#sidebarCollapse').on('click', function() {
        $('.wrapper').toggleClass('active');

    });
    $('.mobile-bar').on('click', function() {
        $('.wrapper').toggleClass('open-mobile')
    })

    $('#close').on('click', function() {
        $('.wrapper').removeClass('open-mobile')
    });


    $('#homeSubmenu2 li').on('click', function() {

        $(this).addClass('active');
        this.sibllings().removeClass('active');
    });
    $('#pageSubmenu2 li').on('click', function() {

        $(this).addClass('active');
        this.sibllings().removeClass('active');
    });
    $('#homeSubmenu5 li').on('click', function() {

        $(this).addClass('active');
        this.sibllings().removeClass('active');
    });
    $('#pageSubmenu3 li').on('click', function() {

        $(this).addClass('active');
        this.sibllings().removeClass('active');
    });


    $(function() {
        $(".view-bg").bind("click", function() {

            $.each($(".view-bg"), function(i, l) {
                $(this).removeClass("active");
            });

            $(this).addClass("active");
        });


    });

})(jQuery);