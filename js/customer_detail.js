// customer_detail.js - JavaScript สำหรับหน้า Customer Detail

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

    // จัดการเมื่อกดปุ่มบันทึก
    const submitBtn = addProjectModal.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('บันทึกโปรเจกต์สำเร็จ!');
        addProjectModal.style.display = 'none';
      });
    }
  }

  // ========== Add Contact Modal ==========
  const btnAddContact = document.getElementById('btnAddContact');
  const addContactModal = document.getElementById('addContactModal');

  if (btnAddContact && addContactModal) {
    // เปิด Modal
    btnAddContact.addEventListener('click', function() {
      addContactModal.style.display = 'flex';
    });

    // ปิด Modal เมื่อคลิกปุ่ม X
    const closeBtn = addContactModal.querySelector('.add-customer-modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        addContactModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิก overlay
    const overlay = addContactModal.querySelector('.add-customer-modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', function() {
        addContactModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิกปุ่มยกเลิก
    const cancelBtn = addContactModal.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        addContactModal.style.display = 'none';
      });
    }

    // จัดการเมื่อกดปุ่มบันทึก
    const submitBtn = addContactModal.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('บันทึกการติดต่อสำเร็จ!');
        addContactModal.style.display = 'none';
      });
    }
  }

});
