// Generated by CoffeeScript 1.3.1
(function() {

  define(["smog/server", "templates/connect", "smog/notify"], function(server, templ, notify) {
    return function() {
      $('#content').append(templ());
      $('#connect-modal').modal().css({
        'margin-left': function() {
          return -($(this).width() / 2);
        }
      });
      return $('#connect-button').click(function() {
        var database, host, port;
        host = $('#host').val();
        port = parseInt($('#port').val());
        database = $('#database').val();
        return server.connect(host, port, database, function(err, okay) {
          if (err != null) {
            console.log(err);
            return notify.error("Connection error: " + err);
          } else {
            $('#connect-modal').modal('hide');
            return window.location.hash = '#/home';
          }
        });
      });
    };
  });

}).call(this);