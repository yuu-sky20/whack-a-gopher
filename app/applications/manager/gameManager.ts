import { whackController } from "../controller/whackController"

function GameInitialize() {

}

function GameStart() {
    GameInitialize()
    const gameTimeLimit = 2 * 60 * 1000

    return new Promise(resolve => setTimeout(GameEnd, gameTimeLimit))
}

function GameEnd() {
    /*
        Clear Time
    */
}

function TimeCounter() {

}

export {GameStart}