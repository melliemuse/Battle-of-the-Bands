let bandNumber = 0
const takeNumber = function(band) {
    for (let i = 0; i <= bandNumber; i++) {
        bandNumber += 1
        return `${bandNumber}. ${band}`
    }
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

