function mainAnimation() {
    var tl = gsap.timeline()
    tl.from("h1, a, img", {
        opacity: 0,
        y: 40,
        // delay:0.5,
        stagger: {
            amount:1
        }
    })
}


barba.init({
    sync: true,
    transitions:[
        {
            enter(){
                mainAnimation();
            },
        }
    ]
})