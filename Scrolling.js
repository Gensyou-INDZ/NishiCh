window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "5px";
} else {
    document.getElementById("navbar").style.padding = "90px 10px";
    document.getElementById("logo").style.fontSize = "35px";    }    }