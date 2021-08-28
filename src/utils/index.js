
export function getImage() {
    var arr = [
        './img/norris1.webp',
        "./img/norris2.webp",
        './img/norris3.webp',
        './img/norris4.webp',
        './img/norris5.webp'
    ]

    var item = arr[Math.floor(Math.random() * arr.length)]
    return item
}