
// let handlebarManager= function (idhtml, location, data) {
//     debugger
//     var source = $(idhtml).html();
//     var template = Handlebars.compile(source);
//     let compiled = template( {data} );
//     $(location).empty().append(compiled)
// }

// let showdata = function () {
//     let ingredient = ($("#inputText").val())
//     $.get(`/recipes/${ingredient}`, function (data) {
//         // $(".container").empty()
//         handlebarManager('#container','.container',data)
//         // for (const play of playerlist) {
//         //     $(".container").append(`<div>${play.name}</div>`)
            
//         // }
        
//     })
// }

render = new Renderer()


let showdata= function() {
    let ingredient = ($("#inputText").val())
    debugger

    $.get(`/recipes/${ingredient}`, function (data) {
        // $(".container").empty()
        render.handlebarManager('#container','.container',data)

})
}