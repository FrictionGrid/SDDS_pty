/**
 * SDDS Project Detail - Interactive Features
 *
 * Features:
 * - Quick action buttons (Update Status, Add Comment, Attach File)
 * - Task table interactions
 * - Timeline phase interactions
 * - Communication history
 * - Risk management
 * - Decision tracking
 * - Activity log
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Quick Action Buttons =====
  const btnUpdateStatus = document.getElementById('btnUpdateStatus');
  const btnAddComment = document.getElementById('btnAddComment');
  const btnAttachFile = document.getElementById('btnAttachFile');

  // Update Status Button
  if (btnUpdateStatus) {
    btnUpdateStatus.addEventListener('click', function() {
      console.log('🔄 Update Status clicked');

      const statusOptions = [
        'วางแผน (Planning)',
        'กำลังดำเนินการ (In Progress)',
        'รอตรวจสอบ (Under Review)',
        'เสร็จสิ้น (Completed)',
        'ระงับชั่วคราว (On Hold)'
      ];

      const currentStatus = 'กำลังดำเนินการ';

      alert(`🔄 อัปเดตสถานะโครงการ\n\nสถานะปัจจุบัน: ${currentStatus}\n\nตัวเลือก:\n• ${statusOptions.join('\n• ')}\n\n(ในระบบจริงจะเปิด Modal เพื่อเลือกสถานะใหม่และเพิ่มหมายเหตุ)`);

      // In real app, this would:
      // - Open modal with status dropdown
      // - Show status transition history
      // - Require confirmation note
      // - Notify project team
      // - Update timeline automatically
    });
  }

  // Add Comment Button
  if (btnAddComment) {
    btnAddComment.addEventListener('click', function() {
      console.log('💬 Add Comment clicked');

      alert('💬 เพิ่มความคิดเห็น\n\n(ในระบบจริงจะเปิดช่องใส่ comment พร้อม:\n• Rich text editor\n• @mention ทีมงาน\n• แนบไฟล์ได้\n• Tag หมวดหมู่\n• บันทึกเป็น Activity Log)');

      // In real app, this would:
      // - Open comment editor modal
      // - Support markdown/rich text
      // - Allow @mentions to notify team members
      // - Support file attachments
      // - Auto-save drafts
      // - Post to activity feed
    });
  }

  // Attach File Button
  if (btnAttachFile) {
    btnAttachFile.addEventListener('click', function() {
      console.log('📎 Attach File clicked');

      alert('📎 แนบไฟล์\n\n(ในระบบจริงจะเปิด File Upload Dialog พร้อม:\n• Drag & Drop\n• รองรับหลายไฟล์\n• แสดง Preview\n• จัดหมวดหมู่เอกสาร\n• Version Control)');

      // In real app, this would:
      // - Open file upload dialog
      // - Support drag & drop
      // - Show upload progress
      // - Categorize files (Documents, Images, etc.)
      // - Link to relevant tasks/phases
      // - Version control for document updates
    });
  }

  // ===== Task Table Interactions =====
  const taskRows = document.querySelectorAll('.task-table tbody tr');

  taskRows.forEach(row => {
    row.addEventListener('click', function() {
      const taskName = this.querySelector('.task-table__name')?.textContent;
      const assignee = this.querySelector('.task-table__assignee')?.textContent;
      const status = this.querySelector('.status-badge')?.textContent;
      const dueDate = this.querySelector('.task-table__due')?.textContent;
      const priority = this.querySelector('.priority-badge')?.textContent;

      console.log('📋 Task clicked:', { taskName, assignee, status, dueDate, priority });

      alert(`📋 รายละเอียดงาน\n\nชื่องาน: ${taskName}\nผู้รับผิดชอบ: ${assignee}\nสถานะ: ${status}\nกำหนดเสร็จ: ${dueDate}\nความสำคัญ: ${priority}\n\n(ในระบบจริงจะเปิด Task Detail Modal พร้อม:\n• รายละเอียดเต็ม\n• Subtasks\n• Time tracking\n• Comments\n• Related files)`);

      // In real app, this would:
      // - Open task detail modal
      // - Show full description and requirements
      // - Display subtasks/checklist
      // - Show time logs and estimates
      // - List comments and mentions
      // - Show related files and links
      // - Allow editing if user has permission
    });
  });

  // ===== Timeline Phase Interactions =====
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(item => {
    item.addEventListener('click', function() {
      const phase = this.querySelector('.timeline-item__phase')?.textContent;
      const dates = this.querySelector('.timeline-item__dates')?.textContent.trim();
      const progressFill = this.querySelector('.timeline-item__progress-fill');
      const progress = progressFill ? progressFill.style.width : '0%';
      const status = this.querySelector('.timeline-item__status')?.textContent;

      console.log('📅 Timeline phase clicked:', { phase, dates, progress, status });

      alert(`📅 รายละเอียดเฟส\n\nเฟส: ${phase}\n${dates}\nความคืบหน้า: ${progress}\nสถานะ: ${status}\n\n(ในระบบจริงจะแสดง:\n• Milestone รายเฟส\n• งานทั้งหมดในเฟส\n• Deliverables\n• Dependencies\n• Issues/Blockers)`);

      // In real app, this would:
      // - Show phase details
      // - List all tasks in this phase
      // - Show deliverables and milestones
      // - Display dependencies on other phases
      // - Highlight blockers or issues
      // - Show team allocation for this phase
    });
  });

  // ===== Communication Item Click Handlers =====
  const communicationItems = document.querySelectorAll('.communication-item');

  communicationItems.forEach(item => {
    item.addEventListener('click', function() {
      const type = this.querySelector('.communication-item__type')?.textContent;
      const subject = this.querySelector('.communication-item__subject')?.textContent;
      const meta = this.querySelector('.communication-item__meta')?.textContent.trim();

      console.log('💬 Communication clicked:', { type, subject, meta });

      alert(`💬 รายละเอียดการสื่อสาร\n\nประเภท: ${type}\nหัวข้อ: ${subject}\n${meta}\n\n(ในระบบจริงจะแสดง:\n• เนื้อหาสมบูรณ์\n• ผู้เข้าร่วม/ผู้รับ\n• ไฟล์แนบ\n• Action Items\n• Meeting Notes)`);

      // In real app, this would:
      // - Show full communication thread
      // - Display participants/recipients
      // - Show attachments
      // - List action items from discussion
      // - Link to related tasks/decisions
      // - Allow reply or follow-up
    });
  });

  // ===== Risk Item Click Handlers =====
  const riskItems = document.querySelectorAll('.risk-item');

  riskItems.forEach(item => {
    item.addEventListener('click', function() {
      const description = this.querySelector('.risk-item__description')?.textContent;
      const level = this.querySelector('.risk-item__level')?.textContent;
      const status = this.querySelector('.risk-item__status')?.textContent;

      // Determine risk level from class
      let riskLevel = 'ต่ำ (Low)';
      if (this.classList.contains('risk-item--high')) {
        riskLevel = 'สูง (High)';
      } else if (this.classList.contains('risk-item--medium')) {
        riskLevel = 'กลาง (Medium)';
      }

      console.log('⚠️ Risk clicked:', { description, level, status, riskLevel });

      alert(`⚠️ รายละเอียดความเสี่ยง\n\nความเสี่ยง: ${description}\nระดับ: ${riskLevel}\nสถานะ: ${status}\n\n(ในระบบจริงจะแสดง:\n• ผลกระทบและโอกาสเกิด\n• แผนการจัดการความเสี่ยง\n• ผู้รับผิดชอบ\n• ประวัติการอัปเดต\n• Mitigation Plan)`);

      // In real app, this would:
      // - Show detailed risk assessment
      // - Display impact and probability scores
      // - Show mitigation plan and actions
      // - Assign risk owner
      // - Track risk status changes
      // - Link to affected tasks/phases
      // - Show contingency plans
    });
  });

  // ===== Decision Item Click Handlers =====
  const decisionItems = document.querySelectorAll('.decision-item');

  decisionItems.forEach(item => {
    item.addEventListener('click', function() {
      const description = this.querySelector('.decision-item__description')?.textContent;
      const by = this.querySelector('.decision-item__by')?.textContent.trim();
      const status = this.querySelector('.decision-item__status')?.textContent;

      console.log('✅ Decision clicked:', { description, by, status });

      const statusText = status.includes('รออนุมัติ') ? 'รออนุมัติ' :
                        status.includes('อนุมัติแล้ว') ? 'อนุมัติแล้ว' : 'ปฏิเสธ';

      alert(`✅ รายละเอียดการตัดสินใจ\n\nเรื่อง: ${description}\n${by}\nสถานะ: ${statusText}\n\n(ในระบบจริงจะแสดง:\n• รายละเอียดเต็ม\n• เหตุผล/Context\n• ผู้มีส่วนเกี่ยวข้อง\n• Impact Analysis\n• Approval Flow)`);

      // In real app, this would:
      // - Show full decision details
      // - Display reasoning and context
      // - List stakeholders
      // - Show approval workflow
      // - Display impact on project
      // - Allow voting/approval if authorized
      // - Track decision history
    });
  });

  // ===== Activity Log Item Click Handlers =====
  const activityItems = document.querySelectorAll('.activity-item');

  activityItems.forEach(item => {
    item.addEventListener('click', function() {
      const text = this.querySelector('.activity-item__text')?.textContent;
      const time = this.querySelector('.activity-item__time')?.textContent;

      console.log('📝 Activity clicked:', { text, time });

      alert(`📝 รายละเอียด Activity\n\n${text}\n${time}\n\n(ในระบบจริงจะแสดง:\n• รายละเอียดการเปลี่ยนแปลง\n• Before/After values\n• Related context\n• Link to affected item)`);

      // In real app, this would:
      // - Show detailed change log
      // - Display before/after values
      // - Link to related item (task, risk, etc.)
      // - Show user who made the change
      // - Allow reverting if authorized
    });
  });

  // ===== Project Metrics Enhancement =====
  const projectMetrics = document.querySelectorAll('.project-metric');

  projectMetrics.forEach(metric => {
    metric.addEventListener('click', function() {
      const label = this.querySelector('.project-metric__label')?.textContent;
      const value = this.querySelector('.project-metric__value')?.textContent;

      console.log('📊 Metric clicked:', { label, value });

      alert(`📊 รายละเอียด: ${label}\n\nค่า: ${value}\n\n(ในระบบจริงจะแสดง:\n• กราฟเทรนด์\n• Breakdown รายละเอียด\n• การเปรียบเทียบกับเป้าหมาย\n• ประวัติการเปลี่ยนแปลง)`);

      // In real app, this would:
      // - Show metric details and trends
      // - Display breakdown/drill-down
      // - Compare against targets/baselines
      // - Show historical data
    });
  });

  // ===== Budget Bars Interaction =====
  const budgetBars = document.querySelectorAll('.budget-bar');

  budgetBars.forEach(bar => {
    bar.addEventListener('click', function() {
      const labelSpans = this.querySelectorAll('.budget-bar__label span');
      const label = labelSpans[0]?.textContent;
      const value = labelSpans[1]?.textContent;
      const fillWidth = this.querySelector('.budget-bar__fill')?.style.width || '0%';

      console.log('💰 Budget bar clicked:', { label, value, fillWidth });

      alert(`💰 ${label}\n\nจำนวนเงิน: ${value}\nเปอร์เซ็นต์: ${fillWidth}\n\n(ในระบบจริงจะแสดง:\n• Breakdown ตามหมวดหมู่\n• รายการค่าใช้จ่าย\n• การเบิกจ่ายย้อนหลัง\n• Forecast)`);

      // In real app, this would:
      // - Show budget breakdown by category
      // - List all expenses/allocations
      // - Display payment history
      // - Show forecast and burn rate
      // - Compare with budget baseline
    });
  });

  // ===== Calculate Project Statistics =====
  const calculateProjectStats = () => {
    const totalTasks = taskRows.length;
    const completedTasks = document.querySelectorAll('.status-badge--completed').length;
    const inProgressTasks = document.querySelectorAll('.status-badge--in-progress').length;
    const pendingTasks = document.querySelectorAll('.status-badge--pending').length;

    const completionRate = totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(1) : 0;

    console.log('📊 Project Statistics:');
    console.log(`   Total Tasks: ${totalTasks}`);
    console.log(`   Completed: ${completedTasks} (${completionRate}%)`);
    console.log(`   In Progress: ${inProgressTasks}`);
    console.log(`   Pending: ${pendingTasks}`);

    return { totalTasks, completedTasks, inProgressTasks, pendingTasks, completionRate };
  };

  // ===== Calculate Risk Assessment =====
  const calculateRiskAssessment = () => {
    const highRisks = document.querySelectorAll('.risk-item--high').length;
    const mediumRisks = document.querySelectorAll('.risk-item--medium').length;
    const lowRisks = document.querySelectorAll('.risk-item--low, .risk-item:not(.risk-item--high):not(.risk-item--medium)').length;
    const totalRisks = riskItems.length;

    const riskScore = (highRisks * 3 + mediumRisks * 2 + lowRisks * 1) / Math.max(totalRisks, 1);

    console.log('⚠️ Risk Assessment:');
    console.log(`   Total Risks: ${totalRisks}`);
    console.log(`   High: ${highRisks} | Medium: ${mediumRisks} | Low: ${lowRisks}`);
    console.log(`   Risk Score: ${riskScore.toFixed(2)}/3.0`);

    if (riskScore >= 2.5) {
      console.log('   ⚠️ Project Risk Level: HIGH - Requires immediate attention');
    } else if (riskScore >= 1.5) {
      console.log('   ⚠️ Project Risk Level: MEDIUM - Monitor closely');
    } else {
      console.log('   ✅ Project Risk Level: LOW - Under control');
    }

    return { highRisks, mediumRisks, lowRisks, totalRisks, riskScore };
  };

  // ===== Calculate Budget Utilization =====
  const calculateBudgetUtilization = () => {
    // Extract budget values from the page
    const budgetTotal = 5000000; // ฿5M
    const budgetSpent = 3900000; // ฿3.9M (78%)
    const budgetRemaining = 1100000; // ฿1.1M (22%)

    const utilizationRate = ((budgetSpent / budgetTotal) * 100).toFixed(1);
    const projectProgress = 78; // From overall progress

    // Calculate if budget is on track (should be roughly aligned with progress)
    const budgetHealthGap = Math.abs(utilizationRate - projectProgress);

    console.log('💰 Budget Analysis:');
    console.log(`   Total Budget: ฿${(budgetTotal / 1000000).toFixed(1)}M`);
    console.log(`   Spent: ฿${(budgetSpent / 1000000).toFixed(1)}M (${utilizationRate}%)`);
    console.log(`   Remaining: ฿${(budgetRemaining / 1000000).toFixed(1)}M`);
    console.log(`   Project Progress: ${projectProgress}%`);

    if (budgetHealthGap <= 5) {
      console.log('   ✅ Budget Health: On Track - Spending aligned with progress');
    } else if (budgetHealthGap <= 10) {
      console.log('   ⚠️ Budget Health: Monitor - Small variance detected');
    } else {
      console.log('   🚨 Budget Health: At Risk - Spending misaligned with progress');
    }

    return { budgetTotal, budgetSpent, budgetRemaining, utilizationRate, budgetHealthGap };
  };

  // ===== Decision Tracking =====
  const calculateDecisionMetrics = () => {
    const pendingDecisions = document.querySelectorAll('.decision-item__status .status-badge--warning').length;
    const approvedDecisions = document.querySelectorAll('.decision-item__status .status-badge--success').length;
    const totalDecisions = decisionItems.length;

    console.log('✅ Decision Metrics:');
    console.log(`   Total Decisions: ${totalDecisions}`);
    console.log(`   Pending Approval: ${pendingDecisions}`);
    console.log(`   Approved: ${approvedDecisions}`);

    if (pendingDecisions > 0) {
      console.log(`   ⏳ ${pendingDecisions} decision(s) need attention`);
    } else {
      console.log('   ✅ All decisions resolved');
    }

    return { pendingDecisions, approvedDecisions, totalDecisions };
  };

  // ===== Run Analytics on Page Load =====
  console.log('✅ Project Detail page loaded successfully');
  console.log(`📋 Tasks: ${taskRows.length}`);
  console.log(`📅 Timeline Phases: ${timelineItems.length}`);
  console.log(`💬 Communications: ${communicationItems.length}`);
  console.log(`⚠️ Risks: ${riskItems.length}`);
  console.log(`✅ Decisions: ${decisionItems.length}`);
  console.log(`📝 Recent Activities: ${activityItems.length}`);

  console.log('\n--- PROJECT ANALYTICS ---');
  const stats = calculateProjectStats();
  const risks = calculateRiskAssessment();
  const budget = calculateBudgetUtilization();
  const decisions = calculateDecisionMetrics();

  // ===== Project Health Score =====
  const calculateProjectHealth = () => {
    // Weighted health score calculation
    const completionWeight = stats.completionRate * 0.3; // 30% weight
    const riskWeight = (3 - risks.riskScore) / 3 * 100 * 0.25; // 25% weight (inverted)
    const budgetWeight = (100 - budget.budgetHealthGap) * 0.25; // 25% weight
    const decisionWeight = (decisions.approvedDecisions / Math.max(decisions.totalDecisions, 1)) * 100 * 0.2; // 20% weight

    const healthScore = completionWeight + riskWeight + budgetWeight + decisionWeight;

    console.log('\n💚 PROJECT HEALTH SCORE:', Math.round(healthScore), '/100');

    if (healthScore >= 80) {
      console.log('   ✅ Status: EXCELLENT - Project on track');
    } else if (healthScore >= 60) {
      console.log('   ⚠️ Status: GOOD - Minor attention needed');
    } else if (healthScore >= 40) {
      console.log('   ⚠️ Status: AT RISK - Action required');
    } else {
      console.log('   🚨 Status: CRITICAL - Immediate intervention needed');
    }

    return Math.round(healthScore);
  };

  const projectHealth = calculateProjectHealth();

  // ===== Recommendations Engine =====
  const generateRecommendations = () => {
    const recommendations = [];

    // Based on task completion
    if (stats.completionRate < 70) {
      recommendations.push('⚡ เร่งรัดงานที่ Pending เพื่อให้ทันกำหนด');
    }

    // Based on risks
    if (risks.highRisks > 0) {
      recommendations.push(`⚠️ จัดการความเสี่ยงระดับสูง ${risks.highRisks} รายการ ทันที`);
    }

    // Based on budget
    if (budget.budgetHealthGap > 10) {
      if (budget.utilizationRate > 78) { // Project is at 78% but spent more
        recommendations.push('💰 งบประมาณใช้ไปเร็วกว่าความคืบหน้า - ทบทวน Forecast');
      } else {
        recommendations.push('💰 งบประมาณใช้ไปช้ากว่าความคืบหน้า - ตรวจสอบ Resource Allocation');
      }
    }

    // Based on pending decisions
    if (decisions.pendingDecisions > 2) {
      recommendations.push(`✅ มีการตัดสินใจรออนุมัติ ${decisions.pendingDecisions} รายการ - เร่งอนุมัติ`);
    }

    // Based on timeline
    const phasesInProgress = document.querySelectorAll('.timeline-item__status:not(:contains("เสร็จสิ้น"))').length;
    if (phasesInProgress > 2) {
      recommendations.push('📅 มีหลายเฟสทำงานพร้อมกัน - พิจารณา Focus เพื่อความมีประสิทธิภาพ');
    }

    console.log('\n💡 RECOMMENDATIONS:');
    if (recommendations.length > 0) {
      recommendations.forEach((rec, index) => {
        console.log(`   ${index + 1}. ${rec}`);
      });
    } else {
      console.log('   ✅ โครงการดำเนินไปได้ดี ไม่มีข้อเสนอแนะเร่งด่วน');
    }

    return recommendations;
  };

  generateRecommendations();

  console.log('\n--- END PROJECT ANALYTICS ---\n');

  // ===== Mock Real-time Updates (Optional) =====
  // In real app, you might want to poll for updates
  // setInterval(() => {
  //   console.log('🔄 Checking for project updates...');
  //   // Fetch latest tasks, timeline, risks, decisions, activities
  //   // Update UI dynamically
  // }, 60000); // Every 60 seconds

});
