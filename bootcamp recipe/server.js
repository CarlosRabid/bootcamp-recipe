const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const request = require('request')

// const teamToIDs = {
//     "lakers": "1610612747",
//     "warriors": "1610612744",
//     "heat": "1610612748",
//     "suns": "1610612756"
// }



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


// app.get('/teams/:teamName', function (req, response) {
//     // app.get('/teams', function (req, response) {
//     // let teamParam = req.params.teamName
//     let teamParam = req.params.teamName
//     let resultado =  teamToIDs[teamParam]

//     request(`http://data.nba.net/10s/prod/v1/2018/players.json`, function (errror, res, data) {
//         let processed = JSON.parse(data)
//         let arrayPlayers = []
//         let result = processed.league.standard.filter(plyr => plyr.isActive && plyr.teamId==resultado)
//         console.log(result)
//         result.forEach(pross => {
//             let player = {
//                 name: pross.firstName+" "+pross.lastName,
//                 // last: pross.lastName,
//                 pic: `https://nba-players.herokuapp.com/players/${pross.lastName.toLowerCase()}/${pross.firstName.toLowerCase()}`
//             }

//             arrayPlayers.push(player)

//         });
//         // console.log(arrayPlayers)
//         response.send(arrayPlayers)
//     })

// })

app.get('/recipes/:ingredient', function (req, response) {
    // app.get('/teams', function (req, response) {
    // let teamParam = req.params.teamName
    let recipeIngredient = req.params.ingredient
    // let resultado =  teamToIDs[teamParam]

    request(`https://recipes-goodness.herokuapp.com/recipes/${recipeIngredient}`, function (errror, res, data) {
        let processed = JSON.parse(data)
        let arrayRecipes = []
        let result = processed.results
        // console.log(processed)
        result.forEach(pross => {
            let food = {
                title: pross.title,
                ingredients: pross.ingredients,
                pic: pross.thumbnail,
                video: pross.href
            }

            arrayRecipes.push(food)

        });
        console.log(arrayRecipes)
        response.send(arrayRecipes)
    })

})

app.get('/sanity', function (request, response) {
    // console.log("someone into our servers")
    response.send("Ok")
})

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
