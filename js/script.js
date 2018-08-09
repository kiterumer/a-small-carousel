// 先封装一个通过ID获取元素的函数
function byId(id){
	// 判断传入的ID是否是字符串，如果是字符串，则返回通过dom操作获取的元素
	return typeof(id)==="string"?document.getElementById(id):id;
}
    // 先通过封装函数获取到banner大容器，然后通过tagname获取到三个banner-slide
var timer=null;
    index=0;
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    size=pics.length,
    prev=byId("prev"),
    next=byId("next"),

// function changeImg(){
// 	for(var i=0,len=dots.length;i<len;i++){
// 		// dots[i].className="";
// 		pics[i].style.display="none";
// 	}
// 	// dots.[index].className="active";
// 	pics[index].style.display="block";
// }



function startAutoPlay(){
   timer = setInterval(function(){
       index++;
       if(index >= size){
          index = 0;
       }
       changeImg();
   },3000)
}

function stopAutoPlay(){
	if(timer){
       clearInterval(timer);
	}
}

function changeImg(){
   for(var i=0,len=dots.length;i<len;i++){
       dots[i].className = "";
       pics[i].style.display = "none";
   }
   dots[index].className = "active";
   pics[index].style.display = "block";
}

function slideImg(){
	var main=byId("main");

	main.onmouseout=function(){
		startAutoPlay();
	}
	main.onmouseout();
}

slideImg();

