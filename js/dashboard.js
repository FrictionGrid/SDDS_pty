/**
 * SDDS Dashboard - Interactive Features
 *
 * Features:
 * - Chart filter toggle
 * - Bar chart hover tooltips
 * - Project item interactions
 * - Action item interactions
 * - Activity item interactions
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Chart Filter Toggle =====
  const chartFilters = document.querySelectorAll('.chart-filter');

  chartFilters.forEach(filter => {
    filter.addEventListener('click', function() {
      // Remove active class from all filters
      chartFilters.forEach(f => f.classList.remove('active'));

      // Add active class to clicked filter
      this.classList.add('active');

      // Mock: In real app, this would trigger chart data update
      const filterType = this.textContent.trim();
      console.log(`📊 Chart filter changed to: ${filterType}`);

      // Could show loading state and fetch new data here
    });
  });

  // ===== Bar Chart Hover Tooltips =====
  const barChartBars = document.querySelectorAll('.bar-chart__bar');

  barChartBars.forEach(bar => {
    bar.addEventListener('mouseenter', function() {
      const value = this.getAttribute('data-value');
      const type = this.classList.contains('bar-chart__bar--revenue') ? 'รายได้' : 'ลูกค้าใหม่';

      // Show tooltip (mock)
      console.log(`💡 ${type}: ${value}`);

      // In real app, you could show a tooltip element here
      // For now, we just use the browser's natural hover state from CSS
    });
  });

  // ===== Project Item Click Handlers =====
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('.project-item__title')?.textContent;
      const department = this.querySelector('.project-item__department')?.textContent;
      const status = this.querySelector('.status-badge')?.textContent;
      const progress = this.querySelector('.project-item__progress-label span:last-child')?.textContent;

      console.log('📁 Project clicked:', { title, department, status, progress });

      alert(`โครงการ: ${title}\nหน่วยงาน: ${department}\nสถานะ: ${status}\nความคืบหน้า: ${progress}\n\n(ในระบบจริงจะเปิดหน้ารายละเอียดโครงการ)`);
    });
  });

  // ===== Action Item Click Handlers =====
  const actionItems = document.querySelectorAll('.action-item');

  actionItems.forEach(item => {
    item.addEventListener('click', function() {
      const title = this.querySelector('.action-item__title')?.textContent;
      const priority = this.querySelector('.action-item__priority')?.textContent;
      const description = this.querySelector('.action-item__description')?.textContent;

      console.log('✓ Action item clicked:', { title, priority, description });

      const confirmed = confirm(`งาน: ${title}\nความสำคัญ: ${priority}\n${description}\n\nคุณต้องการดำเนินการหรือไม่?`);

      if (confirmed) {
        console.log('✅ Action item confirmed:', title);
        // In real app, this would update the backend
        alert('✅ รับทราบและจะดำเนินการ');
      } else {
        console.log('❌ Action item cancelled');
      }
    });
  });

  // ===== Activity Item Click Handlers =====
  const activityItems = document.querySelectorAll('.activity-item');

  activityItems.forEach(item => {
    item.addEventListener('click', function() {
      const user = this.querySelector('.activity-item__user')?.textContent;
      const text = this.querySelector('.activity-item__text')?.textContent;
      const meta = this.querySelector('.activity-item__meta')?.textContent;
      const time = this.querySelector('.activity-item__time')?.textContent;

      console.log('📋 Activity clicked:', { user, text, meta, time });

      alert(`กิจกรรม: ${text}\n\nรายละเอียด: ${meta}\nเวลา: ${time}\n\n(ในระบบจริงจะแสดงรายละเอียดเพิ่มเติม)`);
    });
  });

  // ===== KPI Card Hover Enhancement =====
  const kpiCards = document.querySelectorAll('.kpi-card');

  kpiCards.forEach(card => {
    card.addEventListener('click', function() {
      const label = this.querySelector('.kpi-card__label')?.textContent;
      const value = this.querySelector('.kpi-card__value')?.textContent;
      const change = this.querySelector('.kpi-card__change')?.textContent;

      console.log('📊 KPI card clicked:', { label, value, change });

      alert(`ตัวชี้วัด: ${label}\nค่า: ${value}\nการเปลี่ยนแปลง: ${change}\n\n(ในระบบจริงจะแสดงกราฟและข้อมูลเชิงลึก)`);
    });
  });

  // ===== Chart Bar Click Enhancement =====
  const barGroups = document.querySelectorAll('.bar-chart__group');

  barGroups.forEach(group => {
    const label = group.querySelector('.bar-chart__label')?.textContent;
    const bars = group.querySelectorAll('.bar-chart__bar');

    bars.forEach(bar => {
      bar.addEventListener('click', function(e) {
        e.stopPropagation();

        const value = this.getAttribute('data-value');
        const type = this.classList.contains('bar-chart__bar--revenue') ? 'รายได้' : 'ลูกค้าใหม่';

        console.log('📊 Chart bar clicked:', { month: label, type, value });

        alert(`เดือน: ${label}\n${type}: ${value}\n\n(ในระบบจริงจะแสดงข้อมูลรายละเอียด)`);
      });
    });
  });

  // ===== Summary Stats =====
  console.log('✅ Dashboard loaded successfully');
  console.log(`📊 KPI Cards: ${kpiCards.length}`);
  console.log(`📁 Projects: ${projectItems.length}`);
  console.log(`✓ Action Items: ${actionItems.length}`);
  console.log(`📋 Activities: ${activityItems.length}`);
  console.log(`📈 Chart Bars: ${barChartBars.length}`);

  // ===== Auto-refresh (Optional) =====
  // In real app, you might want to refresh data periodically
  // setInterval(() => {
  //   console.log('🔄 Auto-refreshing dashboard data...');
  //   // Fetch and update data here
  // }, 60000); // Every 60 seconds

});
