// get user's data
// get user's coordinates
async function getCoords(){
    let position = await new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })

    return [position.coords.latitude, position.coords.longitude]
}

console.log(getCoords());



// get user's time

function getUserTime(){
    const now = new Date()
    return now.getHours()
}
console.log(getUserTime())

function userMealTime(){
    const timeofday = getUserTime() //it retunrs now.getHours()

    if (timeofday>20){
        return 'Late-night snack'
    }
    else if (timeofday >16){
        return 'Dinner'
    }
    else if (timeofday>11)
    {
        return 'Lunch'
    }
    else{
        return 'Breakfast'
    }
}

console.log(userMealTime())

// helper functions
// check time of day


// build ads
// build ad 1
// Build Ad 1:                                                           
function buildAd1(){
    const mealTime = userMealTime()
    let content = document.querySelector('.ad1')
    let inner = document.createElement('p')
    inner.innerHTML = `We've got the best <span>${mealTime}</span> in town`
    content.append(inner)
}
buildAd1()



// build ad 2
// Build Ad 2                                                             
function buildAd2(coordinates){
    const coords = coordinates
    const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z/`
    let content = document.querySelector('.ad2')
    let inner = document.createElement('p')
    inner.innerHTML = `It's time to try our coffee! <span><a href="${href}" target="_blank">We're this close!</a></span>`
    content.append(inner)
}

console.log(buildAd2(getCoords()))



// event listeners
// on load, build ads
// On load, build ads:                                                             
window.onload = async () => {
    buildAd1()
    const coords = await getCoords()
    buildAd2(coords)
}
