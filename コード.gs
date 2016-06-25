function myFunction() {
  var body, channel, messages, threads, url;

  channel = '#general' // your slack channel
  url = 'https://hooks.slack.com/services/hoge/piyo'; // your slack incoming webhook url

  threads = GmailApp.search('is:unread');
  threads.map(function(t) {
    messages = t.getMessages();
    messages.forEach(function(message){
      body = message.getBody().replace(/<br[^>]*>/g, '\n').replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').replace(/\s\s/g, ' ');
      slack(body, channel, url);
      message.markRead();
    });
  });

  function slack(message, channel, url) {
    var mes, params, payload, response;
    mes = message;
    payload = {
        'text' : mes,
        'channel' : channel,
    };
    params = {
        'payload' : JSON.stringify(payload)
    };
    response = UrlFetchApp.fetch(url, params);
  }
}
