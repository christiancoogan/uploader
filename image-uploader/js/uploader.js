$(function() {
    var imageUi = new ImageUi();
    var progressDialog = new ProgressDialog(imageUi);
    var dropHandler = new DropHandler($(document), progressDialog);
    
    imageUi.fetchImages();
    $(document).tooltip({
        items: ".upload_progress_label",
        content: function() {
            return $(this).attr("title")
        }
    });
});