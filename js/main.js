/**
 * Created by wangchangjian on 2017/6/14.
 */
$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;

        $('#main_ad> .carousel-inner> .item').each(function (i, item) {
            var $item = $(item);
            var imgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");
            $item.css("backgroundImage", 'url("' + imgSrc + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="">');
            } else {
                $item.empty();
            }
        });
    }

    $(window).on("resize", resize).trigger("resize");
    $('[data-toggle="tooltip"]').tooltip();

    var $ulContainer = $('.nav-tabs');
    var width = 30;
    $ulContainer.children().each(function(index,element){
        width+=element.clientWidth;
    });
    if(width>$(window).width()){

        $ulContainer.css('width','width').parent().css('overflow-x','scroll');
    }
    var $newsTitle=$('.news-title');
    $('#news .nav-pills a').on('click',function(){
        var $this=$(this);
        var title=$this.data("title");
        $newsTitle.text(title);

    });

});
