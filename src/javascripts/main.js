$(function(){
  Handlebars.registerHelper('elipses', function(description) {
      return description.length > 100 ? description.substr(0,99) + '...' : description;
  });

  Handlebars.registerHelper('date', function(date) {
      var newDate = moment(date);
      return newDate.format('MMMM D, YYYY');
  });


  $.ajax({
      url: "https://api.github.com/users/rovalles/repos",
      type: 'GET',
      dataType: 'jsonp',
      processDataBoolean: true,
      success: function(data){
          console.log(data);
          var id = $("#github");
              source = id.html(),
              template = Handlebars.compile(source);
          id.replaceWith(template(data));
      }
  });
});
