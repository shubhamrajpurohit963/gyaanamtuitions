$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    
    $(document).ready(function(){
    $('.slider').slider({
        fullWidth: true,
        height:450,
        duration: 50,
        interval:4000
    });
     });

    $('.parallax').parallax();
    $('.myreviews').carousel({
        numVisible:4,
        shift:55,
        padding:200
    })
});

//custom function to get instance
function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open();
}