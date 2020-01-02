(function () {
    #include './setup.jsxinc'
    #include '../lib/misc.jsxinc'
    #include '../lib/radicalSplitter.jsxinc'

    // グループを色付けするテスト。目視で確認

    reset();
    var text = '';
    text += '疔疚疝疫疥疣痂疳痃疵疾疽症\n'
    text += '疹疸疼疲病疱痍痕痔痊痒痙痣\n';
    text += '痩痛痘痞痢痾痿痼瘁痰痴痹痺\n';
    text += '痲痳瘧瘋瘉瘍瘟瘠瘦痩瘡瘢瘤\n';
    text += '瘴瘰瘻癇癌癈療癘癆癜癖癒癒\n';
    text += '癡痴癢癨癪癩癧癭癬癰癲癴\n';

    var shapeLayer = createShapelayer_fillText(text);
    var root = shapeLayer.property('ADBE Root Vectors Group');
    var characters = getCharacters(root);

    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];

        var split = splitter(character);
        for (var j = 0; j < split.length; j++) {
            var layer = split[j];
            colorized_outline(layer)
        }
    }
    shapeLayer.selected = false;
    shapeLayer.enabled = false;

}())