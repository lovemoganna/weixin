var app = getApp();
var data = app.globalData.hdbkBase;

var util = require('../../utils/utils.js');


Page({
    /**
     * 页面的初始数据
     */
    data: {
        movieContainerShow:true,
        movieSearchPanelShow:false,
        searchResult:{},
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 正在热映,即将上映,Top250,口碑榜,北美票房榜,新片榜
        var inTheatersUrl = data + '/v2/movie/in_theaters' + '?start=0&count=3';
        var comingSoonUrl = data + '/v2/movie/coming_soon' + '?start=0&count=3';
        var top250Url = data + "/v2/movie/top250" + '?start=0&count=3';
        //没有权限
        var weekly = data + "/v2/movie/weekly" + '?start=0&count=3';
        var usBox = data + "/v2/movie/us_box" + '?start=0&rank=3';
        //没有权限
        var newMovies = data + "/v2/movie/new_movies" + '?start=0&count=3';

        //后面的是key
        this.getMovieListData(inTheatersUrl, "inTheaters", "正在热映");
        this.getMovieListData(comingSoonUrl, 'comingSoon', "即将上映");
        this.getMovieListData(top250Url, 'top250', "豆瓣Top250");

        //我们将  豆瓣Top250 的作为参数 作为我们伪造数据.

        // // this.getMovieListData(weekly);
        // this.getMovieListData(usBox);
        // this.getMovieListData(newMovies);

    },
    onMoreMovie: function (options) {
        var category = options.currentTarget.dataset.category;
        // options.currentTarget.dataset.category.  尾部的参数和你之前的参数绑定有关系, data-category = "{{categoryTitle}}"
        wx.navigateTo({
            url: 'more-movie/more-movie?category=' + category
        })
    },
    onMovieTap:function (options) {
        //根据电影ID进入电影详情页
        //这个地方一定要注意,movieid 要小写!!!
        var movieId = options.currentTarget.dataset.movieid;
        wx.navigateTo({
            url: 'movie-detail/movie-detail?movieId=' + movieId
        })
    },
    onCloseTap:function(){
        //绑定了一个清除当前状态的事件.回归原来的页面
        this.setData({
            movieContainerShow:true,
            movieSearchPanelShow:false
        })
    },
    onBindFocus: function () {
        //点击搜索栏,输入框获得焦点
        console.log('you click me !');
        //改变既有数据的状态
        this.setData({
            movieContainerShow:false,
            movieSearchPanelShow:true,  
            searchResult:{}          
        });


    },
    onBindChange: function (event) {
        //触发搜索事件bindconfirm专门响应键盘的"完成"事件.
        console.log('you search me ');
        var text = event.detail.value;
        // console.log(text)
        var searchUrl = data+'/v2/movie/search?q=' + text;
        this.getMovieListData(searchUrl,'searchResult','');
    },
    getMovieListData: function (url, settedkey, categoryTitle) {
        var that = this;
        wx.request({
            url: url,
            data: {},
            method: 'GET',
            header: {
                'content-type': 'application/xml'
            },
            success: function (res) {
                console.log(res);
                that.processDoubanData(res.data, settedkey, categoryTitle);
            },
            //请求不成功,但是确实发送了请求,但是服务器会给出一响应
            fail: function (error) {
                console.log('获取资源失败!' + error);
            }
        })
    },
    processDoubanData: function (moviesDouban, settedkey, categoryTitle) {
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
                movieId: movieId
            }
            movies.push(temp);
            //将temp push到movie数组当中.
        }
        var readyData = {};
        readyData[settedkey] = {
            // m_title:m_title,
            categoryTitle: categoryTitle,
            movies: movies
        }
        this.setData(readyData);
    }
})