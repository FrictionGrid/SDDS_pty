// customers.js - JavaScript สำหรับหน้า Customers

document.addEventListener('DOMContentLoaded', function() {

  // ========== Add Customer Modal ==========
  const btnAddCustomer = document.getElementById('btnAddCustomer');
  const addCustomerModal = document.getElementById('addCustomerModal');

  if (btnAddCustomer && addCustomerModal) {
    // เปิด Modal
    btnAddCustomer.addEventListener('click', function() {
      addCustomerModal.style.display = 'flex';
    });

    // ปิด Modal เมื่อคลิกปุ่ม X
    const closeBtn = addCustomerModal.querySelector('.add-customer-modal__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        addCustomerModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิก overlay
    const overlay = addCustomerModal.querySelector('.add-customer-modal__overlay');
    if (overlay) {
      overlay.addEventListener('click', function() {
        addCustomerModal.style.display = 'none';
      });
    }

    // ปิด Modal เมื่อคลิกปุ่มยกเลิก
    const cancelBtn = addCustomerModal.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        addCustomerModal.style.display = 'none';
      });
    }

    // จัดการเมื่อกดปุ่มบันทึก
    const submitBtn = addCustomerModal.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('บันทึกลูกค้าสำเร็จ!');
        addCustomerModal.style.display = 'none';
      });
    }
  }

});
