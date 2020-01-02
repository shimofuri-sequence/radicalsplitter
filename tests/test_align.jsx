(function () {
    #include './setup.jsxinc'
    #include './difference.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // alignShape関数のテスト
    // 差分をとって比較する

    reset();
    var text = '国際空港';
    var shapeLayer = createRandomTransform_Shapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var layers = [];
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];

        var split = splitter(character);
        layers = layers.concat(split);
        for (var j = 0; j < split.length; j++) {
            alignShape(split[j]);
        }
    }

    // 差分でテストするため、差分用のプリコンポを作る
    var indexes = [];
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        indexes.push(layer.index)
    }

    var comp = shapeLayer.containingComp;
    comp.layers.precompose(indexes, 'split', true);
    var origin_indexes = [shapeLayer.index];
    comp.layers.precompose(origin_indexes, 'origin', true);

    var split_comp_layer = comp.layer(indexes[0]);
    var origincomp_layer = comp.layer(origin_indexes[0]);

    // 差分テスト
    var result = test_difference(split_comp_layer, origincomp_layer);
    assert('0,0,0', result);

    reset();
}())