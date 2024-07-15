function criptografar() {
    const input = document.getElementById('inputText').value;
    const btn = document.getElementById('copyButton')
    const criptografadoText = input.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

        resultado(criptografadoText);

    btn.removeAttribute('hidden')
    limparInput()
    
}

function descriptografar() {
    const input = document.getElementById('inputText').value;
    const btn = document.getElementById('copyButton')
    const descriptografadoText = input.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

        resultado(descriptografadoText);

    btn.removeAttribute('hidden')
    limparInput()
}

function copiarTexto() {
    const resultText = document.getElementById('resultText');
    if (resultText) {
        const range = document.createRange();
        range.selectNode(resultText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Texto copiado para a área de transferência!');
    } else {
        alert('Nenhum texto para copiar!');
    }
}

function resultado(text) {
    const sidebar = document.querySelector('.containertexto');
    sidebar.innerHTML = '';

    let resultText = document.createElement('p');
    resultText.id = 'resultText';
    resultText.textContent = text;
    sidebar.appendChild(resultText);
}

function limparInput() {
    document.getElementById('inputText').value = '';
}