gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: '#smoother-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true,
});

gsap.utils.toArray('.section').forEach((section) => {
    gsap.fromTo(section,
    {opacity: 1 },
    {opacity: 0 },
    scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
            },
        }
    );