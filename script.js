// JSONファイルをfetchで取得
fetch('./data.json')
.then(response => response.json())
.then(data => {
    // 取得したデータを変数に格納
    const elements = data.elements;

    // コンテンツを追加する対象の要素を取得
    const contentDiv = document.getElementById('content');
    const styleTag = document.getElementById('dynamic-style');

    // JSONデータの "html" と "css" を動的に挿入
    elements.forEach(element => {
        // HTMLの挿入
        contentDiv.innerHTML += element.html;

        // CSSの挿入
        styleTag.innerHTML += element.css;
    });
})
.catch(error => console.error('エラーが発生しました:', error));