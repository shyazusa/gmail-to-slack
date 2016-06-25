# gmail-to-slack

Gmailの未読メールの本文をSlackに通知して既読処理してくれるGoogle Apps Scriptです．  

## 使用手順

1. Slackのincoming webhookをオンにして，URLコピるなりしてメモる
2. `コード.gs`内でchannel,urlの設定をする  
  `#general`に流れてくれれば良いのであれば設定変える必要はないけれど，自分は`#mail`というチャンネルに流したかったので以下のように設定．

  ```diff
-   channel = '#general' // your slack channel
+   channel = '#mail' // your slack channel
-   url = 'https://hooks.slack.com/services/hoge/piyo'; // your slack incoming webhook url
+   url = 'https://hooks.slack.com/services/AAABBBCCC/AAABBBCCC/AAABBBCCCDDDEEEFFFGGGHHH'; // your slack incoming webhook url
```

3. もしも自分に@したい場合は`slack()`内も変更を加える  
  `'text' : mes,`をコメントアウトして，`// 'text' : '<@shy_azusa>: ' + mes,`のコメントアウトを解除する．  
  `@shy_azusa`のところも，通知したい人のslack nameに変更してね．

  ```diff
-         'text' : mes,
+         // 'text' : mes,
              // @ is ↓ change your slack account, remove comment out, and ↑ comment out
-         // 'text' : '<@shy_azusa>: ' + mes,
+         'text' : '<@shy_azusa>: ' + mes,
```

4. Google Apps Scriptで定期実行を設定する
