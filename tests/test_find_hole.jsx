(function () {
    #include './setup.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // findHoleShape関数のテスト
    // 実際はフォントによって変化する
    // テストではデフォルトの'MS UI Gothic'を使用
    /*
    findHoleShapeの返り値
    {
        hole_shapes: 穴のシェイプの配列,
        fill_shapes: 穴ではないシェイプグループの配列,
    }
    */

    // 穴がある文字
    reset();
    var text = '口';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = findHoleShape(character);

    var expected_hole_count = 1;
    var expected_fill_count = 1;
    assert(expected_hole_count, data.hole_shapes.length);
    assert(expected_fill_count, data.fill_shapes.length);

    // 穴のない文字
    reset();
    var text = '川';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = findHoleShape(character);

    var expected_hole_count = 0;
    var expected_fill_count = 3;
    assert(expected_hole_count, data.hole_shapes.length);
    assert(expected_fill_count, data.fill_shapes.length);

    // 重なるような穴がある文字
    reset();
    var text = '回';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = findHoleShape(character);

    var expected_hole_count = 2;
    var expected_fill_count = 2;
    assert(expected_hole_count, data.hole_shapes.length);
    assert(expected_fill_count, data.fill_shapes.length);

    // 複雑に重なるような穴がある文字
    reset();
    var text = '道';
    var shapeLayer = createShapelayer(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    var character = characters[0];
    var data = findHoleShape(character);

    var expected_hole_count = 3;
    var expected_fill_count = 3;
    assert(expected_hole_count, data.hole_shapes.length);
    assert(expected_fill_count, data.fill_shapes.length);

    reset();
}())