function myFunction() {
  var body, count, threads, messages;
  threads = GmailApp.search('is:unread');
  count = threads.length;
  threads.map(function(t) {
    messages = t.getMessages();
    messages.forEach(function(message){
      body = message.getBody().replace(/<br[^>]*>/g, '\n').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/\s\s/g, ' ');
      slack(body);
      message.markRead();
    });
  });

  function slack(message) {
    var mes = message;
    var url = ''; // your slack incoming webhook url
    var payload = {
        'text' : mes,
        'channel' : '#mail',
    };
    var params = {
        'payload' : JSON.stringify(payload)
    };
    var response = UrlFetchApp.fetch(url, params);
  }
}
