
$(function () {
    // 変数に要素を入れる
    var open = $('.search-btn'),
        close = $('.search-close'),
        container = $('.search');

    //開くボタンをクリックしたらモーダルを表示する
    open.on('click', function () {
        container.addClass('active');
        return false;
    });

    //閉じるボタンをクリックしたらモーダルを閉じる
    close.on('click', function () {
        container.removeClass('active');
    });

    //モーダルの外側をクリックしたらモーダルを閉じる
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.search-form').length) {
            container.removeClass('active');
        }
    });
});