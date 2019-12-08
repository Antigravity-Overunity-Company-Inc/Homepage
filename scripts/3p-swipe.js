(function() {
    if(window.Touch){
        swipe_det = new Object();
        swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
        var min_x = 100;  //min x swipe for horizontal swipe
        var max_x = 30;  //max x difference for vertical swipe
        var min_y = 50;  //min y swipe for vertical swipe
        var max_y = 60;  //max y difference for horizontal swipe
        var direc = "";
        ele = document.documentElement;
        ele.addEventListener('touchstart',function(e){
          var t = e.touches[0];
          swipe_det.sX = t.screenX;
          swipe_det.sY = t.screenY;
        },{passive:false});
        ele.addEventListener('touchmove',function(e){
          // e.preventDefault();
          var t = e.touches[0];
          swipe_det.eX = t.screenX;
          swipe_det.eY = t.screenY;
        },{passive:false});
        ele.addEventListener('touchend',function(e){
          //horizontal detection
          if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
            if(swipe_det.eX > swipe_det.sX) direc = "r";
            else direc = "l";
          }
          //vertical detection
          else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
            if(swipe_det.eY > swipe_det.sY) direc = "d";
            else direc = "u";
          }

          if (direc != "") {
              var id = (direc=="r")?"_3p-left" : (direc=="l")?"_3p-right":"xxx";
              var div = document.getElementById(id);
              if(div)div.click();
          }
          direc = "";
          swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
      },{passive:false});
    }
}());