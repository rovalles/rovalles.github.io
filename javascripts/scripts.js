$(document).ready(function(){
    $.ajax({
        url: "https://api.github.com/users/rovalles/repos",
        type: 'GET',
        dataType: 'jsonp',
        processDataBoolean: true,
        success: function(data){
            var id = $("#github");
                source = id.html(),
                template = Handlebars.compile(source);
            id.replaceWith(template(data));
        }
    });
});
