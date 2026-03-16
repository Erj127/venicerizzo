const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.panel'));
const newsletterForm = document.querySelector('.newsletter-form');
const newsletterFeedback = document.querySelector('.form-feedback');
const storeCards = Array.from(document.querySelectorAll('.store-card'));

function activateTab(nextTab) {
  if (!nextTab) return;

  for (const tab of tabs) {
    const isActive = tab === nextTab;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tab.setAttribute('tabindex', isActive ? '0' : '-1');
  }

  for (const panel of panels) {
    const shouldShow = panel.id === nextTab.dataset.target;
    panel.hidden = !shouldShow;
  }
}

function bindTabs() {
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));

    tab.addEventListener('keydown', (event) => {
      const isArrowRight = event.key === 'ArrowRight';
      const isArrowLeft = event.key === 'ArrowLeft';
      const isHome = event.key === 'Home';
      const isEnd = event.key === 'End';

      if (!isArrowRight && !isArrowLeft && !isHome && !isEnd) return;

      event.preventDefault();
      let nextIndex = index;

      if (isArrowRight) nextIndex = (index + 1) % tabs.length;
      if (isArrowLeft) nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (isHome) nextIndex = 0;
      if (isEnd) nextIndex = tabs.length - 1;

      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    });
  });
}

function parseTimeToMinutes(timeValue) {
  const [hours, minutes] = timeValue.split(':').map(Number);
  return hours * 60 + minutes;
}

function getVeniceLocalTime() {
  const parts = new Intl.DateTimeFormat('it-IT', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(new Date());

  const dayText = parts.find((part) => part.type === 'weekday')?.value.toLowerCase() || '';
  const hour = Number(parts.find((part) => part.type === 'hour')?.value || '0');
  const minute = Number(parts.find((part) => part.type === 'minute')?.value || '0');

  return {
    isSunday: dayText.startsWith('dom'),
    currentMinutes: hour * 60 + minute
  };
}

function updateStoreStatuses() {
  if (!storeCards.length) return;

  const { isSunday, currentMinutes } = getVeniceLocalTime();

  storeCards.forEach((card) => {
    const statusElement = card.querySelector('.store-status');
    if (!statusElement) return;

    const openTime = isSunday ? card.dataset.openSun : card.dataset.openWeek;
    const closeTime = isSunday ? card.dataset.closeSun : card.dataset.closeWeek;

    if (!openTime || !closeTime) {
      statusElement.textContent = 'Orari non disponibili';
      statusElement.className = 'store-status closed';
      return;
    }

    const openMinutes = parseTimeToMinutes(openTime);
    const closeMinutes = parseTimeToMinutes(closeTime);
    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    statusElement.className = `store-status ${isOpen ? 'open' : 'closed'}`;
    statusElement.textContent = isOpen ? `Aperto ora · chiude alle ${closeTime}` : `Chiuso ora · apre alle ${openTime}`;
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u.test(email);
}

function bindNewsletterForm() {
  if (!newsletterForm || !newsletterFeedback) return;

  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const honeypot = newsletterForm.website?.value?.trim();
    if (honeypot) {
      newsletterFeedback.textContent = 'Invio bloccato.';
      newsletterFeedback.style.color = 'var(--danger)';
      return;
    }

    if (!newsletterForm.checkValidity()) {
      newsletterFeedback.textContent = 'Compila i campi obbligatori e accetta la privacy policy.';
      newsletterFeedback.style.color = 'var(--danger)';
      return;
    }

    const email = newsletterForm.email.value.trim();
    if (!validateEmail(email)) {
      newsletterFeedback.textContent = 'Inserisci un indirizzo email valido.';
      newsletterFeedback.style.color = 'var(--danger)';
      return;
    }

    newsletterFeedback.textContent = 'Iscrizione completata. Codice attivato: RIZZO10';
    newsletterFeedback.style.color = 'var(--success)';
    newsletterForm.reset();
  });
}

bindTabs();
updateStoreStatuses();
bindNewsletterForm();
