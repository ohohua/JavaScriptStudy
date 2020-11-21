window.onload = function () {
  var logo = document.getElementById("header-logo");
  var img1 = logo.children[0];
  img1.onmouseover = function () {
    logo.children[0].src = "img/logo2.png";
  };
  img1.onmouseleave = function(){
    logo.children[0].src = "img/logo1.png"
  }
  var headerSearch = document.getElementById("header-search");
  var img2 = headerSearch.children[0].children[1];
  img2.onmouseover = function(){
    img2.src = "img/放大镜2.png";
  }
  img2.onmouseleave = function(){
    img2.src = "img/放大镜.png";
  }
  img2.onclick = function(){
    alert("点击查询");
  }
  var inputStr = ['王一博同款手机','小米10','Redmi K30 Pro','卡丁车' ,'全部商品','耳机','空调','净水器'];
  var i = 0;
  setInterval(function(){
    i++;
    i %= 8;
     img2.parentNode.children[0].placeholder = inputStr[i];
  },4000)
  //header-drop下拉框
  var headerNav = document.getElementById("header-nav");
  var headerDrop = document.getElementById("header-drop");
  var ul = headerNav.children[0];
  let oldValue = 0;
  ul.onmouseover = function(){
    clearInterval(timer1);
    var timer1 = setInterval(function(){
      oldValue += 5;
      if(oldValue >= 200){
        clearInterval(timer1);
        headerDrop.children[0].style.display = 'block';
 
      }else if(oldValue < 200){
        headerDrop.style.height = oldValue + 'px';
      }    
    },10);
  }
  headerNav.onmouseleave = function(){
    headerDrop.children[0].style.display = 'none';
     var timer2 = setInterval(function(){
       oldValue -= 5;
       if(oldValue == -5){
         oldValue = 0;
         clearInterval(timer2);
       }else{
        headerDrop.style.height = oldValue + 'px';
       }
     },10)
    
  }
  //轮播图
  var uList = document.getElementById("uList");
  var img = document.getElementsByTagName("img");
  uList.style.width = img.length * 1226 + "px";
  var nav = document.getElementById("nav2");
  nav.style.left = (box1.offsetWidth - nav.offsetWidth) / 2 + "px";
                                                 //！！！！这有问题！！！！！         
  var allA = uList.getElementsByTagName("a");    // ！！！！这有问题！！！！！

  var index = 0; //全局变量
  allA[index].style.backgroundColor = "cornsilk";
  //点击切换部分
  for (var i = 0; i < allA.length; i++) {
    allA[i].num = i; //为每一个按钮添加一个标记
    allA[i].onclick = function () {
      clearInterval(timer);
      index = this.num;
      setA();
      //开始切换图片
      // uList.style.left = this.num*(-520)+'px';
      move(uList, "left", -1226 * this.num, 30, function () {
        autoChange();  //因为前面关了自动切换的定时器，所以在会调函数里面重新调用
      });
    };
  }
      //调用自动切换函数
  autoChange();
  function setA() {
    if(index >= img.length-1){  //img.length的值为7
      index = 0;
      uList.style.left = 0; 
      alert('进入setA');   //使轮播图循环起来，将6张图片当作一个整体!!
    }
    
    for (var i = 0; i < allA.length; i++) {
      //将所有的颜色切换成默认颜色
      allA[i].style.backgroundColor = "";  //赋值空字符串意义为将所有原本的颜色换成默认的颜色
    }
    allA[index].style.backgroundColor = "cornsilk"; //使被点击的a颜色为cornsilk
  }
  var timer;
  function autoChange() {
    timer = setInterval(() => {
      index++;
      index %= img.length;
      move(uList, "left", index * -1226, 30, function () {
        console.log(index+ ' ' +img.length);
        setA();
      });
    }, 5000);
  }
};