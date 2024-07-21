<template>
  <div class="qr-container">
    <div class="qr-code">
      <img src="../assets/image-qr-code.png" alt="QR Code Image" />
    </div>

    <div class="qr-text">Improve your front-end skills by building projects</div>

    <div class="qr-guide">
      Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

.qr-container {
  font-family: 'Outfit', sans-serif;
  max-width: 320px;
  background-color: #fff;
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .qr-code {
    img {
      max-width: 288px;
      border-radius: 10px;
    }
  }

  .qr-text {
    color: hsl(218, 44%, 22%);
    font-size: 2.2rem;
    font-weight: 800;
    text-align: center;
    line-height: 1.2;
    margin: 2rem 0;
  }

  .qr-guide {
    color: #7b879b;
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.5rem;
    max-width: 85%;
    line-height: 1.2;
  }
}
</style>
