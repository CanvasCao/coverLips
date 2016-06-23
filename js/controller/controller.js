/**
 * Created by Administrator on 2016/6/17.
 */
(function (w, d, $, undefined) {
    var controller = {};

    controller.ifAjaxing = false;

    controller.postImg = function (data, callback) {
        $.ajax({
            type: "post",
            url: 'http://n1.jimi.la/apps_T1/test2.php',
            data: data,
            success: function (data) {
                console.log(JSON.stringify(data));
            },
            error: function (err) {
                console.log('ERROR!')
                console.log(err);
            }
        })
    };


    w.controller = controller;
})(window, document, $)
