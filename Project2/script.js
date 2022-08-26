// barba.init()

function mainAnimation() {
    gsap.from("img", {
        duartion: 1,
        y: -100,
        x: -30,
        opacity: 0,
        rotate: "-5"
    })
    gsap.from("#div3 h4", {
        y: "-300px",
        duration: 0.4,
        opacity: 0
    })
}
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