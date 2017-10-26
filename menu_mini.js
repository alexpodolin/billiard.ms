'use strict';

function showMenuBtn() {
    document.getElementsByClassName("c_left")[0].style.display = "block";    
    document.getElementsByClassName("catalomenuList")[0].style.display = "none";    
    document.getElementsByClassName("left_menu_site")[1].style.margin = "7% 1% 0 1%";
    
    var x = document.getElementsByClassName("left_menu_site")[1].querySelectorAll("li");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = "100%";
    }

    var x = document.getElementsByClassName("left_menu_site")[2].querySelectorAll("li");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.width = "100%";
    }

    document.getElementsByClassName("blockFor_socialTm")[0].style.width = "100%";
    document.getElementsByClassName("blockFor_socialTm")[0].style.display = "block";
    document.getElementsByClassName("blockFor_socialTm")[0].style.clear = "both";
}

/*function onResize() {
    if (window.innerWidth <= 479) {
        // console.log('window.innerWidth < 479');
        // document.getElementsByClassName("c_links")[0].style.cssFloat = "left";
        var x = document.getElementsByClassName("wp_site")[0].querySelectorAll(".c_links");
        var i;
        for (i = 0; i < x.length; i++) {
            x[i].style.cssFloat = "left";
        }
    }
}

onResize() */