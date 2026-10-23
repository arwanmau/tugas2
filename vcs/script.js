// Tab function
    function openTab(evt, tabName) {
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(c => c.classList.remove('active'));
      
      const tabs = document.querySelectorAll('.tab-btn');
      tabs.forEach(t => t.classList.remove('active'));

      document.getElementById(tabName).classList.add('active');
      evt.currentTarget.classList.add('active');
    }

    // Copy NIM
    function copyNIM() {
      navigator.clipboard.writeText('G.231.23.0155');
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }

    // Theme Switcher
    const themes = ['cyber', 'space', 'light'];
    let currentThemeIdx = 0;

    function cycleTheme() {
      currentThemeIdx = (currentThemeIdx + 1) % themes.length;
      document.body.className = '';
      const label = document.getElementById('themeLabel');

      if (themes[currentThemeIdx] === 'space') {
        document.body.classList.add('space-theme');
        label.textContent = 'Space';
      } else if (themes[currentThemeIdx] === 'light') {
        document.body.classList.add('light-theme');
        label.textContent = 'Light';
      } else {
        label.textContent = 'Cyber';
      }
    }

    // Background Particles
    const canvas = document.getElementById('particles-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.8,
      dy: (Math.random() - 0.5) * 0.8
    }));

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';

      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
