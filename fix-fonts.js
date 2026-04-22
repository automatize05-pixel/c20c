const fs = require('fs');

// 1. Otimizar tamanhos no CSS global
let css = fs.readFileSync('assets/css/style.css', 'utf8');
css = css.replace(/clamp\(2rem, 5vw, 4\.5rem\)/g, 'clamp(1.5rem, 3.5vw, 2.8rem)');
css = css.replace(/clamp\(1rem, 1\.2vw, 1\.15rem\)/g, '0.95rem');
css = css.replace(/font-size: 1\.2rem;\n  padding: 1\.5rem 3rem;/g, 'font-size: 1rem;\n  padding: 1.2rem 2.5rem;');
fs.writeFileSync('assets/css/style.css', css, 'utf8');

// 2. Corrigir Encoding e Tamanhos inline nos HTMLs
const files = ['index.html', 'sobre.html', 'servicos.html', 'portfolio.html', 'contato.html'];

files.forEach(f => {
    if (!fs.existsSync(f)) return;
    let content = fs.readFileSync(f, 'utf8');
    
    // Corrigir Mojibake (Caracteres Estranhos / Erros de Ortografia)
    // O PowerShell leu os bytes UTF-8 como Latin1/Windows-1252 e salvou de volta como UTF-8.
    // A reversão exata:
    if (content.includes('Ã')) {
        content = Buffer.from(content, 'latin1').toString('utf8');
    }
    
    // Otimizar Tamanhos Inline (Para evitar zoom out)
    content = content.replace(/clamp\(1\.8rem, 3\.5vw, 2\.8rem\)/g, 'clamp(1.3rem, 2.5vw, 2.2rem)');
    content = content.replace(/clamp\(1\.8rem, 4vw, 3rem\)/g, 'clamp(1.3rem, 2.5vw, 2.2rem)');
    content = content.replace(/clamp\(2rem, 5vw, 4rem\)/g, 'clamp(1.5rem, 3vw, 2.5rem)');
    content = content.replace(/clamp\(2rem, 5vw, 3\.5rem\)/g, 'clamp(1.5rem, 3vw, 2.5rem)');
    content = content.replace(/font-size: 1\.15rem/g, 'font-size: 0.95rem');
    content = content.replace(/font-size: 1\.2rem/g, 'font-size: 1rem');
    
    fs.writeFileSync(f, content, 'utf8');
});

console.log("Fixes de fonte e ortografia aplicados com sucesso.");
