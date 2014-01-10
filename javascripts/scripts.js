$(document).ready(function(){
    // $.ajax({
    //     //url: "https://www.googleapis.com/plus/v1/people/111028112655015495623/activities/public",
    //     url: "https://www.googleapis.com/plus/v1/people/111028112655015495623",
    //     type: 'GET',
    //     dataType: 'jsonp',
    //     data: {
    //         key: 'AIzaSyDjhpzZMiHNneepsuQnrK1bogymTC_2jDg',
    //         //fields: 'items(object/content)',
    //         //fields: 'items(object/content)',
    //         //maxResults: '1',
    //         //callback: '?'
    //     },
    //     processDataBoolean: true,
    //     success: function(data){
    //         console.log(data);
    //         //data.image.url = data.image.url.replace(/50$/, "200");
    //         var id = $("#user");
    //             source = id.html(),
    //             template = Handlebars.compile(source);
    //         id.replaceWith(template(data));
    //     }
    // });
    Handlebars.registerHelper('elipses', function(description) {
        return description.length > 30 ? description.substr(0,29) + '...' : description;
    });

    Handlebars.registerHelper('date', function(date) {
        var newDate = new Date(date);
        return newDate.getDay();
    });


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
