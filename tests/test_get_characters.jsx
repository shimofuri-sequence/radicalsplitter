(function () {
    #include './setup.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // テキストレイヤーの文字を文字数分取得できるかどうかのテスト
    // 実際はフォントによって変化する
    // テストではデフォルトの'MS UI Gothic'を使用
    /*
        getCharactersはシェイプ化されたコンテンツ直下のグループの配列を返す
    */

    reset();
    // 一般的な単語
    var text = '焼肉';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    assert(text.length, characters.length);

    reset();
    // 空白はシェイプに変換されないので数には含まれない
    var text = 'hoge foo　piyo';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    text = text.replace(/[\s　]/g, '');
    assert(text.length, characters.length);

    reset();
}())