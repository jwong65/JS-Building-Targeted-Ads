// get user's data
// get user's coordinates


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


// build ad 2


// event listeners
// on load, build ads
