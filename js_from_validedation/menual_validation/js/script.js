
$(document).ready(function(){
    $("#myForm").validate({
        rules: {
            uname: {
                required: true,
                step: 10
            }
        },
        
    });
});