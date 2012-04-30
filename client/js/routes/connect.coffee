define ["smog/server", "templates/connect", "smog/notify"], (server, templ, notify) ->
  ->
    $('#content').append templ()
    $('#connect-modal').modal().css
      'margin-top': -> -($(@).height() / 2)
      'margin-left': -> -($(@).width() / 2)


    $('#connect-button').click ->
      host = $('#host').val()
      port = parseInt $('#port').val()
      database = $('#database').val()

      server.connect host, port, database, (err, okay) ->
        if err?
          console.log err
          notify.error "Connection error: #{err}"
        else
          $('#connect-modal').modal 'hide'
          window.location.hash = '#/home'