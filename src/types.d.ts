interface Riddle {
    id: string,
    index: number,
    title: string,
    response: string,
    background: string,
}

type Matrix = (string | undefined)[][];