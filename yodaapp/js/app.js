$(document).ready(function () {
        $("#go-btn").click(function() {        
        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda',
            type: 'GET',
            data: {sentence: $("#text").val()},
            datatype: 'json',
            success: function (data) {
                alert(data);
            },
            error: function (err) {
                alert("Something's wrong!");
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "NumberGoesHere");
            }
        });

    });
});
