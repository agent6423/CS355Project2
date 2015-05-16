$(document).ready(function () {
    $('#createCourseBtn').click( function(){
        event.preventDefault();
        var payload = {
            PositionID: $('#PositionID').val(),
            Position: $('#Position').val(),
            Starter: $('#Starter').val(),
            Second: $('#Second').val(),
            Third: $('#Third').val()

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
