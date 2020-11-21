      /*定义一个函数，用来修改样式
      参数： 
          obj： 需要添加属性的对象
          cn：需要添加的样式
    */
   function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
      obj.className += " " + cn;
    }
  }
  /*定义一个函数，用来判断需要添加的属性是否已经有了
  参数： 
      obj： 需要添加属性的对象
      cn：需要添加的样式
*/
  function hasClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
  }
  /*
  定义一个函数，用来删除一个元素中指定的class属性
  参数：
    obj：需要删除属性的对象
    cn：需要删除的样式名
*/
  function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
  }
  /*
创建一个函数，用来切换一个类，如果元素有该类则删除，如果没有则添加
参数：obj:需要切换属性的对象
     cn:需要切换的属性名
*/
  function toggleClass(obj, cn) {
    if(hasClass(obj,cn)){
      removeClass(obj,cn);
    }else{
      //没有则添加
      addClass(obj,cn);
    }
  }