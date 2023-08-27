$(() => {
    selectBoxEvent();
    masonryFn();
});

window.addEventListener("resize", function () {
    masonryFn();
});
function masonryFn(){
    $(".masonry").masonry({
        itemSelector: ".box",
        columWidth: ".masonry_sizer",
        percentPosition: true,
        gutter: ".gutter_sizer",
        horizontalOrder: true,
        transitionDuration: 0
    })
}

function selectBoxEvent(){
    const selectBox = $(".select_box");

    selectBox.on("click",function(e){
        e.stopPropagation();
        if(!$(this).hasClass("active")){
            $(this).addClass("active").parent().siblings().find(".select_box").removeClass("active").find(".option_list").hide();
            $(this).find(".option_list").show();
        }else{
            $(this).removeClass("active");
            $(this).find(".option_list").hide();
        }
    })
    selectBox.find(".option_item").on("click",function(e){
        e.stopPropagation();
        const tg = e.currentTarget;
        $(this).parent().siblings(".label").text($(tg).text())
        $(this).parent().hide().parents(".select_box").toggleClass("active");
    })

    $("body").on("click",function(e){
        e.stopPropagation();
        selectBox.removeClass("active").find(".option_list").hide();
    })
}