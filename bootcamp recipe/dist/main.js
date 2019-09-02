

render = new Renderer()


let showdata = function () {
    let ingredient = ($("#inputText").val())

    $.get(`/recipes/${ingredient}`, function (data) {
        // $(".container").empty()
        render.handlebarManager('#container', '.container', data)

    })
}

$(".container").on("click", ".thumb", function () {
    debugger
    let ingItems = $(this).closest("div").find("li").text()
    console.log(ingItems)

}
)