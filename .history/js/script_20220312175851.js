$(document).ready(function () {

    var hour = 0;
    var min = 0;
    var sec = 0;
    var mil_sec = 0;
    
    $("#hour").html(hour);
    $("#min").html(min);
    $("#sec").html(sec);
    $("#mil_sec").html(mil_sec);

    $("#start").click(function () {
        timer = setInterval(function () {
            $("#hour").html(hour);
            $("#min").html(min);
            $("#sec").html(sec);
            $("#mil_sec").html(mil_sec)
            mil_sec++;
            if (mil_sec == 10) {
                sec = 0;
                sec++;
            };
        },100);
    });
    
    });