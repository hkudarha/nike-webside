// var dulha="lab";
// var dulhan="laby";
// console.log(dulha + "weds" + dulhan)

var t1 = gsap.timeline();
gsap.set(".a" , {opacity:0 , y: 10})
gsap.set("#right img" , {opacity:0 , y: 10 , scale:.6})

t1
    .from("#left",{
        width:0,
        ease: Expo.easeInOut,
        duration:1.5
    }) 
    .from("#right",{
        width:0,
        ease: Expo.easeInOut,
        duration:1.5
    })
    .to(".a",{
        stagger:.2,
        delay:-2,
        opacity: 1,
        y: 0,
        ease: Expo.easeInOut,
        duration:2
    })
    .to("#right img",{
        opacity: 1,
        y: 0,
        delay:-1,
        scale:1, 
        ease: Expo.easeInOut,
        duration:2
    })
    



