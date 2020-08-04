$(() => {
  const socket = io();
  $('form').submit(() => {
    socket.emit('MESSAGE', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('MESSAGE', (msg) => {
    $('#messages').append($('<li>').text(msg));
    window.scrollTo(0, document.body.scrollHeight);
  });
});
