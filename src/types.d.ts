interface Riddle {
    id: string,
    index: number,
    title: string,
    response: string,
    time: string,
}

type Matrix = (string | undefined)[][];