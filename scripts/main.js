////////////////////////////////

// JS HOME

////////////////////////////////

const $container = document.querySelector('.container')
const $page1Data = document.querySelector('.page1-data-bloc')
const $page2Data = document.querySelector('.page2-data-bloc')
const $page4Data = document.querySelector('.page4-data-bloc')
const $page5Data = document.querySelector('.page5-data-bloc')

const scene = document.getElementById('scene')
const parallaxInstance = new Parallax(scene)


const $loader = document.querySelector(".loader")

// array of thematic heading blocs
const $blocs = $container.querySelectorAll('.bloc')

const $bubbles = $container.querySelectorAll('.bubble')
const $bubbleTexts = $container.querySelectorAll('.bubble-text')

let scenes = []
const $sceneSelector = $container.querySelectorAll('#scene')

const $layers = $container.querySelectorAll('.layer')
// scenes creation
for (i = 0; i < $sceneSelector.length; i++) {
  scenes[i] = new Parallax($sceneSelector[i]);
}

const $buttonLeft = $container.querySelector('.button.left')
const $buttonRight = $container.querySelector('.button.right')
const $buttonMiddle = $container.querySelector('.button.middle')

const $blocTitle = $container.querySelector('.bloc-title')
const $blocQuote = $container.querySelector('.bloc-quote')

const $citationHome = $container.querySelector('.citation')
const $citationNumber = $citationHome.querySelector('.number')
const $citationQuote = $citationHome.querySelector('.quote')

const citationChange = () => {
  if (index == 0) {
    $citationHome.style.display = 'none'
    $citationHome.classList.remove('appear')
    $citationHome.classList.add('disappear')

  } else if (index == 1) {
    $citationHome.style.display = 'block'
    $citationHome.classList.remove('appear')
    $citationHome.classList.add('disappear')
    setTimeout(() => {
      $citationHome.classList.remove('disappear'), $citationNumber.innerHTML = '01 / 04',
        $citationQuote.innerHTML = '" When something is important enough, you do it even if the odds are not in your favor."',
        $citationHome.classList.add('appear')
    }, 1000)
  } else if (index == 2) {
    $citationHome.classList.remove('appear')
    $citationHome.classList.add('disappear')
    setTimeout(() => {
      $citationHome.classList.remove('disappear'), $citationNumber.innerHTML = '02 / 04',
        $citationQuote.innerHTML = '" Persistence is very important. You should not give up unless you are forced to give up."',
        $citationHome.classList.add('appear')
    }, 1000)
  } else if (index == 3) {
    $citationHome.classList.remove('appear')
    $citationHome.classList.add('disappear')
    setTimeout(() => {
      $citationHome.classList.remove('disappear'), $citationNumber.innerHTML = '03 / 04',
        $citationQuote.innerHTML = '" I dont create companies for the sake of creating companies, but to get things done."',
        $citationHome.classList.add('appear')
    }, 1000)
  } else if (index == 4) {
    $citationHome.classList.remove('appear')
    $citationHome.classList.add('disappear')
    setTimeout(() => {
      $citationHome.classList.remove('disappear'), $citationNumber.innerHTML = '04 / 04',
        $citationQuote.innerHTML = '" The first step is to establish that something is possible ; then probability will occur."',
        $citationHome.classList.add('appear')
    }, 1000)
  }
}

let index = 0

const arrowRight = 39
const arrowLeft = 18

const loader = () => {
  setTimeout(showPage, 3000)
  setTimeout(disappearLoader, 4000)
}

const showPage = () => {
  $loader.classList.add("disappear")
}
const disappearLoader = () => {
  $loader.style.display = 'none'
}

const titleChange = () => {
  if (index == 0) {
    $blocTitle.innerHTML = 'The future of space travel'
    $blocTitle.classList.remove('disappear')
    $blocTitle.classList.add('appear')
  } else if (index == 1) {
    $blocTitle.innerHTML = 'The materials behind the beast'
    $blocTitle.classList.remove('disappear')
    $blocTitle.classList.add('appear')
  } else if (index == 2) {
    $blocTitle.innerHTML = 'Building the future'
    $blocTitle.classList.remove('disappear')
    $blocTitle.classList.add('appear')
  } else if (index == 3) {
    $blocTitle.innerHTML = 'Follow the vision'
    $blocTitle.classList.remove('disappear')
    $blocTitle.classList.add('appear')
  } else if (index == 4) {
    $blocTitle.innerHTML = 'Launching a miracle'
    $blocTitle.classList.remove('disappear')
    $blocTitle.classList.add('appear')
  } else {

  }
}
// keydown bloc change
document.addEventListener('keydown', (e) => {
  if (e.keyCode == 37) {
    if (index == 0) {
      $buttonMiddle.style.display = 'none'
    } else {
      $buttonMiddle.style.display = 'block'
    }
    blocTransitionLeft()
    $blocTitle.classList.remove('appear')
    $blocTitle.classList.add('disappear')
    setTimeout(titleChange, 1000)
    displayBubble()
  } else if (e.keyCode == 39) {
    if (index == 0) {
      $buttonMiddle.style.display = 'none'
    } else {
      $buttonMiddle.style.display = 'block'
    }
    blocTransitionRight()
    $blocTitle.classList.remove('appear')
    $blocTitle.classList.add('disappear')
    setTimeout(titleChange, 1000)
    displayBubble()
  }
})

// left button navigation
$buttonLeft.addEventListener('click', (e) => {
  if (index == 0) {
    $buttonMiddle.style.display = 'none'
  } else {
    $buttonMiddle.style.display = 'block'
  }
  blocTransitionLeft()
  $blocTitle.classList.remove('appear')
  $blocTitle.classList.add('disappear')
  setTimeout(titleChange, 1000)
  displayBubble()
})

// right button navigation
$buttonRight.addEventListener('click', (e) => {
  blocTransitionRight()
  $blocTitle.classList.remove('appear')
  $blocTitle.classList.add('disappear')
  setTimeout(titleChange, 1000)
  displayBubble()
})

const blocTransitionRight = () => {
  index++
  pageDataChange()
  citationChange()
  //disable middle button home
  if (index == 0) {
    $buttonMiddle.style.display = 'none'
  } else {
    $buttonMiddle.style.display = 'block'
  }
  //disable quote homePage
  if (index >= 1) {
    $blocQuote.style.display = 'none'
  } else if (index == 0) {
    $blocQuote.style.display = 'block'
  }
  $buttonLeft.style.display = 'block'
  for (let bloc of $blocs) {
    if (bloc.dataset.index == index) {
      bloc.style.display = 'block'
      bloc.classList.add('start-right')
      bloc.style.zIndex = '3'
    } else {
      bloc.removeAttribute('id')
      bloc.classList.remove('start-right')
      bloc.style.zIndex = '2'
      setTimeout(() => {
        bloc.style.display = "none"
      }, 1000)
    }
  }
  if (index >= 4) {
    $buttonRight.style.display = 'none'
  } else {
    $buttonRight.style.display = 'block'
  }
}

const blocTransitionLeft = () => {
  index--
  pageDataChange()
  citationChange()
  //disable middle button home
  if (index == 0) {
    $buttonMiddle.style.display = 'none'
  } else {
    $buttonMiddle.style.display = 'block'
  }
  //disable quote homePage
  if (index >= 1) {
    $blocQuote.style.display = 'none'
  } else if (index == 0) {
    $blocQuote.style.display = 'block'
  }
  for (let bloc of $blocs) {
    if (bloc.dataset.index == index) {
      bloc.style.display = 'block'
      bloc.classList.add('start-left')
      bloc.style.zIndex = '3'
    } else {
      bloc.classList.remove('start-left')
      bloc.removeAttribute('id')
      bloc.style.zIndex = '2'
      setTimeout(() => {
        bloc.style.display = "none"
      }, 1000)
    }
    if (index == 0) {
      $buttonLeft.style.display = 'none'
    }
    if (index >= 4) {
      $buttonRight.style.display = 'none'
    } else {
      $buttonRight.style.display = 'block'
    }
  }
}

// bubble mouse over text apparition
for (let bubble of $bubbles) {
  bubble.addEventListener('mouseover', () => {
    for (let bubbleText of $bubbleTexts) {
      if (bubble.classList.contains('home') || bubbleText.classList.contains('text-home')) {
        bubbleText.classList.remove('disappear')
        bubbleText.classList.add('appear')
        bubbleText.style.display = 'block'
      } else if (bubble.classList.contains('materials') || bubbleText.classList.contains('text-material')) {
        bubbleText.classList.remove('disappear')
        bubbleText.classList.add('appear')
        bubbleText.style.display = 'block'
      } else if (bubble.classList.contains('transport') || bubbleText.classList.contains('text-transport')) {
        bubbleText.classList.remove('disappear')
        bubbleText.classList.add('appear')
        bubbleText.style.display = 'block'
      } else if (bubble.classList.contains('work') || bubbleText.classList.contains('text-work')) {
        bubbleText.classList.remove('disappear')
        bubbleText.classList.add('appear')
        bubbleText.style.display = 'block'
      } else if (bubble.classList.contains('end') || bubbleText.classList.contains('text-end')) {
        bubbleText.classList.remove('disappear')
        bubbleText.classList.add('appear')
        bubbleText.style.display = 'block'
      }
    }
  })
}
// bubble mouse out text disparition
for (let bubble of $bubbles) {
  bubble.addEventListener('mouseout', () => {
    for (let bubbleText of $bubbleTexts) {
      if (bubble.classList.contains('home') || bubbleText.classList.contains('text-home')) {
        bubbleText.classList.remove('appear')
        bubbleText.classList.add('disappear')
      } else if (bubble.classList.contains('materials') || bubbleText.classList.contains('text-material')) {
        bubbleText.classList.remove('appear')
        bubbleText.classList.add('disappear')
      } else if (bubble.classList.contains('transport') || bubbleText.classList.contains('text-transport')) {
        bubbleText.classList.remove('appear')
        bubbleText.classList.add('disappear')
      } else if (bubble.classList.contains('work') || bubbleText.classList.contains('text-work')) {
        bubbleText.classList.remove('appear')
        bubbleText.classList.add('disappear')
      } else if (bubble.classList.contains('end') || bubbleText.classList.contains('text-end')) {
        bubbleText.classList.remove('appear')
        bubbleText.classList.add('disappear')
      }
    }
  })
}

const displayBubble = () => {
  for (let bloc of $blocs) {
    for (let bubble of $bubbles) {
      if (index == 0 && bubble.classList.contains('home')) {
        bubble.style.display = 'block'
        bubble.classList.add('appear')
      } else if (index == 1 && bubble.classList.contains('material')) {
        bubble.style.display = 'block'
        bubble.classList.add('appear')
      } else if (index == 2 && bubble.classList.contains('work')) {
        bubble.style.display = 'block'
        bubble.classList.add('appear')
      } else if (index == 3 && bubble.classList.contains('transport')) {
        bubble.style.display = 'block'
        bubble.classList.add('appear')
      } else if (index == 4 && bubble.classList.contains('end')) {
        bubble.style.display = 'block'
        bubble.classList.add('appear')
      } else {
        bubble.style.display = 'none'
      }
    }
  }
}
const pageDataChange = () => {
  if (index == 1) {
    $page2Data.style.display = 'none'
    $page1Data.style.display = 'block'
  } else if (index == 2) {
    $page2Data.style.display = 'block'
    $page1Data.style.display = 'none'
    $page4Data.style.display = 'none'
  } else if (index == 3) {
    $page4Data.style.display = 'block'
    $page2Data.style.display = 'none'
    $page5Data.style.display = 'none'
  } else if (index == 4) {
    $page5Data.style.display = 'block'
    $page4Data.style.display = 'none'
  } else if (index == 0) {
    $page1Data.style.display = 'none'
  }
}
// Scroll to a certain element
const pageDataDisplay = () => {
  console.log('lol')
  if (index == 1) {
    $page1Data.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (index == 2) {
    $page2Data.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (index == 3) {
    $page4Data.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else if (index == 4) {
    $page5Data.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

$buttonMiddle.addEventListener('click', () => {
  pageDataDisplay()
})


////////////////////////////////

// JS PAGE1

////////////////////////////////


const $page1Bloc1 = $page1Data.querySelector('.bloc-1')

const $page1Quotes = $page1Data.querySelectorAll('.quote')

const $page1Buttons = $page1Data.querySelectorAll('.button')

for (let page1Button of $page1Buttons) {
  page1Button.addEventListener('click', () => {
    for (let page1Quote of $page1Quotes) {
      if (page1Button.classList.contains('dragon1') && page1Quote.classList.contains('dragon')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'Dragon’ s trunk supports the Dragon spacecraft during ascent to space, houses the solar panels and contains a cargo carrier designed to hold unpressurized cargo', page1Quote.classList.add('appear')
        }, 300)

      } else if (page1Button.classList.contains('dragon2') && page1Quote.classList.contains('dragon')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'Dragon is a fully autonomous spacecraft designed to transport cargo and ultimately people to and from orbit.', page1Quote.classList.add('appear')
        }, 300)

      } else if (page1Button.classList.contains('structure1') && page1Quote.classList.contains('structure')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'This structure is also the rocket’s tank containing the fuel : a mixture of liquid oxygen and kerosene.', page1Quote.classList.add('appear')
        }, 300)

      } else if (page1Button.classList.contains('structure2') && page1Quote.classList.contains('structure')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'Falcon 9’s walls are made of aluminum-lithium alloy, a material made stronger and lighter than aluminum by the addition of lithium.', page1Quote.classList.add('appear')
        }, 300)

      } else if (page1Button.classList.contains('rocket1') && page1Quote.classList.contains('rocket')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'The nine Merlin engines that power the Falcon 9 first stage are arranged in an Octaweb structure, with eight engines surrounding one center engine.',
            page1Quote.classList.add('appear')
        }, 300)

      } else if (page1Button.classList.contains('rocket2') && page1Quote.classList.contains('rocket')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'The Merlin engine that powers the first stage of Falcon 9 is developed and manufactured in-house by SpaceX.', page1Quote.classList.add('appear')
        }, 300)
      } else if (page1Button.classList.contains('rocket3') && page1Quote.classList.contains('rocket')) {
        page1Quote.classList.remove('appear')
        page1Quote.classList.add('disappear')
        setTimeout(function() {
          page1Quote.classList.remove('disappear'),
            page1Quote.innerHTML = 'Falcon 9 was designed from the beginning to be fully reusable, and carries landing legs which will land the rocket safely on Earth after takeoff.', page1Quote.classList.add('appear')
        }, 300)
      }
    }
  })
}
////////////////////////////////

// JS PAGE2

////////////////////////////////


const $page2Bloc1 = $page2Data.querySelector('.bloc-1')
const $falcon = $page2Bloc1.querySelector('.falcon')
const $falconButtons = $falcon.querySelectorAll('.button')
const $falconText = $falcon.querySelector('.falcon-text')

// bloc 1 falcon text appearing on the right
for (let falconButton of $falconButtons) {
  falconButton.addEventListener('click', () => {
    if (falconButton.classList.contains('circle1')) {
      $falconText.classList.remove('appear')
      $falconText.classList.add('disappear')
      setTimeout(function() {
        $falconText.classList.remove('disappear'),
          $falconText.innerHTML = "The Dragon is a fully autonomous spacecraft designed to carry cargo and, in a second time, people to and from the orbit. Composite fairing SpaceX's payload fairing is a composite structure built in-house by SpaceX that protects satellites during delivery. It consists of an aluminum structure and a carbon fiber shell made of two half-shells.",
          $falconText.classList.add('appear')
      }, 300)
    } else if (falconButton.classList.contains('circle2')) {
      $falconText.classList.remove('appear')
      $falconText.classList.add('disappear')
      setTimeout(function() {
        $falconText.classList.remove('disappear'),
          $falconText.innerHTML = " The second stage, powered by a single Merlin engine, brings the cargo of the Falcon 9 to the desired orbit. The second stage engine turns on a few seconds after phase separation and can be restarted several times to place multiple payloads on different orbits. Like the first step, the second step is made of a high-strength aluminum-lithium alloy.", $falconText.classList.add('appear')
      }, 300)

    } else if (falconButton.classList.contains('circle3')) {
      $falconText.classList.remove('appear')
      $falconText.classList.add('disappear')
      setTimeout(function() {
        $falconText.classList.remove('disappear'),
          $falconText.innerHTML = "The interstage is a composite structure that connects the first and second stages and maintains the fully pneumatic separation system for low-impact, highly reliable separation that can be tested on the ground, unlike the pyrotechnic systems used on most launchers.", $falconText.classList.add('appear')
      }, 300)
    } else if (falconButton.classList.contains('circle4')) {
      $falconText.classList.remove('appear')
      $falconText.classList.add('disappear')
      setTimeout(function() {
        $falconText.classList.remove('disappear'),
          $falconText.innerHTML = "The Falcon 9's first stage includes nine Merlin engines and aluminum-lithium alloy tanks containing liquid oxygen and propellant for kerosene (RP-1).",
          $falconText.classList.add('appear')
      }, 300)
    } else if (falconButton.classList.contains('circle5')) {
      $falconText.classList.remove('appear')
      $falconText.classList.add('disappear')
      setTimeout(function() {
        $falconText.classList.remove('disappear'),
          $falconText.innerHTML = "The nine Merlin engines that power the Falcon 9 first stage are housed in an Octaweb structure, with eight engines surrounding a central engine. The engine developed internally must be inexpensive and reliable. To achieve this goal, the architecture is simple with a minimum of parts and uses proven techniques.",
          $falconText.classList.add('appear')
      }, 300)
    }
  })
}


const $page2Bloc2 = $page2Data.querySelector('.bloc-2')
const $round = $page2Bloc2.querySelector('.round')
const $roundNumber = $round.querySelector('.round-number')
const $roundDescription = $round.querySelector('.round-description')
const $buttons = $page2Bloc2.querySelectorAll('.button')

for (let button of $buttons) {
  button.addEventListener('click', () => {
    if (button.classList.contains('price')) {
      $roundNumber.classList.remove('appear')
      $roundNumber.classList.add('disappear')
      $roundDescription.classList.remove('appear')
      $roundDescription.classList.add('disappear')
      setTimeout(function() {
        $roundNumber.classList.remove('disappear'),
          $roundDescription.classList.remove('disappear'),
          $roundNumber.innerHTML = "62",
          $roundDescription.innerHTML = "Space X ’s requested price for the launch of a Falcon 9",
          $roundNumber.classList.add('appear'),
          $roundDescription.classList.add('appear')
      }, 300)
    } else if (button.classList.contains('cost')) {
      $roundNumber.classList.remove('appear')
      $roundNumber.classList.add('disappear')
      $roundDescription.classList.remove('appear')
      $roundDescription.classList.add('disappear')
      setTimeout(function() {
        $roundNumber.classList.remove('disappear'),
          $roundDescription.classList.remove('disappear'),
          $roundNumber.innerHTML = "48",
          $roundDescription.innerHTML = "Total cost of material, testing and launch operations",
          $roundNumber.classList.add('appear'),
          $roundDescription.classList.add('appear')
      }, 300)
    } else if (button.classList.contains('profit')) {
      $roundNumber.classList.remove('appear')
      $roundNumber.classList.add('disappear')
      $roundDescription.classList.remove('appear')
      $roundDescription.classList.add('disappear')
      setTimeout(function() {
        $roundNumber.classList.remove('disappear'),
          $roundDescription.classList.remove('disappear'),
          $roundNumber.innerHTML = "14",
          $roundDescription.innerHTML = "The profit makes by the firm with only one rocket",
          $roundNumber.classList.add('appear'),
          $roundDescription.classList.add('appear')
      }, 300)
    }
  })
}

const $bloc3 = $page2Data.querySelector('.bloc-3')
const $mapButtons = $bloc3.querySelectorAll('.map-button')
const $mapDescription = $bloc3.querySelector('.map-description')

for (let mapButton of $mapButtons) {
  mapButton.addEventListener('click', () => {
    if (mapButton.classList.contains('button-1')) {
      $mapDescription.classList.remove('appear')
      $mapDescription.classList.add('disappear')
      setTimeout(function() {
        $mapDescription.classList.remove('disappear'),
          $mapDescription.innerHTML = "SEATTLE - SPACEX OFFICES",
          $mapDescription.classList.add('appear')
      }, 300)
    } else if (mapButton.classList.contains('button-2')) {
      $mapDescription.classList.remove('appear')
      $mapDescription.classList.add('disappear')
      setTimeout(function() {
        $mapDescription.classList.remove('disappear'),
          $mapDescription.innerHTML = "CALIFORNIA - SPACEX HEADQUARTERS, SPACEX LAUNCHFACILITY"
        $mapDescription.classList.add('appear')
      }, 300)
    } else if (mapButton.classList.contains('button-3')) {
      $mapDescription.classList.remove('appear')
      $mapDescription.classList.add('disappear')
      setTimeout(function() {
        $mapDescription.classList.remove('disappear'),
          $mapDescription.innerHTML = "TEXAS - SPACEX DEVELOPMENT FACILITY, OFFICES, LAUNCHFACILITY"
        $mapDescription.classList.add('appear')
      }, 300)
    } else if (mapButton.classList.contains('button-4')) {
      $mapDescription.classList.remove('appear')
      $mapDescription.classList.add('disappear')
      setTimeout(function() {
        $mapDescription.classList.remove('disappear'),
          $mapDescription.innerHTML = "WASHINGTON - SPACEX OFFICES"
        $mapDescription.classList.add('appear')
      }, 300)
    } else if (mapButton.classList.contains('button-5')) {
      $mapDescription.classList.remove('appear')
      $mapDescription.classList.add('disappear')
      setTimeout(function() {
        $mapDescription.classList.remove('disappear'),
          $mapDescription.innerHTML = "FLORIDA - SPACEX LAUNCHFACILITY"
        $mapDescription.classList.add('appear')
      }, 300)
    }
  })
}

////////////////////////////////

// JS PAGE 3

////////////////////////////////


const $page4Bloc1 = $page4Data.querySelector('.bloc-1')

const $page4Buttons = $page4Bloc1.querySelectorAll('.button')

const $page4RoadQuote = $page4Bloc1.querySelector('.road-quote')

const $page4RoadQuoteTitle = $page4Bloc1.querySelector('.quote-title')

const $page4RoadQuoteText = $page4Bloc1.querySelector('.quote-text')

for (let page4Button of $page4Buttons) {
  page4Button.addEventListener('click', () => {
    $page4RoadQuote.style.display = 'inline-block'
    if (page4Button.classList.contains('n1')) {
      $page4RoadQuote.classList.remove('appear')
      $page4RoadQuote.classList.add('disappear')
      setTimeout(function() {
        $page4RoadQuote.style.top = '0%'
        $page4RoadQuote.classList.remove('disappear'),
          $page4RoadQuoteTitle.innerHTML = 'LAUNCH PAD ',
          $page4RoadQuoteText.innerHTML = 'The masterpiece of the process, it can guide and launch the rocket into orbit',
          $page4RoadQuote.classList.add('appear')
      }, 300)
    } else if (page4Button.classList.contains('n2')) {
      $page4RoadQuote.classList.remove('appear')
      $page4RoadQuote.classList.add('disappear')
      setTimeout(function() {
        $page4RoadQuote.style.top = '20%',
          $page4RoadQuote.classList.remove('disappear'),
          $page4RoadQuoteTitle.innerHTML = 'VEHICLE INTEGRATION ',
          $page4RoadQuoteText.innerHTML = 'Hangar where rockets are built and parked before transport to launch pad',
          $page4RoadQuote.classList.add('appear')
      }, 300)
    } else if (page4Button.classList.contains('n3')) {
      $page4RoadQuote.classList.remove('appear')
      $page4RoadQuote.classList.add('disappear')
      setTimeout(function() {
        $page4RoadQuote.style.top = '50%',
          $page4RoadQuote.classList.remove('disappear'),
          $page4RoadQuoteTitle.innerHTML = 'CUSTOMER OFFICE AREA',
          $page4RoadQuoteText.innerHTML = 'This building is available to support customer administrative needs.',
          $page4RoadQuote.classList.add('appear')
      }, 300)
    } else if (page4Button.classList.contains('n4')) {
      $page4RoadQuote.classList.remove('appear')
      $page4RoadQuote.classList.add('disappear')
      setTimeout(function() {
        $page4RoadQuote.style.top = '70%',
          $page4RoadQuote.classList.remove('disappear'),
          $page4RoadQuoteTitle.innerHTML = 'CUSTOM FOR HIGHWAYS',
          $page4RoadQuoteText.innerHTML = 'The Falcon 9 Is core diameter was designed as such that it can fit underneath US interstate overpasses so to  transport by truck. They may stop first at SpaceX’s test facility in McGregor, Texas.',
          $page4RoadQuote.classList.add('appear')
      }, 300)
    }
  })
}

////////////////////////////////

// JS PAGE 4

////////////////////////////////

const $page5Bloc1 = $page5Data.querySelector('.bloc-1')

const $page5RoundQuote = $page5Bloc1.querySelector('.rounds-quote')

const $firstFloor = $page5Bloc1.querySelector('.first-floor')
const $leftElement = $firstFloor.querySelector('.left-element')
const $rightElement = $firstFloor.querySelector('.right-element')
const $title1LeftElement = $leftElement.querySelector('.title-1')
const $title1RightElement = $rightElement.querySelector('.title-1')
const $number1LeftElement = $leftElement.querySelector('.number-1')
const $number1RightElement = $rightElement.querySelector('.number-1')

const $secondFloor = $page5Bloc1.querySelector('.second-floor')
const $titleSecondFloor = $secondFloor.querySelector('.title-1')
const $number1SecondFloor = $secondFloor.querySelector('.number-1')

const $thirdFloor = $page5Bloc1.querySelector('.third-floor')
const $titleThirdFloor = $thirdFloor.querySelector('.title-1')
const $number1ThirdFloor = $thirdFloor.querySelector('.number-1')

const $page5Rounds = $page5Bloc1.querySelectorAll('.round')

for (let page5Round of $page5Rounds) {
  page5Round.addEventListener('click', () => {
    $page5RoundQuote.style.visibility = 'visible'
    if (page5Round.classList.contains('n1')) {
      $firstFloor.style.display = 'block'
      $thirdFloor.style.display = 'block'
      $rightElement.style.display = 'inline-block'
      $page5RoundQuote.classList.remove('appear')
      $page5RoundQuote.classList.add('disappear')
      setTimeout(function() {
        $page5RoundQuote.classList.remove('disappear'),
          $title1LeftElement.innerHTML = 'Height',
          $number1LeftElement.innerHTML = '70m',
          $title1RightElement.innerHTML = 'Mass',
          $number1RightElement.innerHTML = '549kg',
          $titleSecondFloor.innerHTML = 'Payload to'
        $number1SecondFloor.innerHTML = '4052 kg',
          $titleThirdFloor.innerHTML = 'Payload to leo'
        $number1ThirdFloor.innerHTML = '22,800kg',
          $page5RoundQuote.classList.add('appear')
      }, 300)
    } else if (page5Round.classList.contains('n2')) {
      $firstFloor.style.display = 'block'
      $thirdFloor.style.display = 'block'
      $page5RoundQuote.classList.remove('appear')
      $page5RoundQuote.classList.add('disappear')
      setTimeout(function() {
        $page5RoundQuote.classList.remove('disappear'),
          $title1LeftElement.innerHTML = 'Height',
          $title1LeftElement.innerHTML = 'Engine',
          $number1LeftElement.innerHTML = '9',
          $title1RightElement.innerHTML = 'Burn',
          $number1RightElement.innerHTML = '162sec',
          $titleSecondFloor.innerHTML = 'THRUST AT SEA LEVEL',
          $number1SecondFloor.innerHTML = '7,607kN',
          $titleThirdFloor.innerHTML = 'THRUST IN VACUUM',
          $number1ThirdFloor.innerHTML = '8,227kN',
          $page5RoundQuote.classList.add('appear')
      }, 300)
    } else if (page5Round.classList.contains('n3')) {
      $page5RoundQuote.classList.remove('appear')
      $page5RoundQuote.classList.add('disappear')
      setTimeout(function() {
        $page5RoundQuote.classList.remove('disappear'),
          $firstFloor.style.display = 'block',
          $thirdFloor.style.display = 'block',
          $rightElement.style.display = 'none',
          $title1LeftElement.innerHTML = 'Successful flights',
          $number1LeftElement.innerHTML = '45',
          $titleSecondFloor.innerHTML = 'Successful landings',
          $number1SecondFloor.innerHTML = '20',
          $titleThirdFloor.innerHTML = 'Succes Rate',
          $number1ThirdFloor.innerHTML = '95,65',
          $page5RoundQuote.classList.add('appear')
      }, 300)
    } else if (page5Round.classList.contains('n4')) {
      $thirdFloor.style.display = 'block'
      $firstFloor.style.display = 'none'
      $page5RoundQuote.classList.remove('appear')
      $page5RoundQuote.classList.add('disappear')
      setTimeout(function() {
        $page5RoundQuote.classList.remove('disappear'),
          $firstFloor.style.display = 'block',
          $thirdFloor.style.display = 'block',
          $titleSecondFloor.innerHTML = '2002'
        $number1SecondFloor.innerHTML = 'Creation of Space X </br> 21 employees, 2 rockets'
        $titleThirdFloor.innerHTML = '2017'
        $number1ThirdFloor.innerHTML = 'Space X Now </br> +5000 employees, </br> 48 rockets'
        $page5RoundQuote.classList.add('appear')
      }, 300)
    } else if (page5Round.classList.contains('n5')) {
      $firstFloor.style.display = 'none'
      $thirdFloor.style.display = 'none'
      $page5RoundQuote.classList.remove('appear')
      $page5RoundQuote.classList.add('disappear')
      setTimeout(function() {
        $page5RoundQuote.classList.remove('disappear'),
          $titleSecondFloor.innerHTML = 'Elon Musk',
          $number1SecondFloor.innerHTML = '"The future of humanity is going to bifurcate in two directions : multiplanetary or extinction"',
          $page5RoundQuote.classList.add('appear')
      }, 300)

    }
  })
}