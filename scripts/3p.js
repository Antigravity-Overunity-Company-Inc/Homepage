var _3p = (function(){
    var _x,_y,_scroll_y,_s;
    var _left = document.getElementById("_3p-left-body");
    var _center = document.getElementById("_3p-center-body");
    var _right = document.getElementById("_3p-right-body");
    var _body = document.getElementsByTagName('body')[0];
    var _body_div = document.getElementById("body");
    var _right_button = document.getElementById("_3p-right");
    var _left_button = document.getElementById("_3p-left");
    var _footer = document.getElementById("_3p-footer");
    var _header = document.getElementById("_3p-header");
    function _find_div(position){
        return (position === "left")?_left : (position==="center")?_center:(position==="right")?_right: false;
    }
    function _fill_div(position,content){
        var d;
        if(d = _find_div(position)) d.innerHTML = content;
    }
    function _append_to_div(position,element){
        var d;
        if(d = _find_div(position)) d.appendChild(element);
    }
    function _place_header(){
        if(_header.innerHTML !== ""){
            _header.style.display = "block";
            _header.style.width = (_x - 10) + "px";
        }else{
            _header.style.display = "none";
        }
    }
    function _place_footer(){
        if(_footer.innerHTML !== ""){
            _footer.style.display = "none";
            _scroll_y = _body.scrollHeight;
            _footer.style.top = _scroll_y - 0 + "";
            _footer.style.display = "block";
            _scroll_y = _body.scrollHeight;
        }else{
            _footer.style.display = "none";
        }
    }
    function _place_buttons(){
        _right_button.style.display = ((_right.style.display === "none" && _right.innerHTML !== "") ||
                                        (_center.style.display === "none" && _left.style.display === "block"))? "block" : "none";
        _left_button.style.display = ((_left.style.display === "none" && _left.innerHTML !== "") || (_center.style.display === "none" && _right.style.display === "block"))? "block" : "none";
    }
    function _set_left_margin(position){
        var d = _find_div(position);
        d.style.marginLeft = Math.floor((_x - _s)/2) - 1;
        if(d != _left) _left.style.marginLeft = 0;
        if(d != _right) _right.style.marginLeft = 0;
        if(d != _center) _center.style.marginLeft = 0;
    }
    function _set_even_margins(){
        var count = _s/320;
        var margin = Math.floor((Math.floor((_x - _s)/2) - 1)/count)
        _left.style.marginLeft = (_left.style.display === "block")? margin : 0;
        _center.style.marginLeft = (_center.style.display === "block")? margin : 0;
        _right.style.marginLeft = (_right.style.display === "block")? margin : 0;
    }
    function _adjust(){
        var position;
        _x = _body.clientWidth;
        _y = _body.clientHeight;
        _scroll_y = _body.scrollHeight;
        _place_header();
        if(_x <= 639){
            _s = 320;
            if(_right.style.display =="block" && _right.innerHTML !== ""){
                position = "right";
                _left.style.display = "none";
                _center.style.display = "none";
            }else if(_left.style.display =="block" && _left.innerHTML !== "" && _center.style.display === "none"){
                position = "left";
                _right.style.display = "none";
                _center.style.display = "none";
            }else{
                position = "center";
                _right.style.display = "none";
                _left.style.display = "none";
                _center.style.display = "block";
            }
        }else if(_x <= 959 && _x > 639){
            _s = 640;
            _center.style.display = "block";
            if(_right.style.display === "block" && _right.innerHTML !== ""){
                position = "center";
                _left.style.display = "none";
            }else if(_left.style.display === "block" && _left.innerHTML !== ""){
                position = "left";
                _right.style.display = "none";
            }else if(_right.innerHTML !== ""){
                position = "center";
                _right.style.display = "block";
                _left.style.display = "none";
            }else if(_left.innerHTML !== ""){
                position = "left";
                _left.style.display = "block";
                _right.style.dispaly = "none";
            }else if(_left.innerHTML === "" && _right.innerHTML === ""){
                _s -= 320;
                position = "center";
                _left.style.display = "none";
                _right.style.display = "none";
            }else{
                _left.style.display = (_left.innerHTML == "")? "none" : "block";
                _right.style.display = (_right.innerHTML == "")? "none" : "block";
            }
        }else if(_x > 959){
            _s = 960;
            if(_right.innerHTML != ""){
                _right.style.display = "block";
            }else{
                _s -= 320;
                _right.style.display = "none";
            }
            if(_left.innerHTML != ""){
                position = "left";
                _left.style.display = "block";
            }else{
                _s -= 320;
                position = "center";
                _left.style.display = "none";
            }
                _center.style.display = "block";
        }
        _place_buttons();
        // _set_left_margin(position);
        _set_even_margins();
        _place_footer();
    }
    function _scroll_right(){
        _place_header();
        var position;
        if((_right.innerHTML !== "" && _right.style.display == "none") || (_center.style.display == "none" && _left.style.display == "block")){
            if(_left.style.display === "block" && _center.style.display === "none"){
                position = "center";
                _center.style.display = "block";
                _left.style.display = "none"
            }else if(_left.style.display === "none" && _center.style.display === "block"){
                position = "right";
                _center.style.display = "none";
                _right.style.display = "block";
            }else if(_left.style.display === "block" && _center.style.display === "block"){
                position = "center";;
                _left.style.display = "none";
                _right.style.display = "block";
            }
            // _set_left_margin(position);
            _set_even_margins();
        }
        _place_buttons();
    }
    function _scroll_left(){
        _place_header();
        var position;
        if((_left.innerHTML !== "" && _left.style.display === "none") || (_center.style.display == "none" && _right.style.display == "block")){
            if(_right.style.display === "block" && _center.style.display === "none"){
                position = "center";
                _center.style.display = "block";
                _right.style.display = "none"
            }else if(_right.style.display === "none" && _center.style.display === "block"){
                position = "left";
                _center.style.display = "none";
                _left.style.display = "block";
            }else if(_right.style.display === "block" && _center.style.display === "block"){
                position = "left";
                _right.style.display = "none";
                _left.style.display = "block";
            }
            _set_even_margins();
            // _set_left_margin(position);
        }
        _place_buttons();
    }
    function _view_panel(panel){
        switch(panel){
            case "center":
                if(_center.style.display === "none"){
                    var button = (_right_button.display === "block")? _right_button : _left_button;
                    while(_center.style.display === "none"){
                        button.click();
                    }
                }
            break;
            case "left":
                if(_left.style.display === "none" && _left.innerHTML !== ""){
                    while(_left.style.display === "none"){
                        _left_button.click();
                    }
                }
            break;
            case "right":
                if(_right.style.display === "none" && _right.innerHTML !== ""){
                    while(_right.style.display === "none"){
                        _right_button.click();
                    }
                }
            break;
        }
    }
    _right_button.onclick = _scroll_right;
    _left_button.onclick = _scroll_left;
    _body.onscroll = function(){
        if(_scroll_y < _body.clientHeight){
            _place_footer();
        }
    }
    return {
        adjust: _adjust,
        scroll_right: _scroll_right,
        scroll_left: _scroll_left,
        fill: _fill_div,
        append:_append_to_div,
        select_panel: _view_panel
    }
}());
window.onresize = _3p.adjust;
window.onload = _3p.adjust;
