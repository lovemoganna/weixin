//豆瓣关于星标的处理

//动物世界 评分7.4 stars=40 星星数量3.5
//侏罗纪世界 评分 6.9 stars=35 星星数量3.5
//功夫瑜伽 评分 5.0 stars= 星星数量2.5
function convertToStarsArray(stars) {
    var num = stars.toString().substring(0, 1);
    var array = [];
    for (var i = 1; i <= 5; i++) {
        if (i <= num) {
            array.push(1);
        }
        else {
            array.push(0);
        }
    }
    return array;
}

//异步方法
// function http(dataUrl,callback,method="")
function http(dataUrl, callback) {
    var that = this;
    wx.request({
        url: dataUrl,
        data: {},
        method: 'GET',
        header: {
            'content-type': 'application/xml'
        },
        success: function (res) {
            callback(res.data);
        },
        //请求不成功,但是确实发送了请求,但是服务器会给出一响应
        fail: function (error) {
            console.log('获取资源失败!' + error);
        }
    })
}

function convertToCastInfos(casts) {
    var castArray = []
    for (var idx in casts) {
        var cast = {
            img: casts[idx].avatars ? casts[idx].avatars.large : '',
            name: casts[idx].name,
            idx: casts[idx].id
        }
        castArray.push(cast)
    }
    return castArray;
}

module.exports = {
    starsInArray: convertToStarsArray,
    http: http,
    convertToCastInfos:convertToCastInfos
}
