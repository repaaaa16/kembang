function showFlower() {
    document.getElementById('intro').style.opacity = '0';
  
    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
      const flower = document.getElementById('flower');
      flower.classList.add('show');
  
      // Play sound
      const sound = document.getElementById('bloomSound');
      sound.play();
    }, 1000);
  }
  