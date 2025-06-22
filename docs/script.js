window.addEventListener('load', () => {
  const hamburgerMenu = document.getElementById('hamburger_menu');
  const sideMenu = document.getElementById('side_menu');
  const closeBtn = document.getElementById('close_btn');

  hamburgerMenu.addEventListener('click', () => {
    sideMenu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('open');
  });

function setResponsiveVideo() {
  const videoCnt = document.getElementById('video_cnt');
  const isMobile = window.innerWidth <= 768;

  const videoPath = isMobile
    ? './videos/Gomniverse Mobile.mp4'
    : './videos/Gomniverse Intro.mp4';

  videoCnt.innerHTML = `
    <video autoplay muted loop playsinline>
      <source src="${videoPath}" type="video/mp4">
    </video>
  `;
}

document.addEventListener('DOMContentLoaded', setResponsiveVideo);
window.addEventListener('resize', setResponsiveVideo);

});

document.addEventListener("DOMContentLoaded", () => {
  const mobileCnt = document.getElementById('mobile_cnt');
  const windowWidth = window.innerWidth;

  if (windowWidth <= 768) {
    mobileCnt.style.display = 'block';
  } else {
    mobileCnt.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('#mobile_cnt .circle'); // 가운데 버튼
  const toggleMenu = document.getElementById('toggle_menu');

  hamburgerBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('show');
  });
});



