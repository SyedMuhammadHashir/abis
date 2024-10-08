const green = document.querySelector(".btn")
const page1 = ()=>{
    var tl = gsap.timeline();

    tl.from("nav h1, .frames h4, nav .btn",{
        y:-30,
        opacity: 0,
        duration: 0.5,
        stagger:0.15
    });

    // tl.from(".frames h4",{
    //     y:-30,
    //     opacity: 0,
    //     duration: 0.5,
    //     stagger:0.1
    
    // });
    
    tl.from(".center-part-1 h2",{
        x:-300,
        opacity: 0,
        duration:0.4
    })
    
    tl.from(".center-part-1 p",{
        x:-300,
        opacity: 0,
        duration:0.4
    })

    tl.from(".center-part-1 button",{
        opacity: 0,
        duration:0.3
    })
    
    tl.from(".center-part-2 img",{
        x:30,
        opacity: 0,
        duration:0.5
    },"-=1")
    
    gsap.from(".sec-1-bottom",{
        y:200,
        opacity:0,
        duration:0.5,
        scrollTrigger:{
            trigger: "sec-1-bottom",
            scroller:"body",
            scrub:1,
            start: "top 70%",
            end: "bottom -10%"
            
        }
        
    })
}

page1();

const page2 = ()=>{
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".sec-2",
            scroller:"body",
            start: "top 70%",
            end: "bottom 50%",
            scrub:1,
        }
    });
    
    
    tl.from(".services h3, .services p",{
        opacity:0,
        x:-200,
        duration:0.7,
    })
    
    tl.from(".elm.light.line1",{
        opacity:0,
        x:-200,
        duration:0.6,
    
    },"a")
    
    tl.from(".elm.dark.line1",{
        opacity:0,
        x:200,
        duration:0.6,
    
    },"a")
    
    tl.from(".elm.dark.line2",{
        opacity:0,
        x:-200,
        duration:0.6,
    
    },"b")
    
    tl.from(".elm.light.line2",{
        opacity:0,
        x:200,
        duration:0.6,
    
    },"b")
}

page2()


const greenBtn = ()=>{
    
green.addEventListener("mouseenter",()=>{
    gsap.to(".green",{
        left: 0,
        duration: 1,
        ease: "expo"
    })
})

green.addEventListener("mouseleave",()=>{
 gsap.to(".green",{
     left: "-100%",
     duration: 1,
     ease: "expo"
 })
})

green.addEventListener("mouseenter",()=>{
 gsap.to(green,{
     scale:1.1,
     duration: 0.4,
 })
})

green.addEventListener("mouseleave",()=>{
 gsap.to(green,{
     scale:1,
     duration: 0.4,
 })
})
}
greenBtn()

const svgCurvepath = function(){

    let actualPath = "M 10 80 Q 440 80 890 80"

const string = document.querySelector(".string svg");

string.addEventListener("mousemove",(dets)=>{
  let path = `M 10 80 Q ${dets.x} ${dets.y} 890 80`

  gsap.to("svg path",{
    attr:{d:path},
    duration:0.3,
    ease:"power3.out"
  })
});

string.addEventListener("mouseleave",(dets)=>{
gsap.to("svg path",{
  attr:{d:actualPath},
  duration:1.8,
  ease:"elastic.out(1.3,0.1)"

})
});

};

svgCurvepath()

gsap.from(".sec-3-box",{
    y:200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger: ".sec-3-box",
        scroller:"body",
        scrub:1,
        end:"top 60%"
      
    }
    
})


const marquee = document.querySelector(".marquee");

window.addEventListener("wheel",(dets)=>{
    console.log(dets.deltaY)

    if(dets.deltaY<0){
        console.log("wheelup")
        gsap.to(".marquee",{
            transform:"translateX(-200%)",
            duration:5,
            ease:"none",
            repeat:-1
        })

        gsap.to(".marquee img",{
            rotate:"180deg"

        });


    }else{
        console.log("wheeldown")
        gsap.to(".marquee",{
            transform:"translateX(0%)",
            duration:5,
            ease:"none",
            repeat:-1
        })

        gsap.to(".marquee img",{
            rotate:"0deg"

        });

    }
});


const frames = document.querySelectorAll(".frame");



const navBar = function(){
     frames.forEach(frame => {
        frame.addEventListener("mouseenter",(dets)=>{
            gsap.to(frame.children,{
                color: "#111",
                duration: .4,
                y: "-1.45vw"
            })
        })
        
        frame.addEventListener("mouseleave",(dets)=>{
            gsap.to(frame.children,{
                color: "#111",
                duration: .4,
                y: "0"
            })
        })
        
        frame.addEventListener("mouseenter",(dets)=>{
            gsap.to(frame.children,{
                color: "#111",
                duration: .4,
                y: "-1.45vw"
            })
        })
        
        frame.addEventListener("mouseleave",(dets)=>{
            gsap.to(frame.children,{
                color: "#111",
                duration: .4,
                y: "0"
            })
        }) 
     });
};

navBar()