document.addEventListener('DOMContentLoaded', function() {
    // Animation for elements
    const animateElements = () => {
      const elements = document.querySelectorAll('.year-box, .top-countries, .report-btn');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 100 * index);
      });
    };
  
    // Report button functionality
    const reportBtn = document.querySelector('.report-btn');
    if (reportBtn) {
      reportBtn.addEventListener('click', function() {
        // Show loading state
        const originalText = reportBtn.innerHTML;
        reportBtn.innerHTML = '<i class="bi bi-hourglass"></i> Generating Report...';
        reportBtn.disabled = true;
        
        // Simulate report generation
        setTimeout(() => {
          alert('Full report generated successfully!');
          reportBtn.innerHTML = originalText;
          reportBtn.disabled = false;
        }, 1500);
      });
    }
  
    // Initialize animations
    setTimeout(animateElements, 300);
  });
  
  // Set initial styles for animation
  document.querySelectorAll('.year-box, .top-countries, .report-btn').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
  });