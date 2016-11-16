(function () {
    var canvasFns = {};
    canvasFns.windowToCanvas = function (canvas, clientX, clientY) {
        var boundingRect = canvas.getBoundingClientRect();
        return {
            //鼠标的x-boundingRect的x
            x: (clientX - boundingRect.left) / (boundingRect.width / canvas.width), //boundingRect.width/canvas.width就是放大的倍数
            y: (clientY - boundingRect.top) / (boundingRect.height / canvas.height)
        }
    }
    window.canvasFns = canvasFns;
})()
