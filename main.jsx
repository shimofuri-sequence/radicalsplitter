(function () {
    #include './lib/radicalSplitter.jsxinc'

    var comp = app.project.activeItem;
    var shapeLayer = comp.layer(1);
    var root = shapeLayer.property('ADBE Root Vectors Group');

    if (comp === null
        || !(comp instanceof CompItem)) {
        alert('コンポを選択してください');
        return;
    }
    if (comp.selectedLayers.length < 1
        || !(comp.selectedLayers[0] instanceof TextLayer)) {
        alert('テキストレイヤーを選択してください');
        return;
    }

    app.beginUndoGroup('radicalSplitter');

    var start = new Date();

    var layer = comp.selectedLayers[0];
    app.executeCommand(3781);
    var shapeLayer = comp.layer(layer.index - 1);
    var radical_layers = radicalSplitter(shapeLayer);

    shapeLayer.selected = false;
    shapeLayer.enabled = false;
    layer.remove();

    var end = new Date();
    $.writeln(end.getMilliseconds() - start.getMilliseconds(), 'ms');

    app.endUndoGroup();
}());