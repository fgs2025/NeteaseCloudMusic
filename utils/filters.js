import Vue from 'vue'

Vue.filter('PlayNum', function (value) {
    //播放量过滤
 
    var param = {};
    var k = 10000,
        sizes = ['', '万', '亿', '万亿'],
        i;
    if (value < k) {
        param.value = value
        param.unit = ''
    } else {
        i = Math.floor(Math.log(value) / Math.log(k));
        param.value = ((value / Math.pow(k, i))).toFixed(0);
        param.unit = sizes[i];
    }
    return param.value + param.unit;

})

