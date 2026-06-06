document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // 2. Tab switching (sobre.html)
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetIndex = btn.getAttribute('data-index');
      
      // Deactivate all tab buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      // Activate clicked button
      btn.classList.add('active');
      
      // Deactivate all panels
      const panels = document.querySelectorAll('.tab-panel');
      panels.forEach(p => p.classList.remove('active'));
      
      // Activate target panel
      const targetPanel = document.getElementById(`tab${targetIndex}`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // 3. FAQ Toggle (contato.html)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      
      // Close all other open items
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
        }
      });
      
      // Toggle current item
      item.classList.toggle('open', !isOpen);
    });
  });

  // 4. Password Visibility Toggle (login.html and cadastro.html)
  const eyeButtons = document.querySelectorAll('.eye-btn');
  eyeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);
      if (input) {
        input.type = input.type === 'password' ? 'text' : 'password';
      }
    });
  });

  // Toast Helper
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (toast) {
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3200);
    }
  }

  // 5. Login Submission (login.html)
  const loginBtn = document.getElementById('btn-login-submit');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = document.getElementById('loginEmail').value;
      const senha = document.getElementById('loginSenha').value;
      
      if (!email || !senha) {
        showToast('⚠️ Preencha todos os campos!');
        return;
      }
      
      showToast('✅ Login realizado com sucesso!');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    });
  }

  // 6. Register Submission (cadastro.html)
  const registerBtn = document.getElementById('btn-register-submit');
  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const nome = document.getElementById('regNome').value;
      const email = document.getElementById('regEmail').value;
      const senha = document.getElementById('regSenha').value;
      
      if (!nome || !email || !senha) {
        showToast('⚠️ Preencha todos os campos!');
        return;
      }
      
      showToast('✅ Cadastro realizado com sucesso!');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 1200);
    });
  }

  // 7. Contact Submission (contato.html)
  const contactBtn = document.getElementById('btn-contact-submit');
  if (contactBtn) {
    contactBtn.addEventListener('click', () => {
      const nome = document.getElementById('cNome').value;
      const email = document.getElementById('cEmail').value;
      const msg = document.getElementById('cMsg').value;
      
      if (!nome || !email || !msg) {
        showToast('⚠️ Preencha todos os campos!');
        return;
      }
      
      showToast('✅ Mensagem enviada com sucesso!');
      document.getElementById('cNome').value = '';
      document.getElementById('cEmail').value = '';
      document.getElementById('cMsg').value = '';
      if (document.getElementById('cAssunto')) {
        document.getElementById('cAssunto').value = '';
      }
    });
  }
});