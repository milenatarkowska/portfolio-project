<template>
  <div class="footer">
    <p>&copy; 2025 Milena Tarkowska</p>
    <a href="https://www.linkedin.com/in/milena-tarkowska/" target="_blank" rel="noopener noreferrer" class="footer-link"><i class="fab fa-linkedin"></i><span>LinkedIn</span></a>
    <a href="https://github.com/milenatarkowska" target="_blank" rel="noopener noreferrer" class="footer-link"><i class="fab fa-github"></i> <span>Github</span></a>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0.5rem;
}

.footer-link{
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

a:hover{
  text-decoration: underline;
}
</style>
