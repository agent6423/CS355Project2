$(document).ready(function () {
    $('#createCourseBtn').click( function(){
        event.preventDefault();
        var payload = {
            Num: $('#Num').val(),
            Name: $('#Name').val(),
            MPG: $('#MPG').val(),
            FGP: $('#FGP').val(),
            ThreePP: $('#ThreePP').val(),
            APG: $('#APG').val(),
            RPG: $('#RPG').val(),
            SPG: $('#SPG').val(),
            PPG: $('#PPG').val()


        };

        $.ajax({
            url: $("#create_user_form").attr("action"),
            type: "POST",
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(payload),
            complete: function(data) {
                console.log(data.responseText);
                $('#output').html(data.responseText);
                $('#output').show();
            }
        });
    });
});
