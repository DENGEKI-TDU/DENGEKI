$("#s-menu").on("load", function(){
    try {
        $(this).height(0);
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
    } catch (e) {
    }
});
$("#s-menu").trigger("load");