var videos = [
    {
        title : "Deadlock gameplay total real bro",
        content : "eido destroys little kids in casual"
    },
    {
        title : "super caulk ball torture in infernum calamity no hit hardcore with no armor or acessories lmao xdd",
        content : "easy thing bro, did it in 2 hours"
    },
    {
        title : "getting literally all tier 4s of the game and destroying your mum",
        content : "the saac gameplay at it again boys"
    }
]

const container = document.getElementById('container')

for (let i of videos) {
    const div = document.createElement("div")

    const p = document.createElement("p")
    p.textContent = i.content

    const h2 = document.createElement("h2")
    h2.textContent = i.title

    div.appendChild(h2)
    div.appendChild(p)

    container.appendChild(div)
}