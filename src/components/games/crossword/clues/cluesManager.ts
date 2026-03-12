import type { CluePair, CluePairFromDocument, Coord } from "../types";


class CluesManager {
    clues: CluePair[] = []

    getCoordsFromClue(cluePair: CluePairFromDocument): Coord[] {
        //this only works because we know that none of the words are too big for the grid
        let coords: Coord[] = []
        for (let i = 0; i < cluePair.word.length; i++) {   
            const x = cluePair.start!.x + (cluePair.isHorizontal ? i : 0)
            const y = cluePair.start!.y + (cluePair.isHorizontal ? 0 : i)

            coords.push({x: x, y: y})
        }

        return coords
    }

    init(clues: CluePairFromDocument[]) {
        this.clues = clues.map(clue => ({
            ...clue,
            coords: this.getCoordsFromClue(clue)
        }))
    }
}


export default CluesManager