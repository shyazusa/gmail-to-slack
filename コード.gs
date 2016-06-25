function myFunction() {
  var body, messages, threads;
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
    var mes, params, payload, response, url;
    mes = message;
    url = 'https://hooks.slack.com/services/hoge/piyo'; // your slack incoming webhook url
    payload = {
        'text' : mes,
        'channel' : '#mail',
    };
    params = {
        'payload' : JSON.stringify(payload)
    };
    response = UrlFetchApp.fetch(url, params);
  }
}
