
function pageTransition() {

    var tl = gsap.timeline();

    tl.to("#page-transition", {
        delay: 0.4,
        duration: 0.5,
        height: "100%",
    })
        .to("#page-transition h1", {
            opacity: 1,
            delay: 0.1
        })
        .to("#page-transition h1", {
            opacity: 0,
            delay: 0.1
        })
        .to("#page-transition", {
            delay: 0.1,
            height: "0",
            duration: 0.5
        })
}

function mainAnimation() {
    var tl = gsap.timeline()
    tl.from("h1, a, img", {
        opacity: 0,
        y: 40,
        // delay:0.5,
        stagger: {
            amount: 1
        }
    })
}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done()
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave() {
                const done = this.async();
                pageTransition()
                await delay();
                done()
            },

            enter() {
                mainAnimation();
            },
        }
    ]
})
