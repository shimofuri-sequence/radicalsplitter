(function () {
    #include './setup.jsxinc'
    #include '../lib/misc.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // splitter関数のテスト
    // 実際はテストの結果はフォントによって変化する
    // テストではデフォルトの'MS UI Gothic'を使用

    reset();
    // 作成されたレイヤーがデータと同じ大きさかどうか
    var text = '迯';

    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);
    var character = characters[0];

    var data = createData(character);
    var split = splitter(character);

    for (var i = 0; i < split.length; i++) {
        var layer = split[i];
        var d = data[i];
        var layer_bounds = layer.sourceRectAtTime(layer.inPoint, true);
        var data_bounds = simple_bounds(d.shape.property('ADBE Vector Shape').value.vertices);
        var data_width = data_bounds[2] - data_bounds[0];
        var data_height = data_bounds[3] - data_bounds[1];

        assert(layer_bounds.width, data_width);
        assert(layer_bounds.height, data_height);
    }

    reset();
}())