const TOP_MOVIES = [
    "Dangal",
    "Baahubali_2",
    "Jawan",
    "Pathaan",
    "Kalki",
    "Mother_India",
    "Pyaasa"
]



// serch box part

let input = document.querySelector("#serch-box");
let serchBtn = document.querySelector(".btn")


// loader

let loader = document.querySelector(".loader")
let loaderText = document.querySelector(".loader-text")




const loadMovie = async (movie) => {
    try {
        let responce = await fetch(`https://www.omdbapi.com/?apikey=bc101634&t=${movie}`)
        let data = await responce.json()
        return data
    } catch (error) {
        console.log(error)
        return {}
    }
}



serchBtn.addEventListener("click", async () => {
    if (!input.value) {
        return
    } else {
        loader.style.display = "flex"
        loaderText.innerText = `Loading result for ${input.value}...`
        let data = await loadMovie(input.value)

        console.log(data)

        if (data.Response === "False") {
           loaderText.innerText = `opps result not found..`

           setTimeout(() => {
            loader.style.display = "none"
           }, 2000);

        } else {
            loader.style.display = "none"
            await localStorage.setItem("search-res", JSON.stringify(data))
            window.location.href = "./result.html"
        }
    }
})


// main hero container effect...

let maindiv = document.querySelector('.hero-container');
let img = document.querySelector("#main-img")
let follower = document.querySelector(".follower")


maindiv.addEventListener("mousemove", (e) => {
    let xaxis = (e.pageX - window.innerWidth / 10) / 50;
    let yaxis = (e.pageY - window.innerHeight / 10) / 20;
    img.style.transform = `rotateX(${yaxis}deg) rotateY(${xaxis}deg)`;
})


maindiv.addEventListener("mousemove", (e) => {
    follower.style.left = `${e.pageX}px`
    follower.style.top = `${e.pageY}px`
})