import type { DocumentBundle } from "../types"

export const startGameInfo = (bundle: DocumentBundle) => ({
    title: `${(bundle.name !== "" ? `${bundle.name} - ` : "")}${bundle.width}x${bundle.height}`,
    date: (new Date(bundle.date)).toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'}),
    weekday: (new Date(bundle.date)).toLocaleDateString('en-US', {weekday: 'long'}),
    author: `Written by ${bundle.author}`,
    authorByLine: (bundle.author === "Ava Dinh-Vu")
        ? undefined
        : `Website by Ava Dinh-Vu`,
    
    posessive: (bundle.author === "Ava Dinh-Vu")
        ? `Ava's`
        : bundle.author.split(" ")[0] + "'s",

    chillies: Array.from({length: 3}, 
        (_, i) => i >= bundle.difficulty 
            ? "/svg/chilli/chilli-empty.svg" 
            : "/svg/chilli/chilli-fill.svg")
})

