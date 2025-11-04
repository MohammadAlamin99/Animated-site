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
const aboutSection = document.querySelector('.about__section')
gsap.to('.video__container', {
    scale: 2,
    scrollTrigger: {
        trigger: aboutSection,
        start: 'center top',
        end: '+=' + aboutSection.scrollHeight,
        scrub: 1,
    }
});
gsap.to('.about_title', {
    scale: 1,
    transformOrigin: 'center center',
    scrollTrigger: {
        trigger: aboutSection,
        start: 'center top',
        end: '+=' + aboutSection.scrollHeight,
        scrub: 1,
    }
});

const texts = ["BREATH", "MOVIES", "TRAVEL"];
const title = document.querySelector(".about_title");
let index = 0;

setInterval(() => {
    index = (index + 1) % texts.length;
    title.textContent = texts[index];
}, 500);



// vertical section
const verticalSection = document.querySelector('.scroll-section');
const wrapper = document.querySelector(".wrapper");
const items = wrapper.querySelectorAll(".item");

items.forEach((item, index) => {
    if (index !== 0) {
        gsap.set(item, { yPercent: 100 })
    }
});

const verticalTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: verticalSection,
        start: 'top top',
        end: `+=${items.length * 100}%`,
        scrub: 1,
        invalidateOnRefresh: true,
        pin:true,
        markers: true,
    },
    defaults: { ease: "none" },
});

items.forEach((item, index) => {
    verticalTimeline.to(item, {
        scale: 0.9,
        borderRadius: "10px",
    });
    verticalTimeline.to(
        items[index + 1],
        { yPercent: 0 },
        "<"
    )
});
