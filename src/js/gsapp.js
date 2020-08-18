// https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()

 ScrollTrigger.batch(".card", {
   /*   interval: 0.1,  time window (in seconds) for batching to occur. 
     batchMax: 3,    maximum batch size (targets) */
    onEnter: batch => gsap.to(batch, {autoAlpha: 1, stagger: 0.1}),
     /* also onLeave, onEnterBack, and onLeaveBack
     also most normal ScrollTrigger values like start, end, etc. */
  }); 