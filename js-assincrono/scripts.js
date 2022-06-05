const url = 'https://thatcopy.pw/catapi/rest/'
const button = document.getElementById('change-cat')
const img = document.getElementById('cat')


const getCats = async () => {
try {
    const data = await fetch(url)
    const json = await data.json()

    return json.webpurl

} catch (e) {
    console.log(e.message)
}

    
}

const loadImg = async () => {
    img.src = await getCats();
}

button.addEventListener('click', loadImg)

loadImg()
