var app = getApp();
var data = app.globalData.hdbkBase;
var util = require('../../../utils/utils.js');

Page({
    data: {},
    onLoad: function (options) {
        //获取从movies.js写入的参数,来区分数据的入口.
        var category = options.category;
        // console.log(category);
        this.setData({
            navigateTitle: category
        })
        var dataUrl = '';

        //获取不同入口的数据
        switch (category) {
            case "正在热映":
                //设置它真实的URL
                dataUrl = data + '/v2/movie/in_theaters';
                break;
            case "即将上映":
                dataUrl = data + '/v2/movie/coming_soon';
                break;
            case "豆瓣Top250":
                dataUrl = data + '/v2/movie/top250';
                break;
        }
        util.http(dataUrl, this.processDoubanData);
    },
    //moviesDouban是callback传递的参数
    processDoubanData: function (moviesDouban) {
        var movies = [];
        for (var idx in moviesDouban.subjects) {
            var subject = moviesDouban.subjects[idx];
            // var m_title = moviesDouban.title;

            //电影标题
            var title = subject.title;
            if (title.length > 8) {
                title = title.substring(0, 8) + '...';
            }
            //电影评分
            var average = subject.rating.average;
            //评分星星
            var stars = util.starsInArray(subject.rating.stars);
            //电影海报
            var movieImage = subject.images.large;
            //电影Id
            var movieId = subject.id;

            //将这些数据放入一个列表当中
            var temp = {
                title: title,
                average: average,
                stars: stars,
                movieImage: movieImage,
                movieId: movieId,
            }
            movies.push(temp);
        }
        console.log(movies);
        //将temp push到movie数组当中.
        this.setData(
            {
                movies: movies
            }
        )
    },
    onReady: function () {
        //页面渲染完成才能显示
        wx.setNavigationBarTitle({
            title: this.data.navigateTitle,
            success: function () {
            }
        })
    },
    onshow: function () {
        //onShow
    }
})
