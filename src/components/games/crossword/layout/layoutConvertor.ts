import type { BundleLayout, Coord, DocumentBundle, OldDocumentBundle } from "../types";

export const convertLayout = (oldLayout: {col: number, array: string[]}[]): BundleLayout => {
        //bad names + average code = awful code
        const numRows = oldLayout.length
        let cols: string[][] = []
        
        for (let i = 0; i < numRows; i++) {
                cols.push(oldLayout.map(row => row.array[i]))
        }

        return {
                grid: cols.flat().map(char => char.toLowerCase()),
                width: Math.max(...oldLayout.map(column => column.array.length)),
                height: oldLayout.length
        }
}

export const convertBundle = (oldBundle: OldDocumentBundle): DocumentBundle => {
        const newLayout = convertLayout(oldBundle.grid)
        
        return {
                ...newLayout,
                author: oldBundle.author,
                clues: oldBundle.clues,
                date: oldBundle.date,
                difficulty: oldBundle.difficulty,
                name: oldBundle.name
        }
}

export const attatchClues = (bundle: DocumentBundle) => {
        const orderNumbers = new Set<{order: string, coord: Coord}>()
        
        bundle.clues.forEach(clue => orderNumbers.add({order: `${clue.order}`, coord: clue.start}))

        return Array.from(orderNumbers)
}