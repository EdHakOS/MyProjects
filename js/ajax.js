
$(document).ready(function() {

    $("#s_odessa").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mailer.php'
            , type: 'post'
            , data: {
                id: 'silpo_form',
                firstname: $('input[name="firstname"]').val(),
                email: $('input[name="email"]').val(),
                tel: $('input[name="tel"]').val(),
                msg: $('textarea[name="msg"]').val(),
                forspam: $('input[name="forspam"]').val()
            },
            success: function (res) {
                if(res){
                    $('.mask').show();
                    $('body').append(res);
                    //modal close
                    $('#modal_close_btn , .mask').click(function(){
                        $('.mask').remove();
                        $('#result_modal').remove();
                    })

                }
            }
        });
    });
    $("#form_back").submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mailer.php'
            , type: 'post'
            , data: {
                id: 'form_back',
                firstname: $('input[name="name"]').val(),
                tel: $('input[name="phone"]').val(),
                forspam: $('input[name="forspam"]').val()
            },
            success: function (res) {
                if(res){
                    $('.mask').show();
                    $('body').append(res);
                    //modal close
                    $('#modal_close_btn , .mask').click(function(){
                        $('.mask').remove();
                        $('#result_modal').remove();
                    })
                }
            }
        });
    });

});