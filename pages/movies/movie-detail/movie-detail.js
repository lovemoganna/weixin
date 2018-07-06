var app = getApp();
var data = app.globalData.hdbkBase;

var util = require('../../../utils/utils.js');
Page({
    data: {},
    onLoad: function (options) {
        var movieId = options.movieId;
        var url = data + '/v2/movie/subject/' + movieId;
        var result = util.http(url, this.processDoubanData);
    },
    processDoubanData: function (res) {
        if (!res){
            return;
        }
        var director = {
            avatar: '',
            name: '',
            id: ''
        }
        //导演的一些数据
        if (res.directors[0] != null) {
            if (res.directors[0].avatars != null) {
                director.avatar = res.directors[0].avatars.large
            }
            director.name = res.directors[0].name;
            director.id = res.directors[0].id;
        }
        var reviews_count = res.reviews_count;
        var wish_count = res.wish_count;
        var year = res.year;
        var images = res.images ? res.images.large : '';
        var title = res.title;
        var countries = res.countries[0];

        var genre = res.genres;
        // 处理genres
        var genres = []
        for (var i in genre) {
            genres = genres + genre[i] + '/'
        }
        //获得我们想要的 剧情/动作/冒险格式
        genres = genres.substring(0, genres.length - 1);

        var collect_count = res.collect_count;

        //演员的数据
        var cast = {
            avatar: '',
            name: '',
            id: ''
        }
        var cast_more = []
        //获取所有演员的数据
        var casts = res.casts;
        var cast_more =util.convertToCastInfos(casts);
        // for (var item in casts) {
        //     var oneCast = casts[item]
        //     if (oneCast.avatars != null) {
        //         var avatar = oneCast.avatars.large;
        //         cast.avatar = avatar;
        //     }
        //     cast.name = oneCast.name;
        //     cast.id = oneCast.id;
        //     cast_more.push(oneCast)
        // }

        var original_title = res.original_title;
        //电影简介
        var summary = res.summary;
        var subtype = res.subtype;
        //全部评论
        var comments_count = res.comments_count;
        //评价人数
        var ratings_count = res.ratings_count;
        var aka = res.aka;
        //处理电影的别名
        var akas = []
        for (var idx in aka) {
            akas += aka[idx] + '/'
        }
        akas = akas.substring(0, akas.length - 1)

        //引入星星
        var star =res.rating.stars;
        var stars = util.starsInArray(star);
        //引入评分
        var average = res.rating.average;
        //关于电影本身的数据
        var movie = {
            reviews_count: reviews_count,
            wish_count: wish_count,
            year: year,
            images: images,
            title: title,
            countries: countries,
            genres: genres,
            collect_count: collect_count,
            original_title: original_title,
            summary: summary,
            subtype: subtype,
            comments_count: comments_count,
            ratings_count: ratings_count,
            akas: akas,
            stars:stars,
            average:average
        }
        this.setData({
            cast_more: cast_more,
            director: director,
            movie: movie
        })
    }
})