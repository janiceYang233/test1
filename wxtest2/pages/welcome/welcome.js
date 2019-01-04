Page({
  OnTap: function() {
    //跳到子级页面，导航上有返回，跳转后原页面hide隐藏,会执行onhide函数
    // wx.navigateTo({
    //   url: '../post/post',
    // })

    //跳到同级页面，导航上无返回，会执行onunload函数
    wx.redirectTo({
      url: '../post/post',
    })
  },

  onUnload: function() {
    console.log('unload')
  },

  onHide: function() {
    console.log('hide')
  }
})