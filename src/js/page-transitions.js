function animationLeave(container) {
  return gsap.to(container.querySelector('.promo__cover'), {
    duration: 1.7,
    ease: "power2.inOut",
    xPercent: -100,
    opacity: 0
  })
}

barba.init({
  transitions: [{
    name: 'transition',
    async leave(data) {
      await animationLeave(data.current.container);
    },
    enter() {}
  }]
});
