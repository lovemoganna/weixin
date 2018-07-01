Page({

    /**
     * 页面的初始数据
     */
    data: {},
    onTap: function () {

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

        // wx.navigateTo({
        //   url: '',
        //   success: function(res){
        //     //跳转成功之后执行的函数
        //   },
        //   fail:function(){
        //     //跳转失败之后执行的函数
        //   },
        //   complete:function(){
        //     //无论跳转成功还是失败都会执行的业务.
        //   }
        //})
        console.log('onTap...');
    },
    /**
     * 生命周期函数--监听页面加载
     */
    // onTextTap: function(){
    //     console.log('onTextTap....');
    // },
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('welcome page is onhide');
    },

    /**
     * 生命周期函数--监听页面卸载
     * 也就是说跳转另外一个页面后,此页面就被卸载了.
     */
    onUnload: function () {
        console.log('welcome page is onUnload');
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})

