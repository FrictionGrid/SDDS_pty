/**
 * SDDS Email AI - Interactive Features
 *
 * Features:
 * - Draft selection and loading into editor
 * - Active state management
 * - Update draft functionality
 * - Send email functionality
 */

document.addEventListener('DOMContentLoaded', function() {

  // ===== Mock Email Data =====
  const emailDrafts = {
    '1': {
      to: 'somchai@company.com',
      subject: 'ขอบคุณสำหรับการสนทนาและการเจรจาในวันนี้ เรามีความยินดีที่จะร่วมงานกับท่าน',
      content: `เรียน คุณสมชาย

ขอบคุณสำหรับเวลาอันมีค่าในการประชุมเมื่อวันนี้ เรารู้สึกยินดีเป็นอย่างยิ่งที่ได้มีโอกาสพูดคุยเกี่ยวกับโครงการและความร่วมมือในอนาคต

เราเชื่อมั่นว่าความร่วมมือครั้งนี้จะเป็นประโยชน์ต่อทั้งสองฝ่าย และเรามุ่งมั่นที่จะมอบบริการที่ดีที่สุดให้กับท่านและองค์กร

หากท่านมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติม กรุณาติดต่อเราได้ตลอดเวลา

ขอแสดงความนับถือ
ทีม SDDS`
    },
    '2': {
      to: 'somsri@customer.co.th',
      subject: 'แจ้งการอัพเดทสถานะโครงการและกำหนดการประชุมครั้งถัดไป',
      content: `เรียน คุณสมศรี

ตามที่เราได้มีการติดตามความคืบหน้าของโครงการ ขอแจ้งสถานะล่าสุดดังนี้:

• Phase 1: เสร็จสมบูรณ์ 100%
• Phase 2: กำลังดำเนินการ 75%
• Phase 3: อยู่ระหว่างการวางแผน

เราขอนัดหมายการประชุม เพื่อรีวิวความคืบหน้าและวางแผนขั้นตอนถัดไป
วันที่: 20 ธันวาคม 2567 เวลา 14:00 น.
รูปแบบ: Online Meeting (Microsoft Teams)

กรุณายืนยันการเข้าร่วมประชุม

ขอแสดงความนับถือ
ทีม SDDS`
    },
    '3': {
      to: 'vichai@enterprise.com',
      subject: 'ข้อเสนอพิเศษสำหรับลูกค้า VIP - ส่วนลดและโปรโมชั่นประจำเดือน',
      content: `เรียน คุณวิชัย

ในฐานะลูกค้า VIP ของเรา เรามีความยินดีที่จะนำเสนอข้อเสนอพิเศษสำหรับเดือนนี้:

🎁 โปรโมชั่นพิเศษ:
• ส่วนลด 20% สำหรับ Enterprise Package
• ฟรี! Premium Support 3 เดือน
• Add-on modules ลด 15%

⏰ โปรโมชั่นนี้ใช้ได้ถึง: 31 ธันวาคม 2567

หากท่านสนใจ กรุณาติดต่อ Account Manager ของท่านหรือตอบกลับอีเมลนี้

ขอแสดงความนับถือ
ทีม SDDS Sales`
    },
    '4': {
      to: 'praphan@techcorp.com',
      subject: 'ติดตามผลการสั่งซื้อและกำหนดการจัดส่งสินค้า',
      content: `เรียน คุณประพันธ์

ขอแจ้งสถานะการสั่งซื้อของท่าน:

📦 Order ID: SDDS-2024-1234
📅 วันที่สั่ง: 10 ธันวาคม 2567
📊 สถานะ: กำลังเตรียมจัดส่ง

รายการสินค้า:
• SDDS Enterprise License x 10
• Hardware Security Module x 2
• Installation Service

กำหนดการจัดส่ง: 18 ธันวาคม 2567
ติดตามพัสดุ: TH1234567890TH

หากมีข้อสงสัย กรุณาติดต่อ support@sdds.com

ขอแสดงความนับถือ
ทีม SDDS Logistics`
    },
    '5': {
      to: 'napaporn@marketing.co',
      subject: 'ขอเชิญเข้าร่วมงาน Webinar: Digital Transformation 2025',
      content: `เรียน คุณนภาพร

SDDS ขอเชิญท่านเข้าร่วม Webinar พิเศษ

📌 หัวข้อ: "Digital Transformation 2025: AI & Enterprise Innovation"

📅 วันที่: 25 ธันวาคม 2567
⏰ เวลา: 10:00 - 12:00 น.
💻 รูปแบบ: Online (Zoom)

🎯 สิ่งที่คุณจะได้รับ:
• กลยุทธ์การนำ AI มาใช้ในองค์กร
• Case Study จากองค์กรชั้นนำ
• Live Demo: SDDS AI Features
• Q&A Session กับผู้เชี่ยวชาญ

🎁 สิทธิพิเศษสำหรับผู้เข้าร่วม:
• E-certificate
• Exclusive Report
• Special Discount Code

👉 ลงทะเบียน: https://sdds.com/webinar2025

ขอแสดงความนับถือ
ทีม SDDS Marketing`
    },
    '6': {
      to: 'thanakan@finance.com',
      subject: 'แจ้งข้อมูลการชำระเงินและใบกำกับภาษี',
      content: `เรียน คุณธนกานต์

ขอแจ้งรายละเอียดการชำระเงินและใบกำกับภาษีดังนี้:

🧾 Invoice No: INV-2024-5678
📅 วันที่: 15 ธันวาคม 2567
💰 ยอดรวม: 125,000 บาท (รวม VAT 7%)

รายการ:
• SDDS Enterprise License (Annual) - 100,000 บาท
• Premium Support - 15,000 บาท
• Training Service - 10,000 บาท

💳 การชำระเงิน:
• ได้รับชำระเงินเรียบร้อยแล้ว
• วันที่ชำระ: 15 ธันวาคม 2567
• ช่องทาง: Bank Transfer

📄 เอกสารแนบ:
• ใบกำกับภาษี/ใบเสร็จรับเงิน
• ใบเสร็จรับเงิน

หากมีข้อสงสัย กรุณาติดต่อ accounting@sdds.com

ขอแสดงความนับถือ
ทีม SDDS Finance`
    },
    '7': {
      to: 'rattana@partner.co.th',
      subject: 'ขอเสนอความร่วมมือทางธุรกิจและพันธมิตรเชิงกลยุทธ์',
      content: `เรียน คุณรัตนา

SDDS มีความยินดีที่จะขอเสนอความร่วมมือทางธุรกิจในฐานะพันธมิตรเชิงกลยุทธ์

🤝 รูปแบบความร่วมมือ:
• Solution Partner Program
• Revenue Sharing Model
• Co-Marketing Initiatives
• Technical Support & Training

✨ ประโยชน์ที่คุณจะได้รับ:
• ส่วนแบ่งรายได้สูงสุด 30%
• การสนับสนุนทางการตลาด
• การฝึกอบรมและ Certification
• Priority Support

📊 ข้อมูลเพิ่มเติม:
เราได้แนบเอกสาร Partner Program Proposal สำหรับการพิจารณา

เรายินดีที่จะนัดหมายพบปะเพื่อหารือรายละเอียดเพิ่มเติม

ขอแสดงความนับถือ
ทีม SDDS Partner Relations`
    },
    '8': {
      to: 'anucha@startup.io',
      subject: 'ยินดีต้อนรับสู่ SDDS - เริ่มต้นใช้งานระบบของเรา',
      content: `เรียน คุณอนุชา

ยินดีต้อนรับสู่ SDDS Enterprise System! 🎉

เราดีใจที่คุณได้เข้าร่วมเป็นส่วนหนึ่งของครอบครัว SDDS

📚 ขั้นตอนการเริ่มต้นใช้งาน:

1️⃣ ตั้งค่าบัญชีของคุณ
   → ตรวจสอบอีเมลยืนยันและเปิดใช้งานบัญชี

2️⃣ ทำความรู้จักกับระบบ
   → เข้าร่วม Onboarding Session (ฟรี!)
   → ดู Video Tutorials ที่ https://sdds.com/tutorials

3️⃣ ติดตั้งและ Configure
   → ดาวน์โหลด Installation Guide
   → ทีมเราพร้อมช่วยเหลือตลอด 24/7

📞 ช่องทางติดต่อ:
• Email: support@sdds.com
• Tel: 02-xxx-xxxx
• Live Chat: https://sdds.com/chat

🎁 Welcome Gift:
• ฟรี! 1 ชั่วโมง One-on-One Consultation
• Exclusive Resources & Templates

เรายินดีให้บริการและสนับสนุนคุณตลอดเวลา

ขอแสดงความนับถือ
ทีม SDDS Customer Success`
    }
  };

  // ===== DOM Elements =====
  const draftCards = document.querySelectorAll('.draft-card');
  const emailTo = document.getElementById('emailTo');
  const emailSubject = document.getElementById('emailSubject');
  const emailContent = document.getElementById('emailContent');
  const btnUpdate = document.getElementById('btnUpdate');
  const btnSend = document.getElementById('btnSend');

  // ===== Load Initial Draft =====
  // Load draft #1 by default
  if (emailDrafts['1']) {
    loadDraftIntoEditor('1');
  }

  // ===== Draft Card Click Handler =====
  draftCards.forEach(card => {
    card.addEventListener('click', function() {
      const draftId = this.getAttribute('data-draft-id');

      // Remove active class from all cards
      draftCards.forEach(c => c.classList.remove('active'));

      // Add active class to clicked card
      this.classList.add('active');

      // Load draft data into editor
      loadDraftIntoEditor(draftId);
    });
  });

  // ===== Update Draft Button =====
  if (btnUpdate) {
    btnUpdate.addEventListener('click', function() {
      const to = emailTo.value;
      const subject = emailSubject.value;
      const content = emailContent.value;

      if (!to || !subject || !content) {
        alert('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }

      // Mock update action
      console.log('📝 Updating draft...');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('Content:', content);

      // Simulate save success
      setTimeout(() => {
        alert('✅ บันทึก Draft สำเร็จ!\n\nระบบได้อัพเดทข้อมูลเรียบร้อยแล้ว');
        console.log('✅ Draft updated successfully');
      }, 300);
    });
  }

  // ===== Send Email Button =====
  if (btnSend) {
    btnSend.addEventListener('click', function() {
      const to = emailTo.value;
      const subject = emailSubject.value;
      const content = emailContent.value;

      if (!to || !subject || !content) {
        alert('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }

      // Confirmation dialog
      const confirmed = confirm(`📧 ยืนยันการส่งอีเมล?\n\nถึง: ${to}\nหัวข้อ: ${subject}\n\nคุณต้องการส่งอีเมลนี้หรือไม่?`);

      if (!confirmed) {
        return;
      }

      // Mock send action
      console.log('📤 Sending email...');
      console.log('To:', to);
      console.log('Subject:', subject);
      console.log('Content:', content);

      // Simulate send success
      setTimeout(() => {
        alert('✅ ส่งอีเมลสำเร็จ!\n\nอีเมลของคุณถูกส่งไปยัง ' + to + ' เรียบร้อยแล้ว');
        console.log('✅ Email sent successfully to', to);

        // Clear editor (optional)
        // emailSubject.value = '';
        // emailContent.value = '';
      }, 500);
    });
  }

  // ===== Helper Function: Load Draft into Editor =====
  function loadDraftIntoEditor(draftId) {
    const draft = emailDrafts[draftId];

    if (!draft) {
      console.error('Draft not found:', draftId);
      return;
    }

    // Populate editor fields
    emailTo.value = draft.to;
    emailSubject.value = draft.subject;
    emailContent.value = draft.content;

    console.log('✅ Loaded draft #' + draftId);
  }

  console.log('✅ Email AI System loaded');
  console.log(`📧 Total drafts: ${draftCards.length}`);
});
