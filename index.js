/**
 * Created by Administrator on 2016/6/1.
 */
/*
 used for create BroserWindow in webPreferences's preload property
 like this:
 webPreferences: {
    preload: path.join(__dirname, 'titlepreload.js')
 }
 */

var electron = require('electron');
var remote = electron.remote;

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var div = document.createElement('div');
        div.className = 'title-t';
        div.style = "display:inline-block; vertical-align:middle;text-align: left;";

        //窗体的title

        var body = document.body || document.getElementsByTagName('body')[0];
        body.insertBefore(div, body.childNodes[0]);

        var titlebar = require('eltitlebar');

        var option = {};
        //是否可移动
        if (!remote.getCurrentWindow().isMovable())
            option.draggable = false;

        //是否只需要显示关闭按钮
        if (!remote.getCurrentWindow().isResizable())
            option.only = true;

        var t = titlebar(option);
        t.appendTo(body);

        var br = document.createElement('BR');
        body.insertBefore(br, body.childNodes[0]);
    }
};