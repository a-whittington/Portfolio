// PORTIONS!
// Main image, title show up on page
// On click in any portion of the div, EXPAND THE FULL THING (SHOW/HIDE button?)
// The full thing: Title, desc/concept, full image collection

const proj_gallery = document.getElementById("proj_gallery")

const displayProjects = (json) => {
    json.forEach(project => {
        const mainImage = document.createElement("img")
        const projGallery = project.gallery
        mainImage.src = "" + project.main_img
        mainImage.alt= "" + project.main_img

        const imageBox = document.createElement("div")

        const projectName = document.createElement("h5")
        const concept = document.createElement("p")
        const showButton = document.createElement("button")
        const fullProject = document.createElement("div")
        fullProject.className = "full_proj"
        fullProject.style.display = "none"

        projGallery.forEach(image => {
            const imgBox = document.createElement("img")
            imgBox.src=image
            imgBox.alt=image
            imgBox.className = "proj_img"
            fullProject.appendChild(imgBox)  
        })
        
        projectName.innerHTML = project.name
        concept.innerHTML = project.blurb

        const textPortion = document.createElement("div")
        textPortion.className = "proj_description"
        textPortion.appendChild(projectName)
        textPortion.appendChild(concept)

        showButton.type = "button"
        showButton.innerHTML = "Show More"
        showButton.addEventListener('click', function() {
            if(fullProject.style.display === "none") {
                fullProject.style.display = "flex"
                showButton.innerHTML = "Show Less"
            } else {
                fullProject.style.display = "none"
                showButton.innerHTML = "Show More"
            }
        })

        imageBox.className = "proj_wrap"
        imageBox.appendChild(mainImage)
        imageBox.appendChild(textPortion)
        imageBox.appendChild(showButton)
        imageBox.appendChild(fullProject)
        proj_gallery.appendChild(imageBox)
    })
}

fetch('./projects.json')
    .then(response => response.json())
    .then(json => displayProjects(json))