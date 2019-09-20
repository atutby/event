$('#inputName').on('input', function (event) {
    $('#textHolder').text($(this).val())

    // event.preventDefault()

    var keyCode = event.originalEvent.data.charCodeAt(0);

    if (keyCode == 49) {
        // alert('It was ESCAPE key! ')
        $('#textHolder').text('')
    }

    console.log(keyCode)

    console.log('================text=====================')

})