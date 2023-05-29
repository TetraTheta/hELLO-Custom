/** @see https://github.com/aFarkas/lazysizes */
import 'lazysizes'

/** @see https://highlightjs.org */
import hljs from 'highlight.js'

window.hljs = hljs

/** @see https://swiperjs.com */
import Swiper, { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

window.swiper = swiper;

/* Replace Lightbox using Fancybox */
(function () {
  HTMLCollection.prototype.forEach = Array.prototype.forEach
  const s = document.getElementsByTagName('span')
  s.forEach((e) => {
    if ('lightbox' in e.dataset) {
      delete e.dataset.lightbox
      e.dataset.fancybox = 'fancybox'
      e.dataset.src = e.getElementsByTagName('img')[0].dataset.src
    }
  })
})()

/** @see https://fancyapps.com/fancybox */
import { Fancybox } from '@fancyapps/ui'
Fancybox.bind('[data-fancybox]')
