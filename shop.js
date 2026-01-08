const proj_gallery = document.getElementById("proj_gallery")

const displayProjects = (json) => {
    json.forEach(project => {
        const mainImage = document.createElement("img")
        const projGallery = project.gallery
        mainImage.src = "" + project.main_img
        mainImage.alt= "" + project.main_img

        const imageBox = document.createElement("div")

        const printName = document.createElement("h5")
        const blurb = document.createElement("p")
        const showButton = document.createElement("button")
        const eBayurl = document.createElement("a")
        eBayurl.innerHTML = "Buy Here"
        eBayurl.href = project.eBayurl
        eBayurl.target = "_blank"
        eBayurl.className = "ebay_link"
        blurb.innerHTML = project.blurb
        const fullPrint = document.createElement("div")
        fullPrint.className = "full_proj"

        projGallery.forEach(image => {
            const imgBox = document.createElement("img")
            imgBox.src=image
            imgBox.alt=image
            imgBox.className = "print_img"
            fullPrint.appendChild(imgBox)  
        })

        fullPrint.appendChild(blurb)
        if (project.eBayurl === "") ;
        else fullPrint.appendChild(eBayurl)
        fullPrint.style.display = "none"
        
        printName.innerHTML = project.name
       

        const textPortion = document.createElement("div")
        textPortion.className = "proj_description"
        textPortion.appendChild(printName)

        showButton.type = "button"
        showButton.innerHTML = "Show More"
        showButton.addEventListener('click', function() {
            if(fullPrint.style.display === "none") {
                fullPrint.style.display = "flex"
                showButton.innerHTML = "Show Less"
            } else {
                fullPrint.style.display = "none"
                showButton.innerHTML = "Show More"
            }
        })

        imageBox.className = "print_wrap"
        imageBox.appendChild(mainImage)
        imageBox.appendChild(textPortion)
        imageBox.appendChild(showButton)
        imageBox.appendChild(fullPrint)
        proj_gallery.appendChild(imageBox)
    })
}

fetch('./shop.json')
    .then(response => response.json())
    .then(json => displayProjects(json))

