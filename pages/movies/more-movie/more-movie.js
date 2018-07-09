var app = getApp();
var data = app.globalData.hdbkBase;
var util = require('../../../utils/utils.js');

Page({
    data: {
        movies: {},
        navigateTitle: "",
        requestUrl: "",
        isEmpty: true
    },
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
        this.setData({
            requestUrl: dataUrl
        })
    },
    onScrollLower: function (event) {
        console.log("加载更多");
        var nextUrl = this.data.requestUrl + "?start=" + this.data.totalCount + "&count=20";
        util.http(nextUrl, this.processDoubanData);
        //显示加载提示
        wx.showNavigationBarLoading();
        //将状态置空
    },
    onPullDownRefresh: function (event) {
        console.log("刷新操作");
        var nextUrl = this.data.requestUrl + "?start=0&count=20";
        //我们只需要显示20条就号,这只是一个刷新操作
        this.data.movies = {};
        //将data的状态置空
        this.data.isEmpty=true;
        this.data.totalCount =0;
        util.http(nextUrl, this.processDoubanData);
        //显示加载提示
        wx.showNavigationBarLoading();
    },
    //moviesDouban是callback传递的参数
    processDoubanData: function (moviesDouban) {
        var movies = [];
        var totalCount = 0;
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
        // console.log(movies);
        // this.data.totalCount += 20;

        //定义一个空数组,我们将得到的20组的movies往里面组装.
        var totalMovies = [];
        if (!this.data.isEmpty) {
            //将老数据和新数据合并在一起,所以此时我们需要绑定totalMovies
            totalMovies = this.data.movies.concat(movies);
        } else {
            //data里面数据为null的情况下,我们需要改变此时data的状态为false
            totalMovies = movies;
            this.data.isEmpty = false;
        }
        //将temp push到movie数组当中.
        this.setData(
            {
                movies: totalMovies,
                totalCount: totalCount += 20
            }
        )
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();

    },
    onReady: function () {
        //页面渲染完成才能显示
        wx.setNavigationBarTitle({
            title: this.data.navigateTitle,
            success: function () {
            }
        })
    },
    onMovieTap:function (options) {
        //根据电影ID进入电影详情页
        //这个地方一定要注意,movieid 要小写!!!
        var movieId = options.currentTarget.dataset.movieid;
        wx.navigateTo({
            url: '../movie-detail/movie-detail?movieId=' + movieId
        })
    },
    onshow: function () {
        //onShow
    }
})
