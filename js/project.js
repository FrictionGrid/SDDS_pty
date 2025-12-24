/**
 * SDDS Project Management - Interactive Features
 *
 * Features:
 * - Live search across project name and department
 * - Status filter
 * - Project card click handler
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Search Functionality =====
  const searchInput = document.getElementById('projectSearchInput');
  const projectCards = document.querySelectorAll('.project-card');

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase().trim();

      projectCards.forEach(card => {
        const projectTitle = card.querySelector('.project-card__title')?.textContent.toLowerCase() || '';
        const department = card.querySelector('.project-card__department')?.textContent.toLowerCase() || '';

        const matchFound = projectTitle.includes(searchTerm) || department.includes(searchTerm);

        if (matchFound) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      updateVisibleCount();
    });
  }

  // ===== Status Filter =====
  const statusFilter = document.getElementById('projectStatusFilter');

  if (statusFilter) {
    statusFilter.addEventListener('change', function(e) {
      const selectedStatus = e.target.value;

      projectCards.forEach(card => {
        const cardStatus = card.getAttribute('data-status');

        if (!selectedStatus) {
          // Show all if no filter selected
          card.style.display = '';
        } else {
          if (cardStatus === selectedStatus) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        }
      });

      updateVisibleCount();
    });
  }

  // ===== Project Card Click Handler =====
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking on badge or alert
      if (e.target.closest('.status-badge') || e.target.closest('.project-card__alert')) {
        return;
      }

      const projectTitle = this.querySelector('.project-card__title')?.textContent;
      const department = this.querySelector('.project-card__department')?.textContent;
      const status = this.querySelector('.status-badge')?.textContent;

      alert(`โครงการ: ${projectTitle}\nหน่วยงาน: ${department}\nสถานะ: ${status}\n\n(ในระบบจริงจะเปิดหน้ารายละเอียดโครงการ)`);
    });
  });

  // ===== Helper Functions =====
  function updateVisibleCount() {
    const visibleCards = Array.from(projectCards).filter(card => card.style.display !== 'none');
    console.log(`แสดง ${visibleCards.length} จาก ${projectCards.length} โครงการ`);
  }

  // ===== Summary Card Click (Optional) =====
  const summaryCards = document.querySelectorAll('.summary-card');
  summaryCards.forEach(card => {
    card.addEventListener('click', function() {
      // Auto-filter based on summary card clicked
      if (this.classList.contains('summary-card--completed')) {
        statusFilter.value = 'completed';
      } else if (this.classList.contains('summary-card--active')) {
        statusFilter.value = 'active';
      } else if (this.classList.contains('summary-card--risk')) {
        statusFilter.value = 'risk';
      } else {
        statusFilter.value = '';
      }

      // Trigger change event
      statusFilter.dispatchEvent(new Event('change'));
    });
  });

  console.log('✅ Project Management System loaded');
  console.log(`📊 Total projects: ${projectCards.length}`);
});
