class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }
    //error func here lets us call existing methods on the class inside inside the method that was decared w/ =>
    start = () => {
        this.tick()
        //setInterval() is a built in method - args are: (this.method-to-call, interval between calls)
    this.interval = setInterval(this.tick, 1000)
    }
    pause = () => {
        clearInterval(this.interval)
    }
    onDurationChange(){

    }
    tick = () => {

    }
}
//heyyyyyyyy
const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')

const timer = new Timer(durationInput, startButton, pauseButton)