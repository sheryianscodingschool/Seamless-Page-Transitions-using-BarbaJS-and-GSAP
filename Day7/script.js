function pageTransition() {
    const tl = gsap.timeline()
    tl.to("header", {
        zIndex: 1
    })
        .to(".page-transition1", {
            height: "100%",
            top: 0,
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "100%",
            bottom: "0%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            height: "100%",
            top: "100%",
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "100%",
            bottom: "100%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            height: "0%",
            top: "100%",
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "0%",
            bottom: "100%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            top: "0%",
            duration: 0.1
        })
        .to(".page-transition2", {
            bottom: "0%",
            duration: 0.1,
            delay: "-0.1"
        })

        .set(".page-transition1", {
            top: "0%",
        })
        .set(".page-transition2", {
            bottom: "0%",
        })
}

function mainAnimation() {
    const tl = gsap.timeline()
    tl.from(".elem-img", {
        opacity: 0,
        duration: 0.1
    })
        .from(".img-cover1, .img-cover2", {
            top: 0,
            delay: 0.4,
            duration: 0.6
        })
        .from(".main-elem1 h1, .main-elem1 p", {
            x: 50,
            duration: 0.6,
            delay: 0.1,
            opacity: 0
        })
        .from(".main-elem2 h2, .main-elem2 h4, .main-elem2 p", {
            x: -50,
            duration: 0.6,
            opacity: 0,
            delay: "-0.6",
        })
}

function delay(n) {
    n = n || 2000;
    return new Promise(function (done) {
        setTimeout(() => {
            done()
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async()
                pageTransition();
                await delay(1000)
                done();
            },
            async enter(data) {
                mainAnimation()
            }
        }
    ]
})