/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

function flashRedLights() {
    const lights = document.getElementsByClassName('red');
    const lightsArray = Array.from(lights);
    
    lightsArray.forEach(light => {
        light.classList.contains('lights-on') 
            ? light.classList.remove('lights-on') 
            : light.classList.add('lights-on')
    })
}

function flashBlueLights() {
    const lights = document.getElementsByClassName('blue');
    const lightsArray = Array.from(lights);
    
    lightsArray.forEach(light => {
        light.classList.contains('lights-on') 
            ? light.classList.remove('lights-on') 
            : light.classList.add('lights-on')
    })
}

setInterval(flashBlueLights, 800)

setTimeout(() => {
    setInterval(flashRedLights, 800)
}, 800)

// function flashLights() {
//     const lights = document.getElementsByClassName('lights');
//     const lightsArray = Array.from(lights);
    
//     lightsArray.forEach(light => {
//         light.classList.contains('lights-on') 
//             ? light.classList.remove('lights-on') 
//             : light.classList.add('lights-on')
//     })
// }

// setInterval(flashLights, 800)
