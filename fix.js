const fs = require('fs');
const files = ['index.html', 'sobre.html', 'servicos.html', 'portfolio.html', 'contato.html'];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/href="index\.php"/g, 'href="index.html"');
    content = content.replace(/href="sobre\.php"/g, 'href="sobre.html"');
    content = content.replace(/href="servicos\.php"/g, 'href="servicos.html"');
    content = content.replace(/href="portfolio\.php"/g, 'href="portfolio.html"');
    content = content.replace(/href="contato\.php"/g, 'href="contato.html"');
    content = content.replace(/<\?php echo date\('Y'\); \?>/g, '2026');
    fs.writeFileSync(f, content, 'utf8');
});
console.log("Fix aplicado com sucesso");
