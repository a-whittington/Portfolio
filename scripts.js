const footer = document.getElementById("footer");

const artCopyright = document.createElement("p")
const siteCopyright = document.createElement("p")

const currentYear = new Date().getFullYear();
const copy = "&copy;"

artCopyright.innerHTML = `All images sitewide ${copy} ${currentYear} A. Whittington. All Rights Reserved`
// siteCopyright.innerHTML = `Site created by `

// carterSite = document.createElement("a")
// carterSite.href = "https://github.com/carthomp88"
// carterSite.target = "_blank"
// carterSite.innerHTML = `Carter Thompson ${copy} ${currentYear}`
// siteCopyright.appendChild(carterSite)

footer.appendChild(artCopyright)
// footer.appendChild(siteCopyright)