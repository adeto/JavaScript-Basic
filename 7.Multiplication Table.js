function table(input) {
    let n = Number(input[0]);
    let html = '<table border="1">\n';
    html += '<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        html += `<th>${i}</th>`;
    }
    html += '</tr>\n';
    for (let i = 1; i <= n; i++) {
        html += `<tr><th>${i}</th><td>${i}</td>`;
        for (let j = 2; j <= n; j++) {
            html += `<td>${i * j}</td>`
        }
        html += '</tr>\n';
    }
    html += '</table>';
    return html;
}