let handlebarManager= function (idhtml, location, data) {
    debugger
    var source = $(idhtml).html();
    var template = Handlebars.compile(source);
    let compiled = template( {data} );
    $(location).empty().append(compiled)
}

let showdata = function () {
    let inputTeam = ($("#inputText").val())
    $.get(`/teams/${inputTeam}`, function (data) {
        // $(".container").empty()
        handlebarManager('#container','.container',data)
        // for (const play of playerlist) {
        //     $(".container").append(`<div>${play.name}</div>`)
            
        // }
        
    })

}