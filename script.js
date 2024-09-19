var tl = gsap.timeline();

function loading(){
    tl.to("#yellow1",{
        top: "-100%",
        duration: "0.5",
        delay: "0.5",
        ease: "power4.out",
    })
    tl.to("#video",{
        top: "-100%",
        duration: "1",
        ease: "power4.out",
    })
    tl.to("#loader",{
        top: "-100%",
        duration: "0.2",
        ease: "power4.out",
    },"anime")
    tl.to("#page1 h1",{
        color:"black",
        duration:"0.5"
    },"anime")
    // tl.to("black",{
    //     display: "none"
    // })
    tl.to("#loader",{
        opacity: "0"
    })

}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

var elem = document.querySelectorAll("#elem")
var page2 = document.querySelector("#page2")
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgimg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})` ;
    })
})

var btop = document.querySelector("#back-to-top p")
btop.addEventListener("click",() =>{
    scroll.scrollTo(0)
})
var btop2 = document.querySelector("#back-to-top i")
btop2.addEventListener("click",() =>{
    scroll.scrollTo(0)
})