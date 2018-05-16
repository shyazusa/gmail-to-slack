# [Gmail-to-slack](https://shyazusa.github.io/gmail-to-slack/)

Gmailの未読メールの本文をSlackに通知して既読処理してくれるGoogle Apps Scriptです。  
chatworkに飛ばしたい方はコチラ! [shyazusa/gmail-to-chatwork](https://github.com/shyazusa/gmail-to-chatwork)

## 使用手順

1. Slackのincoming webhookをオンにして，URLコピるなりしてメモる
2. `code.gs`内でchannel,urlの設定をする  
  `#general`に流れてくれれば良いのであれば設定変える必要はないけれど，自分は`#mail`というチャンネルに流したかったので以下のように設定。

  ```diff
-   channel = '#general' // your slack channel
+   channel = '#mail' // your slack channel
-   url = 'https://hooks.slack.com/services/hoge/piyo'; // your slack incoming webhook url
+   url = 'https://hooks.slack.com/services/AAABBBCCC/AAABBBCCC/AAABBBCCCDDDEEEFFFGGGHHH'; // your slack incoming webhook url
```

3. もしも自分に@したい場合は`slack()`内も変更を加える  
  `'text' : message,`をコメントアウトして，`// 'text' : '<@shy_azusa>: ' + message,`のコメントアウトを解除する。  
  `@shy_azusa`のところも，通知したい人のslack nameに変更してね。

  ```diff
-       'text' : message,
+       // 'text' : message,
            // @ is ↓ change your slack account, remove comment out, and ↑ comment out
-       // 'text' : '<@shy_azusa>: ' + message,
+       'text' : '<@shy_azusa>: ' + message,
```

4. Googleスプレッドシートを新規作成
5. ツール → スクリプトエディタ
6. コード記述欄に出来上がった`code.gs`をペースト，保存
7. Google Apps Scriptで定期実行を設定
    ![image](https://user-images.githubusercontent.com/10899437/34185722-5d8e062a-e56a-11e7-9f49-4a630a29b6aa.png)

以上デス。
