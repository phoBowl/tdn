$(document).ready(() => {
  $('#slides').superslides({
    animation: 'fade',
    play: 5000
    // pagination: false
  })

  let typed = new Typed('.typed', {
    strings: [
      '...',
      'Junior Web Developer',
      'Junior Software Developer',
      'Technology Hobbyist'
    ],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  })
})
