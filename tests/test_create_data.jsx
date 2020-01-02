(function () {
    #include './setup.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // createData関数のテスト
    // 実際はフォントによって変化する
    // テストではデフォルトの'MS UI Gothic'を使用
    /*
    createDataの返り値
    パーツごとの配列
    [
        {
            shape: シェイプグループ,
            group_indexes: シェイプグループが内包する穴の開いたシェイプグループのindexの配列
        }
    ]
    */

    // 穴のない文字の分割
    reset();
    var text = '心';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = createData(character);

    var expected = 4; //期待される分割数
    assert(expected, data.length);


    // 穴のある文字の分割
    reset();
    var text = '操';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = createData(character);

    var expected = 5; //期待される分割数
    assert(expected, data.length);

    reset();
}())