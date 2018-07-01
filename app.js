//这是应用程序的一些生命周期和方法
App({
  //专门保存全局的变量
  globalData: {
      //定义一个保存音乐播放的全局变量,那么可以在任何页面拿到这个变量
      g_isPlayingMusic:false,
      //定义确认哪一个音乐被播放的变量
      g_currentGlobalMusic:null
  }
})