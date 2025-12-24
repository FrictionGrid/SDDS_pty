/**
 * SDDS Customer Detail - Interactive Features
 *
 * Features:
 * - Customer action buttons (Edit, Email, Call)
 * - Contact history interactions
 * - Project card interactions
 * - Add new contact/project
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Customer Action Buttons =====
  const btnEditProfile = document.getElementById('btnEditProfile');
  const btnSendEmail = document.getElementById('btnSendEmail');
  const btnCall = document.getElementById('btnCall');

  // Edit Profile Button
  if (btnEditProfile) {
    btnEditProfile.addEventListener('click', function() {
      console.log('🖊️ Edit Profile clicked');

      alert('✏️ แก้ไขโปรไฟล์ลูกค้า\n\n(ในระบบจริงจะเปิดฟอร์มแก้ไขข้อมูลลูกค้า)');

      // In real app, this would:
      // - Open modal with editable form
      // - Load current customer data
      // - Allow editing and saving
    });
  }

  // Send Email Button
  if (btnSendEmail) {
    btnSendEmail.addEventListener('click', function() {
      const customerEmail = 'contact@thaitech.co.th';
      console.log('📧 Send Email clicked:', customerEmail);

      alert(`📧 ส่งอีเมลถึงลูกค้า\n\nถึง: ${customerEmail}\n\n(ในระบบจริงจะเปิดหน้า Email AI หรือ Email Client พร้อมข้อมูลลูกค้า)`);

      // In real app, this would:
      // - Redirect to email_ai.html with customer context
      // - Or open email client with pre-filled recipient
      // window.location.href = 'email_ai.html?customer=thaitech';
    });
  }

  // Call Button
  if (btnCall) {
    btnCall.addEventListener('click', function() {
      const customerPhone = '02-123-4567';
      console.log('📞 Call clicked:', customerPhone);

      const confirmed = confirm(`📞 โทรหาลูกค้า\n\nเบอร์: ${customerPhone}\nบริษัท: บริษัท ไทยเทคโนโลยี จำกัด\n\nคุณต้องการโทรหรือไม่?`);

      if (confirmed) {
        console.log('✅ Call initiated');
        alert('📞 กำลังเชื่อมต่อ...\n\n(ในระบบจริงจะเชื่อมต่อกับระบบโทรศัพท์หรือ VoIP)');

        // In real app, this would:
        // - Integrate with VoIP system
        // - Log call activity automatically
        // - Start call recording if configured
      } else {
        console.log('❌ Call cancelled');
      }
    });
  }

  // ===== Add New Contact Button =====
  const btnAddContact = document.getElementById('btnAddContact');

  if (btnAddContact) {
    btnAddContact.addEventListener('click', function() {
      console.log('➕ Add Contact clicked');

      alert('➕ เพิ่มประวัติการติดต่อ\n\n(ในระบบจริงจะเปิดฟอร์มเพื่อบันทึกการติดต่อใหม่)');

      // In real app, this would:
      // - Open modal with contact form
      // - Fields: type, description, date, contact person
      // - Save to backend and refresh list
    });
  }

  // ===== Add New Project Button =====
  const btnAddProject = document.getElementById('btnAddProject');

  if (btnAddProject) {
    btnAddProject.addEventListener('click', function() {
      console.log('➕ Add Project clicked');

      alert('➕ เพิ่มโปรเจกต์ใหม่\n\n(ในระบบจริงจะเปิดฟอร์มสร้างโปรเจกต์ใหม่สำหรับลูกค้ารายนี้)');

      // In real app, this would:
      // - Open modal with project creation form
      // - Auto-link to current customer
      // - Set project details, timeline, team members
    });
  }

  // ===== Contact History Item Click Handlers =====
  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach(item => {
    item.addEventListener('click', function() {
      const type = this.querySelector('.contact-item__type')?.textContent;
      const description = this.querySelector('.contact-item__description')?.textContent;
      const by = this.querySelector('.contact-item__by')?.textContent.trim();
      const date = this.querySelector('.contact-item__date')?.textContent.trim();

      console.log('📋 Contact item clicked:', { type, description, by, date });

      alert(`📋 รายละเอียดการติดต่อ\n\nประเภท: ${type}\n\n${description}\n\nโดย: ${by}\nวันที่: ${date}\n\n(ในระบบจริงจะแสดงรายละเอียดเต็มและ transcript ถ้ามี)`);

      // In real app, this would:
      // - Open detail modal
      // - Show full conversation/notes
      // - Show related documents/attachments
      // - Allow editing or adding follow-up
    });
  });

  // ===== Project Card Click Handlers =====
  const projectCards = document.querySelectorAll('.project-card-detail');

  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const title = this.querySelector('.project-card-detail__title')?.textContent;
      const type = this.querySelector('.project-card-detail__type')?.textContent.trim();
      const status = this.querySelector('.status-badge')?.textContent;
      const progress = this.querySelector('.project-card-detail__progress-label span:last-child')?.textContent;
      const dates = this.querySelector('.project-card-detail__dates')?.textContent.trim();

      console.log('📁 Project card clicked:', { title, type, status, progress, dates });

      alert(`📁 รายละเอียดโปรเจกต์\n\nชื่อ: ${title}\nประเภท: ${type}\nสถานะ: ${status}\nความคืบหน้า: ${progress}\n${dates}\n\n(ในระบบจริงจะเปิดหน้ารายละเอียดโปรเจกต์)`);

      // In real app, this would:
      // - Redirect to project detail page
      // - window.location.href = 'project_detail.html?id=' + projectId;
    });
  });

  // ===== AI Insights Enhancement =====
  const aiInsightsCard = document.querySelector('.ai-insights');

  if (aiInsightsCard) {
    console.log('🤖 AI Insights loaded');

    // In real app, this could:
    // - Fetch real-time AI analysis from backend
    // - Update insights based on latest customer activity
    // - Show probability scores and recommendations
  }

  // ===== Customer Tags Interaction =====
  const customerTags = document.querySelectorAll('.customer-tag');

  customerTags.forEach(tag => {
    tag.addEventListener('click', function(e) {
      e.stopPropagation();

      const tagText = this.textContent;
      console.log('🏷️ Customer tag clicked:', tagText);

      alert(`🏷️ แท็กลูกค้า: ${tagText}\n\n(ในระบบจริงสามารถคลิกเพื่อดูลูกค้าอื่นที่มีแท็กเดียวกัน)`);

      // In real app, this would:
      // - Filter customers by this tag
      // - Show analytics for this customer segment
    });
  });

  // ===== Summary Stats =====
  console.log('✅ Customer Detail page loaded successfully');
  console.log(`📋 Contact History Items: ${contactItems.length}`);
  console.log(`📁 Related Projects: ${projectCards.length}`);
  console.log(`🏷️ Customer Tags: ${customerTags.length}`);

  // ===== Mock Real-time Updates (Optional) =====
  // In real app, you might want to poll for updates
  // setInterval(() => {
  //   console.log('🔄 Checking for customer updates...');
  //   // Fetch latest contact history, project status, AI insights
  // }, 30000); // Every 30 seconds

  // ===== Customer Score/Health Monitoring =====
  // This is where you might display customer health score
  // based on engagement, payment history, project success rate, etc.
  const calculateCustomerHealth = () => {
    // Mock calculation
    const contactFrequency = contactItems.length;
    const projectCount = projectCards.length;
    const completionRate = 0.875; // 87.5% from mock data

    const healthScore = (contactFrequency * 10 + projectCount * 20 + completionRate * 100) / 3;

    console.log('💚 Customer Health Score:', Math.round(healthScore), '/100');

    return Math.round(healthScore);
  };

  // Calculate on page load
  const healthScore = calculateCustomerHealth();

  // You could display this somewhere on the page
  // For now, just log it
  if (healthScore >= 80) {
    console.log('✅ Customer Health: Excellent');
  } else if (healthScore >= 60) {
    console.log('⚠️ Customer Health: Good');
  } else {
    console.log('🚨 Customer Health: Needs Attention');
  }

  // ===== Next Best Action Recommendation =====
  // Based on AI insights and customer data
  const getNextBestAction = () => {
    // This would be powered by AI in real system
    const recommendations = [
      'แนะนำให้เสนอ CRM Phase 2 Upgrade',
      'ติดตามความพึงพอใจโครงการปัจจุบัน',
      'เสนอ Training เพิ่มเติมสำหรับทีมใหม่',
      'ส่งข้อเสนอพิเศษสำหรับลูกค้า VIP'
    ];

    // Pick based on customer status (mock logic)
    console.log('💡 Next Best Action:', recommendations[0]);

    return recommendations[0];
  };

  getNextBestAction();

});
