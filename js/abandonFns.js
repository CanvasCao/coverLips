/**
 * Created by Administrator on 2016/6/21.
 */
var btn = document.getElementsByTagName('button')[0];
btn.onclick = function () {
    controller.postImg({
        imgString: dataUrl.substring(22)
    });
}