gsap.registerPlugin(ScrollTrigger);
function scrollerwork(){

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  getDirection: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
});
locoScroll.on("scroll", ScrollTrigger.update);

locoScroll.on("scroll", function(dets){
  if(dets.direction === "up"){
    document.querySelector("#nav").style.top = "0%";
  }
  else if(dets.direction === "down"){
    document.querySelector("#nav").style.top = "-100%";
  }
});


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
function imagechange(){
  let allSlides = document.querySelectorAll(".ml");
  skides = [...allSlides];

var isHovered = null;

skides.forEach(function (elem) {
  elem.addEventListener("mouseover", function (dets) {
    isHovered = "#opener"+dets.target.dataset.index;
    document.querySelector(isHovered).style.width = "100%";
  });

  elem.addEventListener("mouseleave", function (dets) {
    isHovered = "#opener" + dets.target.dataset.index;
    document.querySelector(isHovered).style.width = "0%";


  });
});
}
function gsapcode(){
  document.querySelectorAll(".anime")
        .forEach(function(anime){
            anime.innerHTML = `<div class="textwrapper">${anime.innerHTML}</div>`;
        })
        document.querySelectorAll(".textwrapper")
        .forEach(txt => {
            let clutter = "";
            txt.textContent.split(" ").forEach(wrd => {
                clutter += `<span>${wrd}</span>`;
            })
            txt.innerHTML = clutter;
        })


        gsap.set(".anime span", {y: "200%", opacity:0});

        document.querySelectorAll(".anime")
        .forEach(function(elem){
            gsap.from(elem, {
                scrollTrigger: {
                    scroller: "#main",
                    trigger: elem,
                    start: "top 60%"
                },
                onStart: function(){
                    gsap.to(elem.children[0].children, {
                        y: 0,
                        ease: Power4,
                        duration: .6,
                        stagger: .05,
                        opacity: 1
                    })
                }
            })
        })


        gsap.from("#line",{
          width: "0%",
          duration: 1
        });

        gsap.to("#work .workslide",{
          scrollTrigger:{
            trigger:"#work .workdesc",
            scroller:"#main",
            scrub:0.01,
            pin:true
          },
          ease: Power4,
          top:"-10vw",
          stagger:0.05
        });
        
        gsap.to(".allcircle",{
        scrollTrigger:{
            trigger:".alltext",
            scroller:"#main",
            pin: true,
            scrub: 2
          },
        top:"75%",
        ease: Expo,
        backgroundColor:"yellow",
        color:"black",
        });

      gsap.to("#allwork",{
        scrollTrigger:{
            trigger:".allcircle",
            scroller:"#main",
            start:"top 30%",
            scrub: 1
          },
        color:"white",
        backgroundColor:"black"
        });

        gsap.from("#line2",{
          scrollTrigger:{
            trigger:"#ordesc",
            scroller:"#main",
            start:"top 80%",
            scrub:1
          },
          width: "0%",
        });

        gsap.from("#box",{
          scrollTrigger:{
            trigger:"#box",
            scroller:"#main",
            start:"top 80%",
            scrub:1
          },
          opacity: 0,
        });

        gsap.from(".multisection",{
          scrollTrigger:{
            trigger:"#section",
            scroller:"#main",
          },
          width: "0%",
          duration: 1
        });

        gsap.from(".partners",{
          scrollTrigger:{
            trigger:"#partnerdrag",
            scroller:"#main",
          },
          width: "0%",
          duration: 1
        });

}
function dragwithcursor(){
  const cursor = document.querySelector("#dragwithimg");

    document.addEventListener("mousemove",function(e){
        let x = e.pageX;
        let y = e.pageY;

        cursor.style.top = y  + 'px';
        cursor.style.left = x + 'px';

    });
}
scrollerwork();
gsapcode();
dragwithcursor();
imagechange();