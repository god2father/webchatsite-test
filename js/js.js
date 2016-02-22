/**
 * Created by lly-qd on 2016/2/22.
 */

//    返回顶部按钮组
$(function() {
    $(window).on('scroll', function () {
        var st = $(document).scrollTop();
        if (st > 0) {
            $('.go').fadeIn(function () {
                $(this).fadeIn();
            });
        } else {
            $('.go').fadeOut(function () {
                $(this).fadeOut();
            });
        }
    });
    $('.go').on('click', function () {
        $('html,body').animate({'scrollTop': 0}, 400)
    })
});
//    滚动条nicescroll
$("html").niceScroll({
    cursorwidth: '10px',
    scrollspeed: '100',
    mousescrollstep: '45',
    cursoropacitymax:'0.2'//������͸����
});
