(() => {
  const pages = [...document.querySelectorAll('.page')];
  document.querySelectorAll('[data-page-count]').forEach(el => el.textContent = String(pages.length).padStart(2, '0'));
  pages.forEach((page, index) => page.querySelectorAll('[data-page-number]').forEach(el => el.textContent = String(index + 1).padStart(2, '0')));
  const status = document.querySelector('.print-status');
  function validate() {
    const overflow = pages.filter(page => {
      const content = page.querySelector('.page-content');
      const tooTall = content.scrollHeight > content.clientHeight + 2;
      page.classList.toggle('overflow', tooTall);
      return tooTall;
    });
    if (status) status.textContent = overflow.length ? `내용이 넘치는 페이지: ${overflow.map(p => pages.indexOf(p) + 1).join(', ')}. 본문을 다음 .page로 나눈 뒤 인쇄하세요. 실제 PDF 쪽수는 미리보기에서 확인하세요.` : '';
    return !overflow.length;
  }
  document.querySelector('[data-print]')?.addEventListener('click', () => { if (validate()) window.print(); });
  window.addEventListener('beforeprint', validate);
  window.addEventListener('resize', validate);
  document.fonts.ready.then(validate);
})();
