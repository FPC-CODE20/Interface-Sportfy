document.addEventListener('DOMContentLoaded', function() {
    // Alternar botão play/pause
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
    
    // Simular progresso da música
    const progressFill = document.querySelector('.progress-fill');
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 0.1;
        if (progress > 100) progress = 0;
        progressFill.style.width = `${progress}%`;
    }, 1000);
    
    // Menu ativo
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Volume slider
    const volumeSlider = document.querySelector('.volume-slider input');
    volumeSlider.addEventListener('input', function() {
        // Aqui você implementaria o controle de volume real
        console.log(`Volume: ${this.value}%`);
    });
});