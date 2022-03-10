var tl = gsap.timeline({defaults:{duration: 1}});

tl.from(".hero-sec", {y: 15, opacity: 0})
tl.from("h1 span", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
  .from(".card", {y: 25, opacity: 0, stagger: .50}, "-=.7")