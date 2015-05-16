$(document).ready(function () {
    $('#createCourseBtn').click( function(){
        event.preventDefault();
        var payload = {
            Num: $('#Num').val(),
            Name: $('#Name').val(),
            Minutes: $('#Minutes').val(),
            FG: $('#FG').val(),
            ThreeP: $('#ThreeP').val(),
            Assists: $('#Assists').val(),
            Rebounds: $('#Rebounds').val(),
            Steals: $('#Steals').val(),
            Fouls: $('#Fouls').val(),
            Turnovers: $('#Turnovers').val(),
            Points: $('#Points').val()


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
