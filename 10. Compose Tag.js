function compose(){
    let html = '';
    let Img = 'smiley.gif';
    let alt = 'Smiley Face';
    let a = '"';
    html += `<img src=`+a+`${Img}` + a + ` alt=`+a+`${alt}`+ a;

    html += '>';
    return html;
}
compose(['smiley.gif', 'Smiley Face'])