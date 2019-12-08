!function(){if(window.Touch){swipe_det={},swipe_det.sX=0,swipe_det.sY=0,swipe_det.eX=0,swipe_det.eY=0
var e=100,s=30,t=50,i=60,d=""
ele=document.documentElement,ele.addEventListener("touchstart",function(e){var s=e.touches[0]
swipe_det.sX=s.screenX,swipe_det.sY=s.screenY},{passive:!1}),ele.addEventListener("touchmove",function(e){
var s=e.touches[0]
swipe_det.eX=s.screenX,swipe_det.eY=s.screenY},{passive:!1}),ele.addEventListener("touchend",function(p){if((swipe_det.eX-e>swipe_det.sX||swipe_det.eX+e<swipe_det.sX)&&swipe_det.eY<swipe_det.sY+i&&swipe_det.sY>swipe_det.eY-i&&swipe_det.eX>0?d=swipe_det.eX>swipe_det.sX?"r":"l":(swipe_det.eY-t>swipe_det.sY||swipe_det.eY+t<swipe_det.sY)&&swipe_det.eX<swipe_det.sX+s&&swipe_det.sX>swipe_det.eX-s&&swipe_det.eY>0&&(d=swipe_det.eY>swipe_det.sY?"d":"u"),""!=d){var w="r"==d?"_3p-left":"l"==d?"_3p-right":"xxx",_=document.getElementById(w)
_&&_.click()}d="",swipe_det.sX=0,swipe_det.sY=0,swipe_det.eX=0,swipe_det.eY=0},{passive:!1})}}()
// var min_x = 100;  //min x swipe for horizontal swipe
// var max_x = 30;  //max x difference for vertical swipe
// var min_y = 50;  //min y swipe for vertical swipe
// var max_y = 60;  //max y difference for horizontal swipe
