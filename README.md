# radicalSplitter

テキストレイヤーを部首などの、形状がが離れているグループごとに分割し、新しくレイヤーを作成します。

γしめぢ@gummasimediさんによるGG分解が面白そうだったので、自分でも作ってみました。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">「GG 文解」というテキストをシェイプにするスクリプトを作成しました。<br>構造分解や一括変換、プリコンポーズ等に対応しています。<a href="https://twitter.com/hashtag/AfterEffects?src=hash&amp;ref_src=twsrc%5Etfw">#AfterEffects</a><a href="https://t.co/tVNU5LnYPK">https://t.co/tVNU5LnYPK</a> <a href="https://t.co/4plobITY0g">pic.twitter.com/4plobITY0g</a></p>&mdash; γしめぢ (@gummasimedi) <a href="https://twitter.com/gummasimedi/status/1190626096036773888?ref_src=twsrc%5Etfw">November 2, 2019</a></blockquote>


## 参考

内外判定のアルゴリズムは以下のC++のコードを流用してjavascriptに書き換えたものを使用しました。

https://www.hiramine.com/programming/graphics/2d_ispointinpolygon.html

GG Bunkaiはaescriptsからもダウンロードできます

[GG Bunkai - Text to Shape Layer Converter](https://aescripts.com/gg-bunkai/)

## testについて

testsフォルダにちょっとしたテストスクリプトが入っています。いくつかのテストスクリプトは実行すると、強制的に新規プロジェクトが作成されてテストが実行されますので注意してください。

test_complex_colorize1.jsxは目視で色分けされたパーツを見るようになっています。
