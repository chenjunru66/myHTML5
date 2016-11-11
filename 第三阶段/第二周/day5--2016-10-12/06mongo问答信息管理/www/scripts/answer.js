var petname = $.cookie('petname')
if(petname){
    $('.dropdown-toggle').find('span').last().text(petname)
}
$('form').submit(function(ev){
    ev.preventDefault()
    var data = $(this).serialize()
    $.post('/answers', data, function(res){
        console.log(res)
        location.href = '/'
    })
})