$(document).ready(function(){
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
