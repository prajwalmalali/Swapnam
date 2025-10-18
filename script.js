//nav
window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`.ham .jumpto a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`.ham .jumpto a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });
});

//page2
let paragraph = document.querySelector('.paragraph');
let spans = paragraph.textContent.trim().split(' ').map(word => `<span>${word}&nbsp;</span>`);
paragraph.innerHTML = spans.join('');

let img = document.querySelector('.page2 img');
let firstSpan = document.querySelector('.paragraph span');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let paragraphTop = paragraph.getBoundingClientRect().top;
    let firstSpanTop = paragraphTop + firstSpan.offsetTop;

    document.querySelectorAll('.paragraph span').forEach((span, index) => {
        let spanTop = paragraphTop + (span.offsetHeight + 20) * index;
        span.classList.toggle('reveal', scrollPosition > spanTop - 20);
    });

    // if (scrollPosition > firstSpanTop) {
    //     img.style.transform = 'scale(1.2)';
    // } else {
    //     img.style.transform = 'scale(1)';
    // }

    // if (scrollPosition > firstSpanTop) {
    //     img.classList.add('colorized');
    //     img.style.transform = 'scale(1.2)';
    // } else {
    //     img.classList.remove('colorized');
    //     img.style.transform = 'scale(1)';
    // }
});

//page3
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "bottom 1800px",
        end: "bottom 200px",
        scrub: 2,
        markers: false
    }
});

tl.to(".page4 p", {
    backgroundPosition: "500% 0%",
});

//page6
document.addEventListener("DOMContentLoaded", function () {
    // Define the GSAP timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page6",
            start: "200px center",
            end: "600px center",
            markers: false,
            scrub: 1
        }
    });

    //falls
    tl.to(".page6 #pic1", {
        y: "-10%",
        x: "500px",
        ease: "none",
        opacity: 1
    }),
        //phtgrphr
        tl.to(".page6 #pic2", {
            y: "-10%",
            x: "-500px",
            ease: "none",
            opacity: 1
        }),
        //road
        tl.to(".page6 #pic3", {
            y: "200px",
            x: "-450px",
            ease: "none",
            opacity: 1
        }),
        //gls water
        tl.to(".page6 #pic4", {
            y: "-210px",
            x: "-750px",
            ease: "none",
            opacity: 1
        }),
        //beach
        tl.to(".page6 #pic5", {
            y: "-210px",
            x: "500px",
            ease: "none",
            opacity: 1
        }),
        //rain
        tl.to(".page6 #pic6", {
            y: "-210px",
            x: "80px",
            ease: "none",
            opacity: 1
        }),
        //forest
        tl.to(".page6 #pic7", {
            y: "210px",
            x: "500px",
            ease: "none",
            opacity: 1
        });

    tl.to(".page6 #gallary", {
        y: "-30px",
        x: "0px",
        ease: "none",
        opacity: 1
    });

    tl.to(".page6 p", {
        y: "-25px",
        x: "0px",
        ease: "none",
        opacity: 1
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".body",
            start: "300px center",
            end: "600px center",
            markers: false,
            scrub: 1
        }
    });

    tl.to(".body .card-container", {
        opacity: 2.50,
    });
});
