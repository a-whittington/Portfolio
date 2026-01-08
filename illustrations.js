const gallery = document.getElementById("gallery")

const displayGallery = (json) => {
    json.forEach(piece => {
        const image = document.createElement("img")
        image.src=piece.localurl
        image.alt= "" + piece.name + " " + piece.blurb

        const imageBox = document.createElement("div")

        const imageName = document.createElement("h5")
        const imageBlurb = document.createElement("p")
        const year = document.createElement("p")
        imageName.innerHTML = piece.name
        imageBlurb.innerHTML = piece.blurb
        year.innerHTML = "" + piece.year

        const textPortion = document.createElement("div")
        textPortion.className = "img_description"
        textPortion.appendChild(imageName)
        textPortion.appendChild(imageBlurb)

        imageBox.className = "img_wrap"
        imageBox.appendChild(image)
        imageBox.appendChild(textPortion)
        gallery.appendChild(imageBox)
    })
}

fetch('./illustrations.json')
    .then(response => response.json())
    .then(json => displayGallery(json))

