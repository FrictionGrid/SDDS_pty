// project.js - JavaScript สำหรับหน้า Project

document.addEventListener('DOMContentLoaded', function() {

  // ========== Add Project Modal ==========
  const btnAddProject = document.getElementById('btnAddProject');
  const addProjectModal = document.getElementById('addProjectModal');

  if (btnAddProject && addProjectModal) {
    // เปิด Modal
    btnAddProject.addEventListener('click', function() {
      addProjectModal.style.display = 'flex';
    });

    // ปิด Modal เมื่อคลิกปุ่ม X
    const closeBtn = addProjectModal.querySelector('.add-customer-modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        addProjectModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิก overlay
    const overlay = addProjectModal.querySelector('.add-customer-modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', function() {
        addProjectModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิกปุ่มยกเลิก
    const cancelBtn = addProjectModal.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        addProjectModal.style.display = 'none';
      });
    }

    // จัดการเมื่อกดปุ่มสร้างโครงการ
    const submitBtn = addProjectModal.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('สร้างโครงการสำเร็จ!');
        addProjectModal.style.display = 'none';
      });
    }
  }

});
