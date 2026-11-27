// 모바일 메뉴 열기와 닫기
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', opened);
});
// 갤러리 버튼을 누르면 사진과 설명을 변경
const photos = ['competition.jpg', 'team.jpg'];
const descriptions = ['전국 대학동아리 대회 단체 사진', '대회 참가 단체 사진'];
let current = 0;
const gallery = document.querySelector('#gallery-image');
function showPhoto(step) {
  current = (current + step + photos.length) % photos.length;
  gallery.src = photos[current];
  gallery.alt = descriptions[current];
  document.querySelector('#caption').textContent = `${current + 1} / ${photos.length} · ${descriptions[current]}`;
}
if (gallery) {
  document.querySelector('#prev').addEventListener('click', () => showPhoto(-1));
  document.querySelector('#next').addEventListener('click', () => showPhoto(1));
}
// 가입 문의 연락처 복사
const copy = document.querySelector('#copy');
if (copy) copy.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('010-2687-4266'); document.querySelector('#copy-status').textContent = '연락처를 복사했습니다.'; }
  catch { document.querySelector('#copy-status').textContent = '복사가 지원되지 않습니다. 표시된 번호를 직접 복사해 주세요.'; }
});
