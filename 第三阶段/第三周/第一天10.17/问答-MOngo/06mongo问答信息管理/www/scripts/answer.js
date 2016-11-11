var petname = $.cookie('petname')

//console.log(petname)
var ids = $.cookie('ids')
//console.log(ids)
if(petname){
    $('.dropdown-toggle').find('span').last().text(petname)
}
$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/answers/'+ ids, data, function(res){
        console.log(res)
        //location.href = '/'
        if(res.code == 'success'){
            $('.modal').modal('show')
            $('.modal-body').html(res.message)
            $('.btn-default').click(function () {
                location.href = '/'
            })
        }
    })
})