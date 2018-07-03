## 配置tabBar
```text
"tabBar": {
    "borderStyle": "black",
    "list": [
      {
        "pagePath": "pages/post/post",
        "text": "阅读",
        "iconPath":"images/tab/yuedu.png",
        "selectedIconPath":"images/tab/yuedu_hl.png"
      },
      {
        "pagePath": "pages/movies/movies",
        "text": "电影",
        "iconPath":"images/tab/dianying.png",
        "selectedIconPath":"images/tab/dianying_hl.png"
      }
    ]
  }
```
主要是切换图片.

### 跳转tabBar
```text
// //    页面跳转,子级:只有5级
    // wx.navigateTo({
    //     url: '../post/post'
    // })

    // 重定向
    // wx.redirectTo({
    //     url: '../post/post'
    // })

    //仅支持tarbar跳转.
    wx.switchTab({
        url: "../post/post"
    });
```
### 快速创建文件的方式

![](https://upload-images.jianshu.io/upload_images/7505161-bf8182773a92e700.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
写一个"/pages/www",ctrl + s 保存就会自动生成四个名字为www的文件.

## Template的命名

![](https://upload-images.jianshu.io/upload_images/7505161-d6698cd06019b178.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-fdd99eed2617c201.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




## 豆瓣API
`http://api.douban.com/v2/movie/subject/26842702`
```text
{
    "rating": {
        "max": 10,
        "average": 8,
        "stars": "40",
        "min": 0
    },
    "reviews_count": 910,
    "wish_count": 71467,
    "douban_site": "",
    "year": "2018",
    "images": {
        "small": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520095279.webp",
        "large": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520095279.webp",
        "medium": "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520095279.webp"
    },
    "alt": "https://movie.douban.com/subject/26842702/",
    "id": "26842702",
    "mobile_url": "https://movie.douban.com/subject/26842702/mobile",
    "title": "燃烧",
    "do_count": null,
    "share_url": "http://m.douban.com/movie/subject/26842702",
    "seasons_count": null,
    "schedule_url": "",
    "episodes_count": null,
    "countries": [
        "韩国"
    ],
    "genres": [
        "剧情",
        "悬疑"
    ],
    "collect_count": 58288,
    "casts": [
        {
            "alt": "https://movie.douban.com/celebrity/1246859/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416153279.38.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416153279.38.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1416153279.38.webp"
            },
            "name": "刘亚仁",
            "id": "1246859"
        },
        {
            "alt": "https://movie.douban.com/celebrity/1275960/",
            "avatars": {
                "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355977769.24.webp",
                "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355977769.24.webp",
                "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355977769.24.webp"
            },
            "name": "史蒂文·元",
            "id": "1275960"
        },
        {
            "alt": "https://movie.douban.com/celebrity/1382416/",
            "avatars": {
                "small": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525863671.8.webp",
                "large": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525863671.8.webp",
                "medium": "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525863671.8.webp"
            },
            "name": "全钟瑞",
            "id": "1382416"
        },
        {
            "alt": "https://movie.douban.com/celebrity/1388997/",
            "avatars": {
                "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526495707.23.webp",
                "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526495707.23.webp",
                "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526495707.23.webp"
            },
            "name": "金秀京",
            "id": "1388997"
        }
    ],
    "current_season": null,
    "original_title": "버닝",
    "summary": "改编自村上春树短篇小说《烧仓房》，在一次送货的过程中，年轻的邮差钟秀（刘亚仁 饰）偶然间与童年好友惠美（全钟淑 饰）相遇。在前往非洲旅行之前，她请求钟秀照顾她的猫咪。旅行回来后，惠美向他介绍了本（史蒂文·元 饰），一个她在旅途上认识的神秘男人。一天，本向钟秀展示了一种奇怪却又让他无法抗拒的爱好……",
    "subtype": "movie",
    "directors": [
        {
            "alt": "https://movie.douban.com/celebrity/1103667/",
            "avatars": {
                "small": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1362368817.32.webp",
                "large": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1362368817.32.webp",
                "medium": "http://img7.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1362368817.32.webp"
            },
            "name": "李沧东",
            "id": "1103667"
        }
    ],
    "comments_count": 20275,
    "ratings_count": 52765,
    "aka": [
        "燃烧烈爱(台)",
        "Burning",
        "Beoning"
    ]
}
```

## CSS设置对齐
```text
1.float 右对齐

需要设置vertical-align : middel 居中对齐


2.flex弹性盒子模型

display:flex;
flex-direction:row;
//设置内容的分布方式:两端分布
justify-content:space-between;

space-around : 平均分布.

细节之处需要微调.
```

## 从web服务器调用API

Restful API JSON 

SOAP XML WSDL(强类型的引用)

RestfulAPI

接口的粒度很重要,就是说要细致,可以供很多人使用.--微服务就是一个解决的方式.

豆瓣,知乎,腾讯QQ,github,谷歌API你都可以搜索到.

## 解决豆瓣API的错误

本质上类似于爬虫,只不过是明面上禁止了IP,但是我们可以仿造浏览器的运行环境,UserAget,利用Nginx来反向代理解决.

```text
  location /v2/ {
            proxy_store off;
            proxy_redirect off;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Referer 'no-referrer-when-downgrade';
            proxy_set_header User-Agent 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36';
            proxy_connect_timeout 600;
            proxy_read_timeout 600;
            proxy_send_timeout 600;
            proxy_pass https://api.douban.com/v2/;
        }

```

调用的方式将其改为下面:
```text
onLoad: function (options) {
        wx.request({
            url: 'https://hdbk.site/v2/book/1220562',
            data: {},
            method: 'GET',
            header:{
                'content-type': 'application/xml' 
                //可能豆瓣不是用的json服务器,像tomcat.apahce,json-server都是支持json格式的数据的.
                //原因就是豆瓣的服务器对json格式调用的数据  ----  调取的方式做了限制.
            },
            success: function (res) {
                console.log(res);
            },
            //请求不成功,但是确实发送了请求,但是服务器会给出一响应
            fail:function (error) {
                console.log('获取资源失败!'+error);
            }
        })
    },
```

```text
此次遇到了400,403错误.

400-参数错误
403-资源不可用
500-服务器未知错误
添加了301-重定向
```

问题:我在想自己要不要写一个API.先爬虫,定期执行爬取任务,然后开放接口供自己调用...

遇到的问题就是过于频繁的调用,会引起服务器的内存搞满,搞的很卡.即使我用清理内存的方式,发现也不好使.只能购买更大内存的服务器.

所以我推断更好的方式就是爬取整个网站,将数据存储到数据库中,我们仅仅需要更新数据库的爬取.就能获取实时的数据.这样就好了.

反向代理,我代理的是豆瓣额API地址,请求次数过多就会很卡,内存爆满.直接调用数据库我不知道会是怎样...但是数据库的可优化性应该会很高.

## 从服务端引入数据. 

```text
processDoubanData: function (moviesDouban) {
        var movies = [];
        for (var i in moviesDouban) {
            var subject = moviesDouban[i];

            //电影标题
            var title = subject.title;
            if (title.length > 6) {
                title = title.substring(0, 6) + '...';
            }
            //电影评分
            var average = subject.rating.average;
            //电影海报
            var movieImage = subject.images.large;
            //电影Id
            var movieId = subject.id;

            //将这些数据放入一个列表当中
            var temp = {
                title: title,
                average: average,
                movieImage: movieImage,
                movieId: movieId
            }
            //将temp push到movie数组当中.
            movies.push(temp);

            this.setData({
                movies:movies
            })
        }

    }
```

注意我们写入动态的数据是自上而下的,与我们编写模板的方式正好相反.


## 将参数写入到data中.

我们有3个URL需要处理.并获得相应的数据.

```text
inTheaters:{},
comingSoon:{},
top250:{}
```

也就是说我们想往data里面写入这3个键值对.

现在他们调用的方法是相同的.只不过是key不一样.

所以我们需要添加一个key.

```text
this.getMovieListData(inTheatersUrl,"inTheaters");

调用的方法也要加settedkey这个变量.

that.processDoubanData(res.data.subjects,settedkey);

processDoubanData: function (moviesDouban,settedkey)
``` 
processDoubanData这个方法是用来清洗我们所需要的数据的.

我们之前已经将清洗好的数据,经过for循环,清洗好一个就添到moveis这个数组当中.

但是现在新加一个参数settedkey.说明他只针对特定的settedkey进行清洗工作.也就是下面movies里装了我们清洗完的数据.
```text
movies.push(temp);
```
但是我们需要将其添到data里面去.向下面这种方法,无法确定key.它是把整个数据都写入到了Data.并非3个键值对的形式.
```text
this.setData{{
    movies:movies;
}}
```
即便我们在模板中调用
```text
 <template  is="movieListTemplate" data ="{{movies}}"/>
```
但是我们有3个模板哪,不能都调用{{movies}}

**所以需要我们进行动态属性的使用**

```text
readyData[setted] = movies;
this.setData(readyData);
每调用一次这个方法,就会将这个键值对写入到data.

现在的数据的结构如下:

readyData:[
    1:[{},{},{}],
    2:[{},{},{}],
    3:[{},{},{}]
]

movies就是[{},{},{}].

所以我们可以给这个数组一个键值:movies
readyData:[
    1:{movies:[{},{},{}]},
    2:{movies:[{},{},{}]}
    3:{movies:[{},{},{}]}
]

这样做的好处是:

我们从基层调用通过key就能获取值.即在模板中添加 data="{{...1}}",那么下一步的movies:[{},{},{}]就能获得对应的值.

由于movies:[{},{},{}]是一个数组,需要我们利用for循环来做. 即 wx:for="{{movies}}" wx:for-item="{{movie}}",我们在模板中调用,data="{{...movie}}"就可以得到结果.

最终我们面对的是{}这一部分,只需要取到里面的key,就能绑定数据.
```

此阶段的文件如下:

movies.wxml

```text
<import src="./movie-list/movie-list-template.wxml"/>
<view class="m-container">
       <view class="movie-template">
           <template  is="movieListTemplate" data="{{...inTheaters}}"/>
       </view>
       <view class="movie-template">
           <template  is="movieListTemplate" data="{{...comingSoon}}"/>
       </view>
       <view class="movie-template">
           <template  is="movieListTemplate" data="{{...top250}}"/>
       </view>
</view>
```

movie-list-template.wxml
```text
<import src="../movie/movie-template.wxml"/>

<template name="movieListTemplate">
    <view class="movie-list-container">
        <view class="inner-container">
            <view class="movie-head">
                <text class="slogan">正在热映</text>
                <view class="more">
                    <text class="more-text">更多</text>
                    <image src="../../../images/icon/arrow-right.png" class="more-img"></image>
                </view>
            </view>
            <view class="movie-container">
                <block wx:for="{{movies}}" wx:for-item="movie">
                    <template is="mTemplate" data="{{...movie}}" />
                </block>
            </view>
        </view>
    </view>
</template>
```

movie-template.wxml
```text
<import src="../stars/stars-template.wxml"/>
<template name="mTemplate">
    <view class="movie-one-container" data-movieId="{{movieId}}">
        <image src="{{movieImage}}" class="movie-img"/>
        <text class="movie-title">{{title}}</text>
        <template is="starsTemplate"/>
    </view>
</template>
```
movies.js
```text
var app = getApp();
var data = app.globalData.hdbkBase;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //那几个key现在不写进来也可以了,因为之前是因为异步的关系.页面载入的时候,并不能获得初始数据.
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
        this.getMovieListData(inTheatersUrl, "inTheaters");
        this.getMovieListData(comingSoonUrl, 'comingSoon');
        this.getMovieListData(top250Url, 'top250');
        // // this.getMovieListData(weekly);
        // this.getMovieListData(usBox);
        // this.getMovieListData(newMovies);

    },
    getMovieListData: function (url, settedkey) {
        var that = this;
        wx.request({
            url: url,
            data: {},
            method: 'GET',
            header: {
                'content-type': 'application/xml'
            },
            success: function (res) {
                that.processDoubanData(res.data.subjects, settedkey);
                // processDoubanData(res);
            },
            //请求不成功,但是确实发送了请求,但是服务器会给出一响应
            fail: function (error) {
                console.log('获取资源失败!' + error);
            }
        })
    },
    processDoubanData: function (moviesDouban, settedkey) {
        var movies = [];
        for (var idx in moviesDouban) {
            var subject = moviesDouban[idx];

            //电影标题
            var title = subject.title;
            if (title.length > 8) {
                title = title.substring(0, 8) + '...';
            }
            //电影评分
            var average = subject.rating.average;
            //电影海报
            var movieImage = subject.images.large;
            //电影Id
            var movieId = subject.id;

            //将这些数据放入一个列表当中
            var temp = {
                title: title,
                average: average,
                movieImage: movieImage,
                movieId: movieId
            }
            movies.push(temp);
            //将temp push到movie数组当中.
        }
        var readyData = {};
        readyData[settedkey] = {
            movies:movies
        }
        this.setData(readyData);
        console.log(readyData);
    }
})
```

### 关于星星的实现
此外还需要在movie.js引入处理星星数量的js数据.引入方式和我们引入JS数据库的方式一样
```text
var xxx=require("FilePath")
```

就是将starts这个数据进行处理,他本身就是40,这是一个整数,也可能是35.我们只有5颗星.所以肯定需要进行取整数部分.

1.截取个位数字.截取字符串的方式来解决.(字符串toString()不会报错)

2.我们传进来的是单个数据.所以需要组装一个Array.

3.遍历5次,如果i < num,就给Array push 1,否则push 0.

4.拿着组装好的数据调用并进行数据绑定. 

```text
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
module.exports ={
    starsInArray:convertToStarsArray
}

```

我们知道星星和评分是关联在一起的.所以我们需要对下一个模板传入2个参数,即stars和score.
movie-template.wxml
```
<import src="../stars/stars-template.wxml"/>
<template name="mTemplate">
    <view class="movie-one-container" data-movieId="{{movieId}}">
        <image src="{{movieImage}}" class="movie-img"/>
        <text class="movie-title">{{title}}</text>
        <template is="starsTemplate" data="{{stars:stars,score:average}}"/>
    </view>
</template>
```
可以看出这是一种新的数据绑定的形式,只不过是重新给movie.js中的数据重新定义了key,只要能拿到key,我们就能获得值.
```text
average: average,
stars:stars ,
```

stars-template.wxml
```text
<template name="starsTemplate">
    <view class="stars-container">
    <!-- 拿到的stars是一个数组[1,1,1,1,0] -->
        <block wx:for="{{stars}}" wx:for-item="i">
            <view class="stars-img">
                <image wx:if="{{i}}" src="/images/icon/star.png"></image>
                <image wx:else src="/images/icon/none-star.png"></image>
                <!--<image wx:if="{{i === 1 }}" src="/images/icon/none-star.png"></image>-->
                <!--<image wx:elif="{{i === 2 }}" src="/images/icon/none-star.png"></image>-->
                <!--<image wx:else="{{i === 0 }}" src="/images/icon/none-star.png"></image>-->
            </view>
        </block>
        <text class="star-score">{{score}}</text>
    </view>
</template>
```

现在这个页面的数据如下:
![](https://upload-images.jianshu.io/upload_images/7505161-066e981124e8aa49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

关于category参数的添加和settedkey的加法几乎一样.

## 电影"更多"的制造

在开始制作这种页面之前,我们需要思考.点击更多,会发生什么?

很简单跳转页面...

但是跳转的是这3个当中的哪一个呐?我们要善于观察我们创造的东西...

![](https://upload-images.jianshu.io/upload_images/7505161-dc0de08ab043dd48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

很显然不一样的地方就是即将上映和正在热播.

我们之前在这个地方引入了我们之前创造的categoryTitle参数的key.

所以我们需要利用这个categoryTitle的值来作为辨别是哪一块点击更多的值.

```text
 <view class="movie-head">
                <text class="slogan">{{categoryTitle}}</text>
                <!--绑定categoryTitle这个参数 是为了 知道点击了哪种电影的更多-->
                <view class="more" bindtap="onMoreMovie" data-category="{{categoryTitle}}">
                    <text class="more-text">更多</text>
                    <image src="../../../images/icon/arrow-right.png" class="more-img"></image>
                </view>
            </view>
```

也就是在上面的单击事件上的url跳转部分携带categorygory这个参数.我们需要从data里面取得.

```text
 onMoreMovie:function(options){
        var category = options.currentTarget.dataset.category;
        // options.currentTarget.dataset.category.  尾部的参数和你之前的参数绑定有关系, data-category = "{{categoryTitle}}"
        wx.navigateTo({
            url: 'more-movie/more-movie?category='+category
        })
```

之后我们需要从我们新建的more-movie中取得数据.

```text
  onLoad:function (options){
        var category = options.category;
        console.log(category);

    }
```
### 动态NavigateBar的设定

在此我们需要知道,页面的生命周期.

一开始肯定是页面的载入事件,但是在载入的过程中,不允许UI的有任何操作.

还有onShow,onReady,经测试只有onReady才能使用.

```text
Page({
    data:{
    },
    onLoad:function (options){
        var category = options.category;
        console.log(category);
        this.setData({
            navigateTitle:category
        })
    },
    onReady:function () {
        //页面渲染完成才能显示
        wx.setNavigationBarTitle({
            title: this.data.navigateTitle,
            success:function () {

            }
        })
    },
    onshow:function () {
        //onShow
    }
})
```
### 重复JS的处理

在我看来,JS的重复代码,需要我们好好的处理.以方便更好的复用!

utils记录了我们关于星星的逻辑处理:如果星星的stars个位数小于5,我们就认为它是1存到一个新的数组中去.否则就认为他是0,存到数组中去.

在一个很有必要的就是我们对网络请求,也就是有关HTTP的封装.

```text
//异步方法
// function http(dataUrl,callback,method="")
function http(dataUrl,callback) {
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
```

你可以看到里面包含一个异步调用的函数.因为他仅仅获得了一部分数据,还需要我们对这些数据进行清洗.

所以我们在more-movie.js调用的时候.当前前提是引入utils.js
```text
util.http(dataUrl, this.processDoubanData);
```

### 处理页面部分

1.先处理movie-grid-template.wxml
```text
<import src="../movie/movie-template.wxml"/>
<template name="movieGridTemplate">
    <block wx:for="{{movies}}" wx:for-item="movie">
        <template is="mTemplate" data="{{...movie}}"/>
    </block>
</template>
```
2.再处理movie-grid-template.wxss
```text
@import "../movie/movie-template.wxss";
```
3.再处理more-movie.wxml
```text
<import src="../movie-grid/movie-grid-template.wxml"/>
<view>
    <template is="movieGridTemplate" data="{{movies}}"/>
</view>
```

关于对gird-container的flex布局:

它是包在Template上的.所以会无法执行手机上滑显示跟多的数据.

![](https://upload-images.jianshu.io/upload_images/7505161-fd520c585029b1f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


