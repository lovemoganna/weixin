## JS的执行顺序
```
onload
onShow
onReady
OnReachBottom

即先载入---然后显示页面---然后渲染---页面上拉触底事件的处理函数
```
## 小程序数据绑定
之前我们常规的做法
```text
data: {},
    imgPath: '../../../images',
    process: function () {
        var data = 'Nov 18 2018';
        我们一般都对数据进行DOM操作
        // document.getElementById('post-date');
    },
```
小程序的做法
```text
//写法
 data: {
        date:'Nov 18 2018'
    },

//在DOM中应用    
{{date}}
```

vertical="true" 是将图片滑动设置为垂直翻转.

原因在于里面是一个字符串,在解析字符串的时候会将其转为一个布尔值.

所以此时需要数据绑定:
vertical="{{false}}"

## 控制标签元素的显示和隐藏
隐藏作者的头像
```text
<image wx:if="{{false}}" src='{{img.author_img}}' class='post-author'></image>
```
也可以使用这样的方式:
 ```text
 img_condition: true
 <image wx:if="{{img_condition}}" src='{{img.author_img}}'
```
 字符串拼接
 ```text
<text class='post-date'>{{'One Day '+date}}</text>
```
{{a+b+c}}只会显示最终的值.

## 数据整合为数组
```text
var post_content1 = {
            date: 'Nov 28 2018',
            title: '大闸蟹',
            content: '华语环境下说到宅（御宅族的宅），其实基本都是在说ACG宅，毕竟这个词发源于ACG圈子，了解过御宅族的宅的人基本上多多少少都跟ACG有所接触，以至于一般提到XX宅基本也就是XX向的ACG宅，或者是对ACG也有所爱好的XX宅。',
            collect_num: '65',
            view_num: '21',
            author_img: '../../images/avatar/1.png',
            img_condition: true
        }
        var post_content2 = {
            date: 'Nov 16 2018',
            title: '电影时光',
            content: '讲得是一个战争的故事,我们可以观摩一下!',
            collect_num: '25',
            view_num: '41',
            author_img: '../../images/avatar/3.png',
            img_condition: true
        }
```

改造后
```text
var post_content = [
            {
                date: 'Nov 28 2018',
                title: '大闸蟹',
                content: '华语环境下说到宅（御宅族的宅），其实基本都是在说ACG宅，毕竟这个词发源于ACG圈子，了解过御宅族的宅的人基本上多多少少都跟ACG有所接触，以至于一般提到XX宅基本也就是XX向的ACG宅，或者是对ACG也有所爱好的XX宅。',
                collect_num: '65',
                view_num: '21',
                author_img: '../../images/avatar/1.png',
                post_img:'../../images/post/crab.png'
                // img_condition: true
            },
            {
                date: 'Nov 16 2018',
                title: '电影时光',
                content: '讲得是一个战争的故事,我们可以观摩一下!',
                collect_num: '25',
                view_num: '41',
                author_img: '../../images/avatar/3.png',
                post_img:'../../images/post/bl.png'
                // img_condition: true
            }
             this.setData(
                        {posts_key: post_content}
                    );
```
但是我们需要将这些数据写回到HTML中,所以需要加上一个新的标签<block></block>
可以看成是一个(),

即(),().

使用便利即`  <block wx:for="{{posts_key}}" wx:for-item="item" wx:for-index="idx">`
前面指代的是键值,意思就是我们通过找到键值就能找到对应的数据.

后面就是索引.引用方式就是{{idx}}

## 做一下启动页面跳转
```text
1.绑定事件

2.导航栏API
```
### 绑定事件
```text
事件绑定的写法同组件的属性，以 key、value 的形式。

key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本 1.5.0 起，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、、catch:touchstart。
value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。
```

然后在JS里面引入就可以了
```text
 onTap: function(){
    console.log('hi nihao');
  },
```
但是存在一个BUG:点击一次,重复多次.

![](https://upload-images.jianshu.io/upload_images/7505161-5927f272931f993a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

重启小程序就可以解决.愚蠢!

跳转页面的设置:
```text
onTap: function () {
        // console.log('hi nihao');
        //    页面跳转,子级:只有5级
        // wx.navigateTo({
        //     url: '../post/post'
        // })

        // 重定向
        wx.redirectTo({
            url: '../post/post'
        })

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
        })
```

## 冒泡的概念

我们给父元素和子元素绑定两个onTap事件.然后执行的结果.

如果点击子元素,那么子元素和父元素都会执行.

如果点击父元素,那么只会加载父元素的东西.

这就是冒泡的操作.
![](https://upload-images.jianshu.io/upload_images/7505161-71c8727e41745582.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们现在想组织冒泡的发生,还记的之前我们绑定事件的时候,有bind/catch两种方式.

**把bind改为catch就可以阻止冒泡事件了.**

## 引入数据库模块
原先数据加载的方式:
```text
 //轮播图参数
        var swiper_content = [{
            swiper_image_1: '../../images/post/xiaolong.jpg',
            swiper_image_2: '../../images/post/vr.png',
            swiper_image_3: '../../images/post/cat.png'
        }]
        this.setData(
            {swiper_key: swiper_content}
        )
        //新闻模块参数
        var post_content = [
            {
                avatar: '../../images/avatar/1.png',
                date: 'Nov 28 2018',
                title: '大闸蟹',
                imgSrc: '../../images/post/crab.png',
                content: '华语环境下说到宅（御宅族的宅），其实基本都是在说ACG宅，毕竟这个词发源于ACG圈子，了解过御宅族的宅的人基本上多多少少都跟ACG有所接触，以至于一般提到XX宅基本也就是XX向的ACG宅，或者是对ACG也有所爱好的XX宅。',
                comment: '65',
                collection: '21'
                // img_condition: true
            },
            {
                avatar: '../../images/avatar/1.png',
                date: 'Nov 16 2018',
                title: '电影时光',
                imgSrc: '../../images/post/bl.png',
                content: '华语环境下说到宅（御宅族的宅），其实基本都是在说ACG宅，毕竟这个词发源于ACG圈子，了解过御宅族的宅的人基本上多多少少都跟ACG有所接触，以至于一般提到XX宅基本也就是XX向的ACG宅，或者是对ACG也有所爱好的XX宅。',
                comment: '25',
                collection: '41'

                // img_condition: true
            }
        ]
        this.setData(
            {posts_key: post_content}
        );
        
        
然后在HTML中引入key,
即 <block wx:for="{{posts_key}}">   ,用item来遍历就可以.     
```

现在是将上面的数据专门存到data这个文件夹下,具体的方法如下:
```text
1.{....原先的数据}
2.放入到模块中.
即
module.exports = {
    //同样也是键值对的形式来写
    post_list: local_post_data
}

3.数据调用的方法
var postData = require('../../data/posts-data')
 this.setData({
            swiper_key: postData.swiper_list,
            posts_key: postData.post_list
})
```

## 关于data 和 onLoad:function(option){}的执行顺序
```text
小程序总是会读取data对象来做数据绑定,这个动作叫A

而A动作的执行,是在onLoad事件执行之后发生的.
  
但是碰到异步执行的swiper,就不能直接赋值了.
```
根据业务来访问数据.

## 跨页面访问同一个页面骨架
```text
### template模板可以解决这个问题.
```
template模板的样式
```text
<template name="postItem">
    <view class='post-container'>
        <view class='post-author-date'>
            <image src='{{item.avatar}}' class='post-author'></image>
            <!--字符串拼接-->
            <text class='post-date'>{{item.date}} {{idx}}</text>
        </view>
        <text class='post-title'>{{item.title}}</text>

        <image src='{{item.imgSrc}}' class='post-image'></image>

        <text class='post-content'>{{item.content}}
        </text>

        <view class='post-like'>
            <image src='../../images/icon/chat.png' class='post-like-image'></image>
            <text class='post-like-font'>{{item.comment}}</text>
            <image src='../../images/icon/view.png' class='post-like-image'></image>
            <text class='post-like-font'>{{item.collection}}</text>
        </view>
    </view>
</template>
```
### 引入模板的方法

```
<import src="post-item/post-item-template.wxml" />
<view>
    <block wx:for="{{swiper_key}}" wx:for-item="item" wx:for-index="idx">
        <template is="swiperItem" data="{{item:item,idx:idx}}"/>
    </block>

    <block wx:for="{{posts_key}}">
        <!--is = template name   data = 数据传递  item 指代的是posts_key上的一个子元素.-->
        <template is="postItem" data="{{...item}}"/>
    </block>
</view>

如果要引入索引,data="{{item:item,idx:idx}}
```
### 给已经写入模板的wxml文件绑定事件

注意我们不能将事件`catchTap = 'onPostTap'`绑定到template.

我们仔细观察编译后的template文件,会发现template这个标签会消失,所以起到的也仅仅是一个占位符的作用.

因此我们不能把事件绑定在template上面.

所以我们需要找一个标签,绑定在它的上面.

```text
<view catchtap="onPostTap">
            <template is="postItem" data="{{...item}}" />
</view>
```
但是我们有很多文章,所以需要加一个post-id来区分是哪些个文章.

item 是
```text
{
        avatar: '../../images/avatar/1.png',
        date: 'Nov 28 2018',
        title: '大闸蟹',
        imgSrc: '../../images/post/crab.png',
        content: '华语环境下说到宅（御宅族的宅），其实基本都是在说ACG宅，毕竟这个词发源于ACG圈子，了解过御宅族的宅的人基本上多多少少都跟ACG有所接触，以至于一般提到XX宅基本也就是XX向的ACG宅，或者是对ACG也有所爱好的XX宅。',
        comment: '65',
        collection: '21',
        post_id: 0
        // img_condition: true
    },
```
这里面的一个JS对象.

我们只需要这样写
```text
<view catchtap="onPostTap" data-postId="{{item.post_id}}">
            <template is="postItem" data="{{...item}}" />
</view>
```
就能获得对应的标签的详细内容.

下面可以看出,data-postId的值了

![](https://upload-images.jianshu.io/upload_images/7505161-90a7b1dd22394db8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们在JS里面调用
```
//事件对象,当前鼠标点击的对象(view),所有自定义集合,postId-就是我们定义的pOSTId
var postId= event.currentTarget.dataset.postid;
```

![](https://upload-images.jianshu.io/upload_images/7505161-d5b0411a870125a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-a79abaa89cea7593.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 构建新闻详情页

我们看一下postsData是什么?

![](https://upload-images.jianshu.io/upload_images/7505161-f30468edcd46233f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

实际上就是我们在JS数据库中定义的JSON数组.

所以我们只需要根据ID获得对应的JSON数据即可.

## 给我们的轮播图绑定动态的数据

关键就是控制图片的id.

轮播图改造为:
```text
<swiper indicator-dots="true" indicator-color="rgba(0, 0, 0, .3)" autoplay="true" interval="3000"
            vertical="{{false}}" circular="true">
    <block wx:for="{{swiper_key}}">
        <view bindtap="onSwiperTap" data-id="{{item.id}}">
            <template is="swiperItem" data="{{...item}}"/>
        </view>
    </block>
    </swiper>
```
注意我们是构造了一个图片id,所以需要在数据库中提前定义好,这个图片ID.


数据库中的轮播图:
```text
var local_swiper_content =
    [
        {swiper_image: '../../images/post/xiaolong.jpg', id: 0},
        {swiper_image: '../../images/post/vr.png', id: 1},
        {swiper_image: '../../images/post/cat.png', id: 2}

    ]
```

模板改为:
```text
<template name="swiperItem">
        <swiper-item item-id="{{id}}">
            <image src='{{swiper_image}}'></image>
        </swiper-item>
</template>
```
JS 中的应用
```text
    onSwiperTap: function(event){
        var swiperid= event.currentTarget.dataset.id;
        console.log('hi: '+swiperid);
        wx.navigateTo({
            url: '../post/post-detail/post-detail?id='+swiperid
        })
    }
```
## 添加缓存

```text

//设置缓存
wx.setStrogeSycn('key',{
    game:'hi',
    developer:'roit'
})
onCollectionTag: function (event) {
        //获取缓存
        console.log('开始获得缓存');
        var result = wx.getStrogeSync('key2');
        console.log(result);
    },
    onShareTag:function(event){
        //清除缓存
        console.log('开始删除缓存');
        wx.removeStorageSync('key');
        //清除所有缓存
        //缓存不能超过10M
        // wx.clearStorageSync();
    },
```
## 取消收藏和收藏
替换图片.
Jquery中.
获得DOM,动态的控制节点的src属性.

我们的目的是构造一个类似以下的格式的缓存来存储数据.
```
var postsCollected = {
     1:'true',
     2:'false',
     3:'true'
}
```
先定义收藏的规则:数据存在于缓存和不在缓存中的情况.
```
1.查询缓存.
2.缓存存在的情况.
3.缓存不存在的情况.
```
```
 //从本地缓存中同步获取指定 key 对应的内容。
    var postsCollected=wx.getStorageSync('posts_Collected');
    if (postsCollected) {
      //获得指定的缓存
      var postCollected = postsCollected[postId];
      //数据监听
      this.setData({
        //此时可以通知显示隐藏的状态.
        collected: postCollected
      });
    } else {
      //postsCollected值 = null
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_Collected', postsCollected)
    }
```
接下来就为我们的按钮设置一个单击事件,来切换2张图片的状态.也就是给得到postID的具体缓存.来切换true/false状态.
```
 onCollectionTag: function(event) {
    console.log('hello stroge')
    // 获取缓存
    var postsCollected = wx.getStorageSync('posts_Collected')
    // id只能从data里面取得.
    var postCollected = postsCollected[this.data.currentPostId];
    //收藏变成未收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    //更新缓存
    wx.setStorageSync('posts_Collected', postsCollected)
    //更新数据绑定,从而切换图片
    this.setData({
      collected: postCollected
    })
```
## 提示内容插件
```
//提示内容插件
    wx.showToast({
      title: postCollected?'收藏成功':'取消收藏成功',
      //延迟消失
      duration:1000,
      icon: 'success',
      //防止触摸穿透
      mask:true
    })
```
[API地址](https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html#wxshowactionsheetobject)

## 显示模态弹窗

先解决下面这个问题:
```
  this.setData({
      collected: postCollected
  })
```
我们知道这里指的this指的是引用它的对象,很显然是this指的是Page对象.

但是如果要从一函数中调用这个方法.就不能写this了.此时我们应该用一个变量来替换掉this,因为this的用法在于调用的上下文环境.

```
var that = this;
that.setData(){
  collected: postCollected;
}
```

下面是两种收藏的应用方式:
```
 showModal: function(postsCollected, postCollected) {
    //this的意义在于调用的上下文环境,
    var that = this;
    wx.showModal({
      title: '禀告主人',
      content: postCollected ? '您想要收藏这篇清新脱俗的文章哦!' :'您狠心要将这篇没有生气的文章去见鬼O(∩_∩)O~' ,
      showCancel: 'true',
      cancelText: '取消',
      cancelColor: '#888',
      confirmText: '确认',
      confirmColor: '#405f80',
      success: function(res) {
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
    var that= this;
    wx.showToast({
      title: '收藏文章',
      icon: 'success',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) { 
        //更新缓存
        wx.setStorageSync('posts_Collected', postsCollected)
        //更新数据绑定,从而切换图片
        that.setData({
          collected: postCollected
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
```

## 分享的设置
```
onShareTap:function(event){
    console.log('hi share')
    var itemList= [
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
      success:function(res){
        //用户是否点击了取消按钮
        //res.cancle;
        //数组元素的序号,从0开始.
        //res.tapIndex
        wx.showModal({
          title: '您'+itemList[res.tapIndex],
          content: '您是否确认取消 ' + res.cancel+' 现在无法分享,WeChat不考虑这个事情'
        })
      }
    })
  }
```
## 异步的缓存的使用
```
  //模拟异步缓存的请求
  getPostCollectedAsy:function(){
    var that =this;
    wx.getStorage({
      key:'posts_Collected',
      success:function(res){
        var postsCollected=res.data;
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
  getPostsCollectedSync: function(){
    var that = this ;
    // 获取缓存
    var postsCollected = wx.getStorageSync('posts_Collected')
    // id只能从data里面取得.
    var postCollected = postsCollected[that.data.currentPostId];
    //收藏变成未收藏
    postCollected = !postCollected;
    postsCollected[that.data.currentPostId] = postCollected;
    //调用我们封装的方法.
    // this.showModal(postsCollected, postCollected);
    that.showToast(postsCollected, postCollected);
  }
```
同步方法尽量要用同步,异步尽管一定条件下好用.但是存在着一层一层嵌套的事情.如果服务器响应时间过长,那么会存在着响应不成功的问题.

## 音乐播放器
```
 onMusicTap: function(event) {
    console.log('music playing...');
    //获取当前的postData
    var postData = postsData.post_list[this.data.currentPostId];
    //定义一个音乐状态的变量
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic){
      //暂停音乐
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic : false
      })
     
    }
    else{      
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
  }
```
点击替换图片
```
<image src="{{isPlayingMusic?post_key.music.coverImgUrl:post_key.headImgSrc}}" class="head-img"></image>
```

## 监听事件
```
 //监听音乐的播放和暂停
    // 监听音乐播放。
    var that = this;
    wx.onBackgroundAudioPlay(function(){
      that.setData({
        isPlayingMusic : true
      })
    })
    
    //监听音乐暂停。
    wx.onBackgroundAudioPause(function(){
      that.setData({
        isPlayingMusic : false
      })
    })
```
### 数据绑定的重要性

主要是通过小程序的框架来监听一个变量,最重要的是他可以复用.进而控制众多的事件.

小程序体现的是数据优先的思想.如果我们想要改变前端的一个标签的状态的话.我们只需即后台JS的一个变量:true/false.然后前端就会立即执行相应的状态.

Jquery要改变标签的状态,先是要获取DOM, 然后改变DOM的状态.或者是改变子元素,或许是改变图片.但是每个DOM的状态都需要改变.

### 修改Bug

Bug提示: 音乐进入另外一个页面,还在播放,但是页面显示音乐并没有播放.

这中间发生切换页面的情况.所以这个变量不能是在页面中添加.因为切换页面,就意味着初始化变量状态.此时就需要一个和页面无关的变量来保存状态.

可以添加缓存(Stroge).缓存和页面的生命周期无关的,但是把程序关闭了, 缓存不会被清除,所以变量还是会存在.所以添加缓存是不合适的.

我们可以考虑JS里面全局变量这个东西.

### 全局变量的添加
App.js
```
  //专门保存全局的变量
  globaldata: {
      //定义一个保存音乐播放的全局变量,那么可以在任何页面拿到这个变量
      g_isPlayingMusic:false,
  },
```

全局变量的引用方式
```
//获取全局变量中的所有数据
var app = getApp();

var globalData = app.globaldata;
```

![debug检测](https://upload-images.jianshu.io/upload_images/7505161-8ba214f3571204ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

app.js的一些函数
```
//这是应用程序的一些生命周期和方法
App({
  //专门保存全局的变量
  globaldata: {
      //定义一个保存音乐播放的全局变量,那么可以在任何页面拿到这个变量
      g_isPlayingMusic:false,
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    console.log('onLaunch')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log('onShow')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide,这个在工具栏有一个切后台的操作.就会触发
   */
  onHide: function() {
    console.log('onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('onError')
  }
})
```

## 控制音乐的播放状态全局变量
```
  //音乐播放状态的全局变量
    var musicPlayingData = app.globalData.g_isPlayingMusic;
    console.log('载入页面中 ' + musicPlayingData);
    //获取全局变量中的数据
    if (musicPlayingData) {
      //单个页面控制数据绑定
      this.setData({
        isPlayingMusic:true
      })
    }  
```
```
也就是说如果musicPlayingData,为true,就会将单个页面的音乐播放变量为true.

但是musicPlayingData一开始为false,所以就不会做任何改变.

所以我们需要在开启音乐播放事件和暂停音乐播放事件上加入这个全局变量.

经过debug测试,我们注意到这个全局变量并不能在事件中拿到.
所以我们只能提取到Page{}页面之前.供所有的事件调用,修改如下
```
```
var app = getApp();
//获取控制音乐播放的全局变量.
var musicPlayingData = app.globalData.g_isPlayingMusic;
```
但是存在着Bug,就是图片不能精确到位.所以我们需要解决这个Bug.

问题原因:

在切换页面的时候,会再次执行一遍OnLoad函数.加入你上一个页面的音乐开着的话,此时的全局变量musicPlayingData为true,也会导致isPlayingMusic为true.

也就是说musicPlayingData的指代存在着问题.所以我们需要定义一个能确定哪一个音乐被播放的变量:g_currentGlobalMusic

当然我们是通过PostId了.

先说一个Bug,类似于java里面的空指针异常.

**问题描述"Setting data field "collected" to undefined is invalid."**

```text
//从本地缓存中同步获取指定 key 对应的内容。
        var postsCollected = wx.getStorageSync('posts_Collected');
        if (postsCollected) {
            //获得指定的缓存
            var postCollected = postsCollected[postId];
           if (postCollected){
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
```

上面的这种问题,即使对postsCollected检查了,还需要对它的儿子postCollected检查.

在来解决我们的问题:
1.先引入我们定义在app.js中的变量.
```
var curentPlayingMusic = app.globalData.g_currentGlobalMusic;
```
2.然后对这个变量进行操作

我们的目的是让播放音乐精确到是哪一个在播放,那就肯定和PostId有关,之前我已经写入到了Data里面,如下:

```text
  this.setData({
            post_key: postData,
            currentPostId: postId
        })
```
所以我们只需要在外部加入这个东西就可以了.也就是播放音乐的时候,此时的音乐播放的Id是data中的PostId,暂停音乐的时候设置为null就可以了.

因为调用的时候,不再onLoad事件里面,所以我们需要改变this的上下文环境,也就是声明 var that = this; 调用that.data.currentPostId,就能获得键是currentPostId的Value值了.

调用方式如下:
```text
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
```
最后还需要加一个条件判断.
```text
 if (musicPlayingMusic && curentPlayingMusic === postId) {
            //单个页面控制数据绑定
            this.setData({
                isPlayingMusic: true,
            })
}
```

## 模拟器缓存的过程

真机运行中并没有清除缓存的功能.如果没有清除缓存,当你在缓存的过程中添加一些数据,来替代旧的缓存,可能会出现问题.

所以就需要我们增加一个wx.clearStrogeSync(同步清理本地数据缓存)的事件.当然是给用户添加一个按钮啦.

还有就是尽量使用绝对路径.相对路径就是一旦页面换了位置,图片肯定是显示不出来来的.

## 事件冒泡的发生

![](https://upload-images.jianshu.io/upload_images/7505161-b1f7b9b0841a9d26.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这是两个单击事件.可以发现我们使用了bindtap的时候,轮播图点击可以进入详情页面.说明bind关键字是防止冒泡的,但是catch是不能防止冒泡的.

![](https://upload-images.jianshu.io/upload_images/7505161-60ce6cb091225115.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## target和CurrentTarget的区别
```
target指的是当前点击的组件,currentTarget指的是当前事件点击的组件

target这里指image,而currentTarget指的是swiper.

var swiperid= event.currentTarget.dataset.id;

console.log('hi '+swiperid);
```

## 待提升的地方

将查看数改为计数的功能.



