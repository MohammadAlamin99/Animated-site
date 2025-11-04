function loadSVG() {
    fetch("city.svg")
        .then((response) => {
            return response.text();
        })
        .then((svg) => {
            document.getElementById('bg_city').innerHTML = svg;
            document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
            setAnimationScroll();
        })
}
loadSVG();

function setAnimationScroll() {
    const bgCity = document.querySelector("#bg_city");
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=" + bgCity.scrollHeight,
            scrub: true,
            pin: true,
        }
    });
    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
        .add([
            gsap.to("#building_top", 2, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#wall_front", 2, {
                x: -200,
                opacity: 0
            }),
            gsap.to("#wall_front", 2, {
                x: 200,
                y: 200,
                opacity: 0
            })
        ])
        .add([
            gsap.to("#interior_wall_side", 2, {
                x: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_top", 2, {
                y: -200,
                opacity: 0
            }),
            gsap.to("#interior_wall_side_2", 2, {
                opacity: 0
            }),
            gsap.to("#interior_wall_front", 2, {
                opacity: 0
            })
        ]);
}

// about section animation
gsap.to('.video__container', {
    scale: 2,
    scrollTrigger: {
        trigger: '.about__section',
        start: 'center top',
        end: '+=1000',
        scrub: 1,
    }
});