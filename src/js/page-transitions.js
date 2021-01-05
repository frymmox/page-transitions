function animationLeave(container) {
  return gsap.to(container.querySelector('.promo__cover'), {
    xPercent: 100
  })
}

function animationEnter(container) {
  return gsap.from(container.querySelector('.promo__cover--item'), {
    xPercent: 100
  })
};

barba.init({
  transitions: [{
    name: 'transition',
    async leave(data) {
      await animationLeave(data.current.container);
    },
    enter(data) {
      animationEnter(data.next.container);
    }
  }]
});
