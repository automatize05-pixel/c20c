<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio Profissional | Design, Vídeo e Tráfego</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<!-- Custom Cursor Elements -->
<div class="cursor-dot"></div>
<div class="cursor-outline"></div>

<header id="main-header">
    <div class="container nav-container">
        <a href="index.php" class="logo">c20c</a>
        <button class="mobile-toggle" aria-label="Abrir menu">
            <span></span><span></span><span></span>
        </button>
        <nav class="nav-menu">
            <ul>
                <li><a href="index.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'index.php' ? 'active' : ''; ?>">Home</a></li>
                <li><a href="sobre.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'sobre.php' ? 'active' : ''; ?>">Sobre</a></li>
                <li><a href="servicos.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'servicos.php' ? 'active' : ''; ?>">Serviços</a></li>
                <li><a href="portfolio.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'portfolio.php' ? 'active' : ''; ?>">Portfólio</a></li>
                <li><a href="contato.php" class="<?php echo basename($_SERVER['PHP_SELF']) == 'contato.php' ? 'active' : ''; ?>">Contato</a></li>
            </ul>
        </nav>
    </div>
</header>
<main>
