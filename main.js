$(function () {
    // --------------------------------------------
    // ナビ切り替え
    // --------------------------------------------
    // 要素取得
    const $changeBtn = $("#nav-change-btn")
    const $navJa = $("#nav-ja")
    const $navEn = $("#nav-en")

    // 初期表示
    $navEn.hide()

    // アクション
    $changeBtn.click(function () {
        $navEn.toggle()
        $navJa.toggle()
    })

    // --------------------------------------------
    // 上下スクロール
    // --------------------------------------------
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

