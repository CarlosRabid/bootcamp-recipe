class Renderer {

    emptyBody = function () {

    }
    handlebarManager (idhtml, location, data) {
        var source = $(idhtml).html();
        var template = Handlebars.compile(source);
        let compiled = template( {data} );
        $(location).empty().append(compiled)
    }
    
    showdata (ingredient) {

        $.get(`/recipes/${ingredient}`, function (data) {
            // $(".container").empty()
            handlebarManager('#container','.container',data)

            
        })
    }

    render(data) {

        this.handlebarManager('#container','.container',data)

}
} 
