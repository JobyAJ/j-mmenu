/*!
 * megamenu - jQuery Plugin
 * version: 1.0.0 (September 2022)
 * @requires jQuery
 *
 * Examples at /
 *
 * Developed By Joby AJ 
 *
 */
const jmMenu = {

    jmMenuSplit: async () => {
        var innerHeight = $('.j-mMenuSecBlock').height();
        var appendElem = `<div class="j-mMenuSecIn"></div>`;
        var hgtCalc = 0;

        $('.j-mMenuSing').each(function (index) {
            $(this).find('.j-mMenuSecBlock').append(appendElem);
            $(this).find('.j-mMenuCLink').each(function (i) {
                if (hgtCalc < innerHeight - 20) {
                    if ($(this).next().hasClass('head')) {
                        $(this).css({
                            'margin-bottom': '25px'
                        })
                    }
                    $(this).parent().find('.j-mMenuSecIn:last-child').append($(this));
                } else {
                    $(this).parent().append(appendElem);
                    $(this).parent().find('.j-mMenuSecIn:last-child').append($(this));

                    hgtCalc = 0;
                }
                var thisHght = $(this).outerHeight(true);
                hgtCalc += thisHght;
            });
            hgtCalc = 0;
        });
    },


    jmMenuInit: () => {
        jmMenu.jmMenuSplit().then(
            function () {
                $('.j-mMenuSecBlock').each(function () {

                    if ($(this).find('.j-mMenuSecIn').length >= 4) {
                        $(this).addClass('j-mMenuImgHide');
                    }
                    
                    if ($(this).find('.j-mMenuSecIn').length > 4) {

                        var sliderClone = $('body').find('.j-mMenuSliderElem .j-mMenuSliderNav').clone();
                        $(this).parent().append(sliderClone);
                        var singleWidth = $(this).find('.j-mMenuSecIn').width();
                        $(this).find('.j-mMenuSecIn').width(singleWidth);
                        singleWidth *= $(this).find('.j-mMenuSecIn').length;
                        $(this).width(singleWidth);

                        if ($(this).find('.j-mMenuSecIn').length > 4) {
                            $(this).next().find('.j-mMenuSliderNext').addClass('active');
                            if ($(this).find('.j-mMenuCLinkImg')) {
                                $(this).find('.j-mMenuSecIn:nth-child(2)').addClass('first');
                                $(this).find('.j-mMenuSecIn:nth-child(5)').addClass('last');
                            } else {
                                $(this).find('.j-mMenuSecIn:nth-child(1)').addClass('first');
                                $(this).find('.j-mMenuSecIn:nth-child(4)').addClass('last');
                            }
                        }

                    }
                });
                jmMenu.jmMenuSlider();
            }
        )
    },



    jmMenuSlider: () => {
        var singleWidth = $('.j-mMenuSecIn').width();
        $('body').on('click', '.j-mMenuSing .j-mMenuSliderNavIn ', function () {
            if ($(this).hasClass('j-mMenuSliderNext')) {
                var wrapSecction = $(this).parents('.j-mMenuSec').find('.j-mMenuSecBlock');
                var posLeft = wrapSecction.css('marginLeft');
                posLeft = parseInt(posLeft) - singleWidth;
                wrapSecction.css({
                    'margin-left': posLeft
                });
                $(this).siblings().addClass('active');
                wrapSecction.find('.first').removeClass('first').next().addClass('first');
                wrapSecction.find('.last').removeClass('last').next().addClass('last');
                if (wrapSecction.find('.j-mMenuSecIn:last-child').hasClass('last')) {
                    $(this).removeClass('active');
                }

            } else if ($(this).hasClass('j-mMenuSliderPrev')) {
                var wrapSecction = $(this).parents('.j-mMenuSec').find('.j-mMenuSecBlock');
                var posLeft = wrapSecction.css('marginLeft');
                posLeft = parseInt(posLeft) + singleWidth;
                wrapSecction.css({
                    'margin-left': posLeft
                });
                $(this).siblings().addClass('active');
                wrapSecction.find('.first').removeClass('first').prev().addClass('first');
                wrapSecction.find('.last').removeClass('last').prev().addClass('last');
                if (wrapSecction.find('.j-mMenuCLinkImg')) {
                    if (wrapSecction.find('.j-mMenuSecIn:nth-child(2)').hasClass('first')) {
                        $(this).removeClass('active');
                    }
                } else {
                    if (wrapSecction.find('.j-mMenuSecIn:nth-child(1)').hasClass('first')) {
                        $(this).removeClass('active');
                    }
                }
            }
        });
    }


}





