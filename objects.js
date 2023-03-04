class PhySim {
    constructor(){
        this.canvas = document.querySelector("canvas")
        this.ctx    = this.canvas.getContext("2d")
        this.showpath = document.querySelector("showPath").checked

        this.origo = [0, window.innerHeight]
    }
}