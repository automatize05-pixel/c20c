const fs = require('fs');

const files = ['index.html', 'sobre.html', 'servicos.html', 'portfolio.html', 'contato.html'];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    
    // 1. Adicionar o Preload para acelerar absurdamente o carregamento da imagem pesada
    if (!content.includes('<link rel="preload" as="image" href="assets/images/bg-c20c.png">')) {
        content = content.replace('</head>', '    <!-- Otimização de Carregamento -->\n    <link rel="preload" as="image" href="assets/images/bg-c20c.png">\n</head>');
    }
    
    // 2. Injetar a DIV isolada do Background logo após o body
    if (!content.includes('<div class="global-bg"></div>')) {
        content = content.replace('<body>', '<body>\n\n<!-- Background Global Responsivo -->\n<div class="global-bg"></div>');
    }
    
    fs.writeFileSync(f, content, 'utf8');
});

console.log("HTML otimizado com sucesso para mobile e velocidade de carregamento.");
