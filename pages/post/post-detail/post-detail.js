var postsData = require('../../../data/posts-data.js')

//获取全局变量中的所有数据
var app = getApp();
var musicPlayingMusic = app.globalData.g_isPlayingMusic;
var curentPlayingMusic = app.globalData.g_currentGlobalMusic;
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlayingMusic: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //音乐播放状态的全局变量

        // 此处的ID和你URL中定义的ID一样的
        var postId = options.id;
        var postData = postsData.post_list[postId];
        //如果在onLoad方法中,不是异步的去执行一个数据绑定,则不需要使用this.setDate()方法.只需要对this.data进行赋值即可实现数据绑定
        // 也就是说异步方法没办法保证在页面加载事件完成之前完成数据绑定.
        // this.data.postData = postData;
        this.setData({
            post_key: postData,
            currentPostId: postId
        })

        //设置缓存
        // wx.setStrogeSync('key', 'xiaoming007');
        //修改缓存
        // wx.setStorageSync('key', {
        //     game:'LOL',
        //     developer:'roit'
        // });
        // wx.setStorageSync('key2', {
        //     game:'DNF',
        //     developer:'TX'
        // });

        // 存储缓存的状态的方式
        // var postsCollected = {
        //   1:'true',
        //   2:'false',
        //   3:'true'
        // }

        //从本地缓存中同步获取指定 key 对应的内容。
        var postsCollected = wx.getStorageSync('posts_Collected');
        if (postsCollected) {
            //获得指定的缓存
            var postCollected = postsCollected[postId];
            if (postCollected) {
                //数据监听
                this.setData({
                    //此时既可以通知显示/隐藏
                    collected: postCollected
                })
            }
        } else {
            //postsCollected值 = null
            var postsCollected = {};
            postsCollected[postId] = false;
            wx.setStorageSync('posts_Collected', postsCollected)
        }

        // console.log('载入页面中 ' + musicPlayingMusic);
        //获取全局变量中的数据
        if (musicPlayingMusic && curentPlayingMusic === postId) {
            //单个页面控制数据绑定
            this.setData({
                isPlayingMusic: true,
            })
        }

        //调用对音乐的监听方法.
        this.setMusicMonitor();
    },
    setMusicMonitor: function () {
        //监听音乐的播放和暂停
        // 监听音乐播放。
        var that = this;
        wx.onBackgroundAudioPlay(function () {
            // console.log('触发了播放 ' + musicPlayingMusic)
            that.setData({
                isPlayingMusic: true
            })
            musicPlayingMusic = true;
            curentPlayingMusic = that.data.currentPostId;
        })
        //监听音乐暂停。
        wx.onBackgroundAudioPause(function () {
            // console.log('触发了暂停 ' + musicPlayingMusic)
            that.setData({
                isPlayingMusic: false
            });
            musicPlayingMusic = false;
            curentPlayingMusic = null;
        })
        // //监听音乐停止。
        // wx.onBackgroundAudioStop(function() {
        //   that.setData({
        //     isPlayingMusic: false
        //   })
        // })
    },
    onCollectionTap: function (event) {
        console.log('hello stroge');
        // this.getPostCollectedAsy();
        this.getPostsCollectedSync();

    },
    //模拟异步缓存的请求
    getPostCollectedAsy: function () {
        var that = this;
        wx.getStorage({
            key: 'posts_Collected',
            success: function (res) {
                var postsCollected = res.data;
                // id只能从data里面取得.
                var postCollected = postsCollected[that.data.currentPostId];
                //收藏变成未收藏
                postCollected = !postCollected;
                postsCollected[that.data.currentPostId] = postCollected;
                //调用我们封装的方法.
                // this.showModal(postsCollected, postCollected);
                that.showToast(postsCollected, postCollected);
            }
        })
    },
    //模拟同步的请求
    getPostsCollectedSync: function () {
        var that = this;
        // 获取缓存
        var postsCollected = wx.getStorageSync('posts_Collected');
        // id只能从data里面取得.
        var postCollected = postsCollected[that.data.currentPostId];
        //收藏变成未收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        //调用我们封装的方法.
        // this.showModal(postsCollected, postCollected);
        that.showToast(postsCollected, postCollected);
    },

    //这种场景比较小
    showModal: function (postsCollected, postCollected) {
        //this的意义在于调用的上下文环境,
        var that = this;
        wx.showModal({
            title: '禀告主人',
            content: postCollected ? '您想要收藏这篇清新脱俗的文章哦!' : '您狠心要将这篇没有生气的文章去见鬼O(∩_∩)O~',
            showCancel: 'true',
            cancelText: '取消',
            cancelColor: '#888',
            confirmText: '确认',
            confirmColor: '#405f80',
            success: function (res) {
                if (res.confirm) {
                    //更新缓存
                    wx.setStorageSync('posts_Collected', postsCollected)
                    //更新数据绑定,从而切换图片
                    that.setData({
                        collected: postCollected
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    showToast: function (postsCollected, postCollected) {
        var that = this;
        wx.showToast({
            title: postCollected ? '收藏文章成功' : '文章取消收藏',
            icon: 'success',
            image: '',
            duration: 1000,
            mask: true,
            success: function (res) {
                //更新缓存
                wx.setStorageSync('posts_Collected', postsCollected)
                //更新数据绑定,从而切换图片
                that.setData({
                    collected: postCollected
                })
            },
            fail: function (res) {
            },
            complete: function (res) {
            },
        })
    },
    onShareTap: function (event) {
        console.log('hi share')
        var itemList = [
            '分享到微博',
            '分享到QQ空间',
            '分享到抖音',
            '分享到知乎',
            '分享到Twitter'
        ]
        //​显示操作菜单
        wx.showActionSheet({
            itemList: itemList,
            itemColor: '#450f80',
            success: function (res) {
                //用户是否点击了取消按钮
                //res.cancle;
                //数组元素的序号,从0开始.
                //res.tapIndex
                wx.showModal({
                    title: '您' + itemList[res.tapIndex],
                    content: '您是否确认取消 ' + res.cancel + ' 现在无法分享,WeChat不考虑这个事情'
                })
            }
        })
    },
    onMusicTap: function (event) {
        console.log('music playing...');
        //获取当前的postData
        var postData = postsData.post_list[this.data.currentPostId];
        //定义一个音乐状态的变量
        var isPlayingMusic = this.data.isPlayingMusic;
        if (isPlayingMusic) {
            //暂停音乐
            wx.pauseBackgroundAudio();
            this.setData({
                isPlayingMusic: false
            })

        } else {
            //音乐不会停止.除非你设置了暂停.
            wx.playBackgroundAudio({
                dataUrl: postData.music.dataUrl,
                title: postData.music.title,
                coverImgUrl: postData.music.coverImgUrl
            })
            this.setData({
                isPlayingMusic: true
            })
        }

    },

})