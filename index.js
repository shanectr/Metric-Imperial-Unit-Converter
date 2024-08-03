const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
const subResultsLengthEl = document.getElementById("sub-results-length")
const subResultsVolumeEl = document.getElementById("sub-results-volume")
const subResultsMassEl = document.getElementById("sub-results-mass")

buttonEl.addEventListener("click", function() {
    let input = inputEl.value
    let meterToFeet = (input * 3.281).toFixed(3)
    let feetToMeter = (input / 3.281).toFixed(3)
    let literToGallon = (input * .264).toFixed(3)
    let gallonToLiter = (input / .264).toFixed(3)
    let kiloToPound = (input * 2.204).toFixed(3)
    let poundToKilo = (input / 2.204).toFixed(3)

    subResultsLengthEl.textContent = `${input} meters = ${meterToFeet} feet | ${input} feet = ${feetToMeter} meters`
    subResultsVolumeEl.textContent = `${input} liters = ${literToGallon} gallons | ${input} gallons = ${gallonToLiter} liters`
    subResultsMassEl.textContent = `${input} kilos = ${kiloToPound} pounds | ${input} pounds = ${poundToKilo} kilos`
})
