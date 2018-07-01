//引入外部的JS数据,用相对路径
//
var postData = require('../../data/posts-data')
Page({
    /**
     * 页面的初始数据---数据绑定
     */
    data: {

    },
    onSwiperTap: function(event){
        // target和currentTarget的区别
        // target指的是当前点击的组件,currentTarget指的是当前事件点击的组件
        //target这里指image,而currentTarget指的是swiper.
        var swiperid= event.currentTarget.dataset.id;
        console.log('hi '+swiperid);
        wx.navigateTo({
            url: '../post/post-detail/post-detail?id='+swiperid
        })
    },
    onPostTap: function (event) {
        //事件对象,当前鼠标点击的对象(view),所有自定义集合,postId-就是我们定义的postid(注意不能大写id)
        var postId= event.currentTarget.dataset.postid;
        console.log('this is click '+ postId + 'page');
        wx.navigateTo({
            url: '../post/post-detail/post-detail?id='+postId
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //可以直接引入value值
        //  this.data.swiper_list = postData.swiper_list;
        // this.data.post_list = postData.post_list;

        //下面这是直接操纵key
        this.setData({
            swiper_key: postData.swiper_list,
            posts_key: postData.post_list
        })
    }
})