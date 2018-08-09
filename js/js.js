function byId(id){
	return typeof(id)==="string"?document.getElementById(id):id;
}

var index=0,  
    timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId("prev"),
    next=byId("next"),
    menu=byId("menu-content"),
    menuItems=menu.getElementsByClassName("menu-item"),
    subMenu=byId("sub-menu"),
    innerBox=subMenu.getElementsByClassName("inner-box"),
    len=pics.length;

function slideImg(){
   var main=byId("main");
   main.onmouseover=function(){
     // 鼠标停留在图片上清除定时器
     if(timer) clearInterval(timer);
   }
  // 鼠标滑出图片，图片自动轮播
   main.onmouseout=function(){
   	timer=setInterval(function(){
     index++;
     if(index>=len){
     	index=0;
     }
     changeImg();
   	},3000);
   }
// 自动在main上触发鼠标离开的事件
   main.onmouseout();
   
   //点击圆点切换图片   遍历所有点击，且绑定点击事件
   for(var d=0;d<len;d++){
    // 给所有圆点添加一个id，值为d，作为当前span的索引
   	dots[d].id=d;
   	dots[d].onclick=function(){
   		// 改变index为当前span的id值
      index=this.id;
      // this.className="active";
      changeImg(); 
   	}
   }
// 点击右按钮，切换下一张图片，根据索引
  next.onclick=function(){
   index++;
   if(index>=len){
   	index=0;
   }
   changeImg();
  }
// 点击左按钮，切换上一张图片，根据索引
  prev.onclick=function(){
  	index--;
  	if(index<0){
  		index=len-1;
  	}
  	changeImg();
  }

  // 导航菜单
  for(var m=0;m<menuItems.length;m++){
  	menuItems[m].setAttribute("data-index",m);
  	menuItems[m].onmouseover=function(){
     var idx=this.getAttribute("data-index");
     subMenu.className="sub-menu";
     for(var j=0;j<innerBox.length;j++){
       innerBox[j].style.display="none";
       menuItems[j].style.background="none";
     }
     
     menuItems[idx].style.background="rgba(0,0,0,0.1)";
     innerBox[idx].style.display='block';
  	}
  }

  menu.onmouseout=function(){
  	subMenu.className="sub-menu hide";
  	for(var n=0;n<innerBox.length;n++){
	  		menuItems[n].style.background="none";
  }
}

  subMenu.onmouseover=function(){
  	this.className="sub-menu";
  }
  subMenu.onmouseout=function(){
  	this.className="sub-menu hide";  
  	}

}

// 图片切换函数，根据索引  会被多次调用
function changeImg(){
  // console.log(index)
  for(var i=0;i<len;i++){
  	// 遍历banner下所有的div及dots下所有的span，将div隐藏，将span清除类
  	pics[i].style.display="none";
  	dots[i].className="";
  }
  // 根据index索引找到当前div和当前span，将其显示出来和设为当前
   pics[index].style.display='block';
   dots[index].className="active";
}


slideImg();
