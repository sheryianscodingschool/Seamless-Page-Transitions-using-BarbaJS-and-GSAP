// barba.init()

function mainAnimation() {
    gsap.from("#div4 img", {
        duration: 1,
        y: -150,
        x:-150,
        rotate:-10,
        opacity: 0,
    })
    gsap.from("#div2 h3,#div2 h4", {
        y:30,
        opacity:0,
        duration:1,
        rotateX:-90
    })
    gsap.from("#div3 h4", {
        y: "-500px",
        duration: 1,
        opacity: 0
    })
    gsap.from("#div3 h3", {
        // y: "-500px",
        duration: 1,
        ease: Power4.easeIn,
        opacity: 0
    })
    gsap.to("#part3 span",{
        delay:-0.7,
        opacity:1,
        stagger:{
            each:0.2
        }
    })
    gsap.to("#div1 span",{
        delay:-0.8,
        opacity:1,       
        stagger:{
            each:0.2
        }
    })

}
mainAnimation()
barba.init({
    sync: true,
    transitions: [
        {
            enter() {
                mainAnimation()
            }
        }
    ]
})