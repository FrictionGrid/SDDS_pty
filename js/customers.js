/**
 * SDDS Customer Management - Interactive Features
 *
 * Features:
 * - Live search across customer name, email, phone
 * - Status filter
 * - Select all / individual checkbox selection
 * - Row highlighting on hover
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Search Functionality =====
  const searchInput = document.getElementById('searchInput');
  const table = document.getElementById('customerTable');
  const rows = table.querySelectorAll('tbody tr');

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase().trim();

      rows.forEach(row => {
        const customerName = row.querySelector('.customer-name')?.textContent.toLowerCase() || '';
        const customerEmail = row.querySelector('.customer-email')?.textContent.toLowerCase() || '';
        const customerPhone = row.querySelector('.customer-phone')?.textContent.toLowerCase() || '';

        const matchFound =
          customerName.includes(searchTerm) ||
          customerEmail.includes(searchTerm) ||
          customerPhone.includes(searchTerm);

        if (matchFound) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });

      // Update visible row count (optional)
      updateVisibleCount();
    });
  }

  // ===== Status Filter =====
  const statusFilter = document.getElementById('statusFilter');

  if (statusFilter) {
    statusFilter.addEventListener('change', function(e) {
      const selectedStatus = e.target.value;

      rows.forEach(row => {
        if (!selectedStatus) {
          // Show all if no filter selected
          row.style.display = '';
        } else {
          const badge = row.querySelector('.badge');
          const statusClass = badge?.className || '';

          // Map status values to badge classes
          const statusMap = {
            'interested': 'badge--interested',
            'pending': 'badge--pending',
            'closed': 'badge--closed'
          };

          if (statusClass.includes(statusMap[selectedStatus])) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        }
      });

      updateVisibleCount();
    });
  }

  // ===== Select All Checkbox =====
  const selectAllCheckbox = document.getElementById('selectAll');
  const rowCheckboxes = document.querySelectorAll('.row-checkbox');

  if (selectAllCheckbox) {
    selectAllCheckbox.addEventListener('change', function(e) {
      const isChecked = e.target.checked;

      rowCheckboxes.forEach(checkbox => {
        // Only check visible rows
        const row = checkbox.closest('tr');
        if (row.style.display !== 'none') {
          checkbox.checked = isChecked;
        }
      });

      updateSelectionCount();
    });
  }

  // ===== Individual Row Checkbox =====
  rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      // Update "select all" state
      const visibleCheckboxes = Array.from(rowCheckboxes).filter(cb => {
        return cb.closest('tr').style.display !== 'none';
      });

      const checkedCount = visibleCheckboxes.filter(cb => cb.checked).length;

      if (selectAllCheckbox) {
        selectAllCheckbox.checked = checkedCount === visibleCheckboxes.length && visibleCheckboxes.length > 0;
        selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < visibleCheckboxes.length;
      }

      updateSelectionCount();
    });
  });

  // ===== Helper Functions =====

  function updateVisibleCount() {
    const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
    console.log(`แสดง ${visibleRows.length} จาก ${rows.length} รายการ`);
  }

  function updateSelectionCount() {
    const selectedCount = Array.from(rowCheckboxes).filter(cb => cb.checked).length;
    if (selectedCount > 0) {
      console.log(`เลือกแล้ว ${selectedCount} รายการ`);
    }
  }

  // ===== Customer Name Click Handler =====
  const customerLinks = document.querySelectorAll('.customer-name');
  customerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const customerName = this.textContent;
      alert(`เปิดรายละเอียดของ: ${customerName}\n\n(ในระบบจริงจะเปิดหน้า customer detail)`);
    });
  });

  console.log('✅ Customer Management System loaded');
  console.log(`📊 Total customers: ${rows.length}`);
});
