function windowToCanvas(canvas, clientX, clientY) {
    var boundingRect = canvas.getBoundingClientRect();
    return {
        //����x-boundingRect��x
        x: (clientX - boundingRect.left) / (boundingRect.width / canvas.width), //boundingRect.width/canvas.width���ǷŴ�ı���
        y: (clientY - boundingRect.top) / (boundingRect.height / canvas.height)
    }
}
