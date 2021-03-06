$(document).ready(function () {
    $('#createCourseBtn').click( function(){
        event.preventDefault();
        var payload = {
            Num: $('#Num').val(),
            Name: $('#Name').val(),
            Position: $('#Position').val(),
            Age: $('#Age').val(),
            Height: $('#Height').val(),
            Weight: $('#Weight').val(),
            College: $('#College').val()

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
