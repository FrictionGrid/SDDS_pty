<!-- Sidebar -->
<aside class="sidebar">
  <div class="brand">
    <div class="brand__logo">
      <img src="logo.png" alt="SDDS">
    </div>
    <div>
      <div class="brand__name">SDDS</div>
      <div class="brand__tagline">Enterprise System</div>
    </div>
  </div>

  <nav class="nav">
    <a href="dashboard.php" class="<?php echo ($currentPage == 'dashboard') ? 'active' : ''; ?>">Dashboard</a>
    <a href="customers.php" class="<?php echo ($currentPage == 'customers') ? 'active' : ''; ?>">Customers</a>
    <a href="email-ai.php" class="<?php echo ($currentPage == 'email-ai') ? 'active' : ''; ?>">Email AI</a>
    <a href="project.php" class="<?php echo ($currentPage == 'project') ? 'active' : ''; ?>">Project</a>
  </nav>
</aside>
