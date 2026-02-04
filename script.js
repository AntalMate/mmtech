  // Bemutatkozás váltás
  function toggleBio(id) {
    const bio = document.getElementById(id);
    bio.style.display = (bio.style.display === "none" || bio.style.display === "") ? "block" : "none";
  }
  
  // Képek vetítése
  const images = [
    "image1.png",
    "image2.png",
    "image3.png"
  ];
  let currentIndex = 0;
  
  function showNextImage() {
    const gallery = document.getElementById("galleryImage");
    gallery.style.display = "block";
    gallery.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
// Smooth analog + animated digital clock
(function () {
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');
    const secondHand = document.getElementById('secondHand');
    const digitalTime = document.getElementById('digitalTime');
    const digitalDate = document.getElementById('digitalDate');
  

    function pad(n) { return n < 10 ? '0' + n : n; }
  

    function updateFrame() {
      const now = new Date();
  
    
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000; 
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;
  
      
      const secondDeg = s * 6;       
      const minuteDeg = m * 6;       
      const hourDeg   = h * 30;      
  
      
      if (hourHand) hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
      if (minuteHand) minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
      if (secondHand) secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
  
      
      const hours = pad(now.getHours());
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());
      const timeString = `${hours}:${minutes}:${seconds}`;
  
      
      if (digitalTime.textContent !== timeString) {
        
        digitalTime.classList.remove('pulse');
        
        void digitalTime.offsetWidth;
        digitalTime.textContent = timeString;
        digitalTime.classList.add('pulse');
      }
  
      
      const days = ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'];
      const dateString = `${now.getFullYear()}.${pad(now.getMonth()+1)}.${pad(now.getDate())}. ${days[now.getDay()]}`;
      digitalDate.textContent = dateString;
  
      
      requestAnimationFrame(updateFrame);
    }
  
    
    requestAnimationFrame(updateFrame);
  })();
    