const fs = require('fs');

const files = ['index.html', 'sobre.html', 'servicos.html', 'portfolio.html', 'contato.html'];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    
    // 1. Corrigir os links residuais .php
    content = content.replace(/href="index\.php"/g, 'href="index.html"');
    content = content.replace(/href="sobre\.php"/g, 'href="sobre.html"');
    content = content.replace(/href="servicos\.php"/g, 'href="servicos.html"');
    content = content.replace(/href="portfolio\.php"/g, 'href="portfolio.html"');
    content = content.replace(/href="contato\.php"/g, 'href="contato.html"');
    
    // 2. Corrigir a Data
    content = content.replace(/<\?php echo date\('Y'\); \?>/g, '2026');
    
    // 3. Adicionar Otimizações Mobile e Carregamento Suave
    if (!content.includes('<link rel="preload" as="image" href="assets/images/bg-c20c.png">')) {
        content = content.replace('</head>', '    <!-- Otimização de Carregamento -->\n    <link rel="preload" as="image" href="assets/images/bg-c20c.png">\n</head>');
    }
    if (!content.includes('<div class="global-bg"></div>')) {
        content = content.replace('<body>', '<body>\n\n<!-- Background Global Responsivo -->\n<div class="global-bg"></div>');
    }
    
    // 4. Reduzir os tamanhos das fontes embutidas (Sem mexer na formatação dos acentos)
    content = content.replace(/clamp\(1\.8rem, 3\.5vw, 2\.8rem\)/g, 'clamp(1.3rem, 2.5vw, 2.2rem)');
    content = content.replace(/clamp\(1\.8rem, 4vw, 3rem\)/g, 'clamp(1.3rem, 2.5vw, 2.2rem)');
    content = content.replace(/clamp\(2rem, 5vw, 4rem\)/g, 'clamp(1.5rem, 3vw, 2.5rem)');
    content = content.replace(/clamp\(2rem, 5vw, 3\.5rem\)/g, 'clamp(1.5rem, 3vw, 2.5rem)');
    content = content.replace(/font-size: 1\.15rem/g, 'font-size: 0.95rem');
    content = content.replace(/font-size: 1\.2rem/g, 'font-size: 1rem');
    
    fs.writeFileSync(f, content, 'utf8');
});

console.log("Restauracao e modificacoes concluidas");
