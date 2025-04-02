document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Simple validation
      if (!username || !password) {
        alert('Please enter both username and password');
        return;
      }
      
      // Show loading state
      const submitBtn = loginForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="bi bi-hourglass"></i> Authenticating...';
      submitBtn.disabled = true;
      
      // Simulate authentication
      setTimeout(() => {
        // In a real app, this would be an API call
        if (username === 'admin' && password === 'admin123') {
          // Store session if remember me is checked
          if (rememberMe) {
            localStorage.setItem('adminRemembered', 'true');
          }
          // Redirect to admin dashboard
          window.location.href = 'admin-dashboard.html';
        } else {
          alert('Invalid credentials. Please try again.');
        }
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
    
    // Check for remembered session
    if (localStorage.getItem('adminRemembered') === 'true') {
      document.getElementById('rememberMe').checked = true;
    }
  });