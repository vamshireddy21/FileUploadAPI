$(document).ready(function () {
    $("#Submit").click(function (event) {
        //stop submit the form, we will post it manually.
        event.preventDefault();
        postData();
    });
 
});
 
function postData() {
 
    // Get form
    var form = $('#fileUploadForm')[0];
    var data = new FormData(form);
 
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "/api/upload-file",
        data: data,
        processData: false, 
        contentType: false,
        cache: false,
        success: function (data) {
            $("#result").text(data);
        },
        error: function (e) {
            $("#result").text(e.responseText);
        }
    });
}