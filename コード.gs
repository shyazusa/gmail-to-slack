function myFunction() {
  var body, threads, messages;
  threads = GmailApp.search('is:unread');
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
    var url = 'https://hooks.slack.com/services/hoge/piyo'; // your slack incoming webhook url
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
