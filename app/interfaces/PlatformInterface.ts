type Character = "" | "gopher" | "lisp-alien"
type HoleType = string
type HoleID = number
type Holes = {holeType: HoleType, holeID: HoleID, character: Character}

interface PlatformInterface {
    holes: Holes[]
}

export default PlatformInterface