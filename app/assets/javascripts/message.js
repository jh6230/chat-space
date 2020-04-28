$(function(){
  function buildHTML(message){
    if (message.image){
      var html = `<div class='message'>
                    <div class='user-info'>
                      <p class='user-name'>
                        ${message.user_name}
                      </p>
                      <p class='post-time'>
                        ${message.created_at}
                      </p>
                    </div>
                      <p class='message-text'>
                        ${message.body}
                      <img class="lower-message__image" src = ${message.image} >
                      </p>
                    </div>`
              return html;
    }else{
      var html = `<div class='message'>
                   <div class='user-info'>
                    <p class='user-name'>
                    ${message.user_name}
                    </p>
                    <p class='post-time'>
                    ${message.created_at}
                    </p>
                  </div>
                    <p class='message-text'>
                      ${message.body}
                    </p>
                  </div>`
              return html;
    };
  }

  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
  $.ajax({
    url: url,
    type: 'POST',
    data: formData,
    dataType: 'json',
    processData:false,
    contentType: false
  })
  .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__messages').append(html);
      $('.chat-main__messages').animate({scrollTop: $('.chat-main__messages')[0].scrollHeight}); 
      $('form')[0].reset();
      $('.submit-btn').prop('disabled', false);
  })
  .fail(function(){
      alert('メッセージを入力してください');
      $('.submit-btn').prop('disabled', false);

  })
})
});