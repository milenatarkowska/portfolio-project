<template>
  <div class="about-me">
    <section class="left-title">
      <h1>ABOUT ME</h1>
    </section>
    <section class="right-info">
      <p>
        Third-year Computer Science student at the Polish-Japanese Academy of Information Technology in Warsaw, actively seeking internship and entry-level opportunities in the IT industry.
        <br><br>
        I'm passionate about expanding my practical knowledge and applying my skills in real-world scenarios. My key areas of interest include Software Development, Cloud Engineering, DevOps, and Security. Alongside my academic studies, I continually develop my expertise through online courses and self-directed learning.
        <br><br>
        With strong analytical skills, a problem-solving mindset, and a creative approach, I'm eager to contribute to innovative projects and grow as a professional in the tech industry.
      </p>
    </section>
  </div>
</template>

<style scoped>
.about-me{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  padding: 3rem;
  gap: 4rem;
}

.left-title {
  flex: 1;
  text-align: center;
}

.right-info {
  flex: 2;
  text-align: left;
  line-height: 1.7;
  font-size: 1.1rem;
}


</style>
