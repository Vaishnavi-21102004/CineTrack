

const loadData = () => {
    try {
        let data = JSON.parse(localStorage.getItem("search-res"))
        return data
    } catch (error) {
        console.log(error)
    }
}



document.addEventListener("DOMContentLoaded",()=>{
    let data = loadData()
    let poster = document.querySelector("#poster")
    let title = document.querySelector(".title")
    let year = document.querySelector(".year")
    let Actors = document.querySelector(".Actors")
    let Plot = document.querySelector(".Plot")
    let Director =document.querySelector(".Director")
    let Writer = document.querySelector(".Writer")
    let rating = document.querySelector(".rating")




    poster.src = data.Poster
    title.innerText = data.Title
    year.innerText = `Year: ${data.Year}`
    Actors.innerText = `Actors: ${data.Actors}`
    Plot.innerText = data.Plot
    Director.innerText = `Director: ${data.Director}`
    Writer.innerText = `Writer: ${data.Writer}`
    rating.innerHTML = `${data.imdbRating} <span>⭐</span>`
})