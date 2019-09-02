class Renderer {

    emptyBody = function () {

    }
    handlebarManager (idhtml, location, data) {
        debugger
        var source = $(idhtml).html();
        var template = Handlebars.compile(source);
        let compiled = template( {data} );
        $(location).empty().append(compiled)
    }
    
    showdata (ingredient) {
        // let ingredient = ($("#inputText").val())
        $.get(`/recipes/${ingredient}`, function (data) {
            // $(".container").empty()
            handlebarManager('#container','.container',data)
            // for (const play of playerlist) {
            //     $(".container").append(`<div>${play.name}</div>`)
                
            // }
            
        })
    }

    render(data) {
        // let ingredient = ($("#inputText").val())


        //invokes all the individual _render methods
        // debugger
        this.handlebarManager('#container','.container',data)
        // this.handlebarManager('#quotecontainer','.quote-container',data.quote)
        
        // this.handlebarManager('#friends','.friends',data.friends)
        // this.handlebarManager('#pokemoncontainer','.pokemon-container',data.pokemons[0])
        // this.handlebarManager('#meattext','.meat-text',data.ipsum[0])

}
} 
