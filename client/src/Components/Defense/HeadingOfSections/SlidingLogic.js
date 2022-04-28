export function Previous(){
    const carousel=document.querySelector("#carousel")
    carousel.scrollBy(-335,0)
}

export function Next(){
    const carousel=document.querySelector("#carousel")
    carousel.scrollBy(335,0)
}