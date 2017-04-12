(function () {
/*
    function resize() {
        // $('#main').height($(window).height() - $('#header').height());
    }
    //这个目前不好用

    window.onresize = resize(resize);
    $(window).resize(resize);
    resize();
*/

    $(function () {
        require(['start']);
    });

})();

define("start", function (require) {

    var ec = require('echarts');
    require('echarts-x');
    require('echarts/chart/map');
    require('echarts/chart/bar');
    require('echarts-x/chart/map3d');
/*    var test = function (data) {
     return data+3;
     };*/
    var myChart = ec.init(document.getElementById('chart'));
    // var jsCode = $('#code-source').text();

    console.log(mapSphere.toString());
    //这里需要去除因获取文本而定义成函数的额外字符串
    var jsCode = mapSphere.toString().replace("function mapSphere() {","")
    jsCode =jsCode.substring(0,jsCode.lastIndexOf("}"));

    setTimeout(function () {
        runCode();
    });
    var runCode = function runCode() {
        myChart = ec.init(document.getElementById('chart'));
        var func = new Function('myChart', 'require', jsCode);
        func(myChart, require);
    }

    return {
        runCode:runCode
    }
});
