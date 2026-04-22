<?php include 'includes/header.php'; ?>

<section class="section">
    <div class="container" style="padding-top: 100px;">
        <h1 class="oversized-text">Serviços</h1>
        <p>Explore as soluções que ofereço para escalar sua marca.</p>
        
        <div class="services-nav-header">
            <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--accent); font-weight: bold; animation: pulse 2s infinite;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                <span>Deslize ou use setas</span>
            </div>
            <div style="display: flex; gap: 0.5rem;">
                <button id="scrollLeftBtn" class="btn btn-secondary nav-btn">← <span class="hide-mobile">Anterior</span></button>
                <button id="scrollRightBtn" class="btn btn-secondary nav-btn"><span class="hide-mobile">Próximo</span> →</button>
            </div>
        </div>
    </div>

    <div class="h-scroll-container">
        <!-- Serviço 1: Design Gráfico -->
        <div class="scroll-item glass-panel">
            <div class="scroll-img" style="flex: 1; padding: 2rem;">
                <img src="assets/images/design.png" alt="Design Gráfico" style="width: 100%; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            </div>
            <div class="scroll-content" style="flex: 1; padding: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Design Gráfico</h2>
                <p>Identidade Visual e logos que transmitem valor de mercado. Artes para redes sociais desenhadas para atrair cliques e conversão máxima.</p>
                <ul style="list-style: none; margin-bottom: 2rem; color: var(--text-main);">
                    <li style="margin-bottom: 0.5rem;">✓ Branding & Logo Design</li>
                    <li style="margin-bottom: 0.5rem;">✓ Social Media Management</li>
                    <li style="margin-bottom: 0.5rem;">✓ Materiais de Lançamento</li>
                </ul>
                <a href="contato.php" class="btn">Requisitar Serviço</a>
            </div>
        </div>

        <!-- Serviço 2: Videomaker -->
        <div class="scroll-item glass-panel">
            <div class="scroll-img" style="flex: 1; padding: 2rem;">
                <img src="assets/images/video.png" alt="Videomaker" style="width: 100%; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            </div>
            <div class="scroll-content" style="flex: 1; padding: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Videomaker</h2>
                <p>Captação premium e edição dinâmica focada em retenção. Do vídeo comercial institucional ao reels que viraliza no TikTok e Instagram.</p>
                <ul style="list-style: none; margin-bottom: 2rem; color: var(--text-main);">
                    <li style="margin-bottom: 0.5rem;">✓ Vídeos Comerciais / Anúncios</li>
                    <li style="margin-bottom: 0.5rem;">✓ Conteúdo Dinâmico (Reels/TikTok)</li>
                    <li style="margin-bottom: 0.5rem;">✓ Cobertura de Eventos</li>
                </ul>
                <a href="contato.php" class="btn">Requisitar Serviço</a>
            </div>
        </div>

        <!-- Serviço 3: Tráfego Pago -->
        <div class="scroll-item glass-panel">
            <div class="scroll-img" style="flex: 1; padding: 2rem;">
                <img src="assets/images/trafego.png" alt="Tráfego Pago" style="width: 100%; border-radius: 4px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            </div>
            <div class="scroll-content" style="flex: 1; padding: 2rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: var(--font-heading);">Tráfego Pago</h2>
                <p>Estratégia voltada puramente para o ROAS (Retorno). Redução de Custo de Aquisição e maximização de vendas usando dados precisos.</p>
                <ul style="list-style: none; margin-bottom: 2rem; color: var(--text-main);">
                    <li style="margin-bottom: 0.5rem;">✓ Google Ads & Meta Ads</li>
                    <li style="margin-bottom: 0.5rem;">✓ Escala de E-commerces</li>
                    <li style="margin-bottom: 0.5rem;">✓ Captação de Leads B2B e B2C</li>
                </ul>
                <a href="portfolio.php" class="btn">Ver Casos de Sucesso</a>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>
