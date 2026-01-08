const commissions = document.getElementById("commissions")
const commissionMenu = document.createElement("div")
commissionMenu.style.display = "none"

const commissionInfo = document.createElement("div")
const commissionGallery = [
    "images/CommissionInfo/1.png",
    "images/CommissionInfo/2.png",
    "images/CommissionInfo/3.png",
    "images/CommissionInfo/4.png",
    "images/CommissionInfo/5.png",
    "images/CommissionInfo/6.png"
]
const commissionTypes = [
    "Head/Bust",
    "Half Body",
    "Full Body",
    "Portrait",
    "Miscellaneous",
    "Pet Portrait"
]
const commissionDetails = [
    "Base price $10 for sketch, $15 for lineart, $20 for flat colors, and $30 for full render",
    "Base price $15 for sketch, $20 for lineart, $30 for flat colors, and $40 for full render",
    "Base price $15 for sketch, $25 for lineart, $45 for flat colors, and $55 for full render",
    "Prices range from $100 to $250 depending on complexity and other factors. Photo references preferred",
    "Have an idea that doesn't fit these other categories? Email me!",
    "Prices range from $100 to $250 depending on complexity and other factors. Photo references preferred"
]

const gallery = document.createElement("div")

gallery.className = "commissionGallery"

const commObj = [{},{},{},{},{},{}]
let index = 0
commObj.forEach(obj => {
    obj.img = commissionGallery[index]
    obj.type = commissionTypes[index]
    obj.desc = commissionDetails[index]
    index = index + 1
})

commObj.forEach(obj => {
    const imageBox = document.createElement("div")
    imageBox.className = "img_wrap"
    const textPortion = document.createElement("div")
    textPortion.className = "img_description"
    const commType = document.createElement("h5")
    const commDetails = document.createElement("p")
    commType.innerHTML = obj.type
    commDetails.innerHTML = obj.desc
    const img = document.createElement("img")
    img.src = obj.img

    textPortion.appendChild(commType)
    textPortion.appendChild(commDetails)

    imageBox.appendChild(img)
    imageBox.appendChild(textPortion)
    gallery.appendChild(imageBox)
})

const type = document.createElement("h5")
const info = document.createElement("p")

const showButton = document.createElement("button");
showButton.type = "button"
showButton.innerHTML = "Show Info"
showButton.addEventListener('click', function() {
    if (commissionMenu.style.display === "none") {
        commissionMenu.style.display = "flex"
        showButton.innerHTML = "Hide Info"
    } else {
        commissionMenu.style.display = "none"
        showButton.innerHTML = "Show Info"
    }
})

commissionMenu.appendChild(gallery)

commissions.appendChild(showButton)
commissions.appendChild(commissionMenu)