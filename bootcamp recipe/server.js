const express = require('express')
const app = express()
const port = 8080
const path = require('path')
const request = require('request')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get('/recipes/:ingredient', function (req, response) {

    let recipeIngredient = req.params.ingredient


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

    response.send("Ok")
})

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
