$(function () {
    // 要素取得
    const $topBtn = $("#scrollTop")
    const $bottomBtn = $("#scrollBottom")

    // アクション
    $topBtn.click(function(){
        $('html,body').animate({scrollTop: 0}, 500, 'swing');
    });
    $bottomBtn.click(function(){
        $('html,body').animate({scrollTop: $(document).height()}, 500, 'swing');
    });
});

