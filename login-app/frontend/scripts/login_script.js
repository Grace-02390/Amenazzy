    const API = 'http://localhost:3001';

    function showToast(msg, isError = false) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.style.background = isError ? '#e74c3c' : '#27ae60';
      toast.innerText = msg;
      document.body.appendChild(toast);
      setTimeout(() => document.body.removeChild(toast), 4000);
    }

    function switchTab(tab) {
      const container = document.getElementById('formContainer');
      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(t => t.classList.remove('active'));

      if (tab === 'login') {
        container.style.transform = 'translateX(0%)';
        tabs[0].classList.add('active');
      } else {
        container.style.transform = 'translateX(-50%)';
        tabs[1].classList.add('active');
      }
    }

    async function login() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPass').value;
      const res = await fetch(`${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        showToast("Login exitoso");
        window.location.href="../html/principal.html";
      } else {
        showToast(data.message, true);
      }
    }

    async function register() {
      const email = document.getElementById('regEmail').value;
      const password = document.getElementById('regPass').value;
      const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      showToast(data.message, !res.ok);
    }