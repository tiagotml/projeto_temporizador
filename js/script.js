import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js"
import { elements } from "./config.js"
import Events from "./events.js"


const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})
const sound = Sounds()
Events({ controls, timer, sound })


