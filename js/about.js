var video          = document.querySelector("#video iframe"),
    play           = document.getElementById("play"),
    $close         = document.getElementById("close"),
    sub            = document.getElementById("sub"),
    list           = document.querySelector("#sub .sub-list");
    
play.onclick=()=>{
video.setAttribute("src","https://www.youtube.com/embed/rAj38E7vrS8")
video.parentElement.style.opacity = 1;
video.parentElement.style.zIndex = 26;
}
$close.onclick=()=>{
video.setAttribute("src","");
video.parentElement.style.opacity = 0;
video.parentElement.style.zIndex = 0;
}

sub.onclick=()=>{
    list.classList.toggle("sub");
}