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