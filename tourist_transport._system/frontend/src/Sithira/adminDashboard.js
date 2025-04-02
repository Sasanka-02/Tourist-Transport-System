document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap modal
    const uploadModal = new bootstrap.Modal(document.getElementById('uploadModal'));
    
    // Upload button click handler
    document.querySelector('.upload-btn').addEventListener('click', function() {
      uploadModal.show();
    });
    
    // Retrain model button
    document.querySelector('.retrain-btn').addEventListener('click', function() {
      const btn = this;
      const originalText = btn.innerHTML;
      
      btn.innerHTML = '<i class="bi bi-hourglass"></i> Retraining...';
      btn.disabled = true;
      
      // Simulate retraining
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        alert('Model retrained successfully! Accuracy updated to 89%');
        document.querySelector('.accuracy-value').textContent = '89%';
      }, 3000);
    });
    
    // View metrics button
    document.querySelector('.metrics-btn').addEventListener('click', function() {
      alert('Opening accuracy metrics dashboard...');
      // In a real app, this would open a metrics view
    });
    
    // Handle form submission
    document.getElementById('uploadForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const datasetName = document.getElementById('datasetName').value;
      const fileInput = document.getElementById('datasetFile');
      const updateModel = document.getElementById('updateModel').checked;
      
      if (!fileInput.files.length) {
        alert('Please select a file to upload');
        return;
      }
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="bi bi-hourglass"></i> Uploading...';
      submitBtn.disabled = true;
      
      // Simulate file upload
      setTimeout(() => {
        uploadModal.hide();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        alert(`Dataset "${datasetName}" uploaded successfully! ${updateModel ? 'Model update initiated.' : ''}`);
        this.reset();
        
        if (updateModel) {
          document.querySelector('.retrain-btn').click();
        }
      }, 2000);
    });
  });