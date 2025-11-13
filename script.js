// ----------------------
// ДАННЫЕ СЦЕНАРИЕВ
// ----------------------

const channels = [
  {
    key: "search",
    label: "Поиск (Яндекс/Google)",
    hint: "Высокое намерение купить. Дороже, но предсказуемо.",
    baseCAC: 1000,
    diminishingFactor: 0.7,
    variance: 0.18
  },
  {
    key: "social",
    label: "Соцсети и блогеры",
    hint: "Повышает узнаваемость и даёт всплески заявок.",
    baseCAC: 1300,
    diminishingFactor: 0.9,
    variance: 0.25
  },
  {
    key: "display",
    label: "Медийная реклама / ретаргетинг",
    hint: "Догревает тех, кто уже проявил интерес.",
    baseCAC: 1100,
    diminishingFactor: 0.8,
    variance: 0.22
  },
  {
    key: "seo",
    label: "SEO и контент",
    hint: "Долго разгоняется, но даёт дешёвых клиентов.",
    baseCAC: 700,
    diminishingFactor: 0.5,
    variance: 0.2
  },
  {
    key: "email",
    label: "Email и CRM",
    hint: "Работа с базой — высокий LTV и низкий CAC.",
    baseCAC: 500,
    diminishingFactor: 0.4,
    variance: 0.15
  }
];

const scenarios = [
  {
    id: "s1",
    name: "Мебельный цех",
    description:
      "Вы — маркетинг-директор небольшого мебельного цеха, который продаёт корпусную мебель местным магазинам и частным клиентам.",
    budget: 300000,
    targetCustomers: 30,
    targetROAS: 3.0,
    avgRevenuePerCustomer: 15000,
    channelModifiers: {
      search: 0.9,
      social: 1.1,
      display: 1.0,
      seo: 0.8,
      email: 0.7
    }
  },
  {
    id: "s2",
    name: "Пекарня-заготовка",
    description:
      "Вы продвигаете мини-пекарню, которая продаёт замороженную выпечку в кафе и магазины района.",
    budget: 250000,
    targetCustomers: 25,
    targetROAS: 2.7,
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 1.0,
      social: 1.0,
      display: 1.1,
      seo: 0.9,
      email: 0.8
    }
  },
  {
    id: "s3",
    name: "Окна ПВХ",
    description:
      "Небольшая компания по установке пластиковых окон ищет заявки от частных домовладельцев и квартир.",
    budget: 400000,
    targetCustomers: 35,
    targetROAS: 3.2,
    avgRevenuePerCustomer: 20000,
    channelModifiers: {
      search: 0.8,
      social: 1.1,
      display: 1.0,
      seo: 0.85,
      email: 0.9
    }
  },
  {
    id: "s4",
    name: "Упаковочная фабрика",
    description:
      "Вы отвечаете за маркетинг фабрики, которая производит картонные коробки для локального бизнеса.",
    budget: 350000,
    targetCustomers: 22,
    targetROAS: 2.8,
    avgRevenuePerCustomer: 25000,
    channelModifiers: {
      search: 0.9,
      social: 1.3,
      display: 1.0,
      seo: 0.8,
      email: 0.6
    }
  },
  {
    id: "s5",
    name: "Натуральная косметика",
    description:
      "Маленькая мануфактура делает натуральную косметику и продаёт её онлайн по всей стране.",
    budget: 300000,
    targetCustomers: 40,
    targetROAS: 2.9,
    avgRevenuePerCustomer: 8000,
    channelModifiers: {
      search: 0.95,
      social: 0.9,
      display: 1.0,
      seo: 0.85,
      email: 0.7
    }
  },
  {
    id: "s6",
    name: "Семейный ресторан",
    description:
      "Уютный семейный ресторан в спальном районе хочет увеличить трафик по выходным и будним вечерам.",
    budget: 200000,
    targetCustomers: 28,
    targetROAS: 2.4,
    avgRevenuePerCustomer: 3000,
    channelModifiers: {
      search: 1.0,
      social: 0.85,
      display: 1.1,
      seo: 0.9,
      email: 0.8
    }
  },
  {
    id: "s7",
    name: "Частная стоматология",
    description:
      "Вы продвигаете частную стоматологическую клинику с упором на имплантацию и эстетическую стоматологию.",
    budget: 450000,
    targetCustomers: 30,
    targetROAS: 3.5,
    avgRevenuePerCustomer: 35000,
    channelModifiers: {
      search: 0.8,
      social: 1.1,
      display: 1.0,
      seo: 0.9,
      email: 0.85
    }
  },
  {
    id: "s8",
    name: "Турфирма (автобусные туры)",
    description:
      "Небольшая турфирма организует автобусные туры по региону и соседним городам.",
    budget: 220000,
    targetCustomers: 45,
    targetROAS: 2.6,
    avgRevenuePerCustomer: 7000,
    channelModifiers: {
      search: 0.95,
      social: 0.9,
      display: 0.95,
      seo: 0.85,
      email: 0.8
    }
  },
  {
    id: "s9",
    name: "Гостевой дом",
    description:
      "Маленький гостевой дом возле реки принимает туристов на выходные и в отпускной сезон.",
    budget: 260000,
    targetCustomers: 26,
    targetROAS: 2.8,
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 0.9,
      social: 1.0,
      display: 0.95,
      seo: 0.9,
      email: 0.85
    }
  },
  {
    id: "s10",
    name: "Фитнес-студия",
    description:
      "Фитнес-студия недалеко от центра развивает направление групповых тренировок и абонементов.",
    budget: 230000,
    targetCustomers: 38,
    targetROAS: 2.5,
    avgRevenuePerCustomer: 9000,
    channelModifiers: {
      search: 1.0,
      social: 0.85,
      display: 1.0,
      seo: 0.9,
      email: 0.7
    }
  }
];

const currency = "₽";

// ----------------------
// СОСТОЯНИЕ И УТИЛИТЫ
// ----------------------

const gameState = {
  currentScenarioIndex: 0,
  scenarioScores: [],
  finished: false
};

const app = document.getElementById("app");

function formatMoney(num) {
  return num.toLocaleString("ru-RU");
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

// ----------------------
// РЕНДЕР ЭКРАНОВ
// ----------------------

function renderScenarioIntro() {
  const scenario = scenarios[gameState.currentScenarioIndex];
  const step = gameState.currentScenarioIndex + 1;

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>Сценарий ${step} из ${scenarios.length}</span>
      </div>
      <h1>${scenario.name}</h1>
      <p class="subtitle">${scenario.description}</p>

      <div class="meta-row">
        <div class="meta-pill">
          <span class="meta-label">Цель по клиентам</span>
          <span class="meta-value">${scenario.targetCustomers} клиентов</span>
        </div>
        <div class="meta-pill">
          <span class="meta-label">Цель по ROAS</span>
          <span class="meta-value">${scenario.targetROAS.toFixed(1)}×</span>
        </div>
      </div>

      <div class="meta-row">
        <div class="meta-pill">
          <span class="meta-label">Маркетинговый бюджет</span>
          <span class="meta-value">${formatMoney(
            scenario.budget
          )} ${currency}</span>
        </div>
        <div class="meta-pill">
          <span class="meta-label">Средняя выручка с клиента</span>
          <span class="meta-value">${formatMoney(
            scenario.avgRevenuePerCustomer
          )} ${currency}</span>
        </div>
      </div>

      <p>Распределите бюджет по каналам так, чтобы достигнуть цели по количеству клиентов и ROAS.</p>

      <div class="btn-row">
        <button class="primary" id="btn-start">Начать распределение</button>
        ${
          gameState.currentScenarioIndex > 0
            ? '<button class="secondary" id="btn-summary">К сводке игры</button>'
            : ""
        }
      </div>
    </div>
  `;

  document
    .getElementById("btn-start")
    .addEventListener("click", () => renderAllocationScreen());

  const summaryBtn = document.getElementById("btn-summary");
  if (summaryBtn) {
    summaryBtn.addEventListener("click", () => renderSummaryScreen());
  }
}

function renderAllocationScreen() {
  const scenario = scenarios[gameState.currentScenarioIndex];

  const slidersHtml = channels
    .map((ch) => {
      return `
        <div class="slider-block">
          <div class="slider-header">
            <div class="slider-title">${ch.label}</div>
            <div class="slider-amount" id="amount-${ch.key}">
              0 ${currency}
            </div>
          </div>
          <div class="slider-hint">${ch.hint}</div>
          <input
            type="range"
            min="0"
            max="${scenario.budget}"
            step="10000"
            value="0"
            data-channel="${ch.key}"
            class="slider-input"
          />
        </div>
      `;
    })
    .join("");

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>${scenario.name}</span>
      </div>
      <h2>Распределите бюджет</h2>
      <p class="subtitle">
        Цель: <strong>${scenario.targetCustomers}</strong> клиентов и
        <strong>${scenario.targetROAS.toFixed(1)}×</strong> ROAS.
      </p>

      <div class="budget-row">
        <span>Бюджет: <strong>${formatMoney(
          scenario.budget
        )} ${currency}</strong></span>
        <span id="budget-remaining">Остаток: <strong>${formatMoney(
          scenario.budget
        )} ${currency}</strong></span>
      </div>

      ${slidersHtml}

      <div class="total-row">
        <span>Итого распределено:</span>
        <span id="total-allocated">0 ${currency} из ${formatMoney(
          scenario.budget
        )} ${currency}</span>
      </div>

      <div class="btn-row">
        <button class="secondary" id="btn-back">Назад</button>
        <button class="primary" id="btn-launch" disabled>Запустить кампанию</button>
      </div>
    </div>
  `;

  const sliders = Array.from(document.querySelectorAll(".slider-input"));
  const remainingSpan = document.getElementById("budget-remaining");
  const totalSpan = document.getElementById("total-allocated");
  const launchBtn = document.getElementById("btn-launch");

  function recalc() {
    let total = 0;
    sliders.forEach((sl) => {
      total += Number(sl.value);
      const key = sl.dataset.channel;
      const amountEl = document.getElementById(`amount-${key}`);
      amountEl.textContent = `${formatMoney(Number(sl.value))} ${currency}`;
    });

    const remaining = scenario.budget - total;
    remainingSpan.innerHTML = `Остаток: <strong>${formatMoney(
      remaining
    )} ${currency}</strong>`;
    totalSpan.textContent = `${formatMoney(
      total
    )} ${currency} из ${formatMoney(scenario.budget)} ${currency}`;

    if (total === scenario.budget) {
      launchBtn.disabled = false;
    } else {
      launchBtn.disabled = true;
    }
  }

  sliders.forEach((sl) => {
    sl.addEventListener("input", recalc);
  });
  recalc();

  document
    .getElementById("btn-back")
    .addEventListener("click", () => renderScenarioIntro());

  launchBtn.addEventListener("click", () => {
    // Собираем аллокации
    const allocations = {};
    sliders.forEach((sl) => {
      allocations[sl.dataset.channel] = Number(sl.value);
    });

    renderProcessingScreen(scenario, allocations);
  });
}

function renderProcessingScreen(scenario, allocations) {
  app.innerHTML = `
    <div class="card">
      <h2>Запуск кампании…</h2>
      <p class="subtitle">Мы рассчитываем результаты по каждому каналу.</p>
      <p>Считаем заявки, выручку, CAC и ROAS…</p>
    </div>
  `;

  setTimeout(() => {
    const result = runSimulation(scenario, allocations);
    storeScenarioResult(result);
    renderResultsScreen(scenario, result);
  }, 600);
}

function renderResultsScreen(scenario, result) {
  const step = gameState.currentScenarioIndex + 1;
  const isLast = step === scenarios.length;

  const customersText =
    result.customers >= scenario.targetCustomers
      ? `Цель по клиентам достигнута! (${result.customers} из ${scenario.targetCustomers})`
      : `До цели не хватило клиентов (${result.customers} из ${scenario.targetCustomers}).`;

  const roasText =
    result.roas >= scenario.targetROAS
      ? `Цель по ROAS достигнута! (${result.roas.toFixed(2)}× ≥ ${scenario.targetROAS.toFixed(
          1
        )}×)`
      : `ROAS ниже цели (${result.roas.toFixed(2)}× < ${scenario.targetROAS.toFixed(1)}×).`;

  const cacText =
    result.cac == null
      ? "Нет клиентов, CAC не считается."
      : `${formatMoney(Math.round(result.cac))} ${currency}`;

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>Сценарий ${step} · Балл: ${result.score}</span>
      </div>
      <h2>Результаты кампании</h2>
      <p class="subtitle">${scenario.name}</p>

      <div class="score-big">${result.score}</div>
      <div class="score-caption">${customersText}<br>${roasText}</div>

      <div class="results-grid">
        <div class="result-tile">
          <div class="result-label">Клиенты</div>
          <div class="result-value">${result.customers} чел.</div>
          <div class="result-note">Цель: ${scenario.targetCustomers}</div>
        </div>
        <div class="result-tile">
          <div class="result-label">Выручка</div>
          <div class="result-value">${formatMoney(
            Math.round(result.revenue)
          )} ${currency}</div>
          <div class="result-note">С учётом среднего чека</div>
        </div>
        <div class="result-tile">
          <div class="result-label">Расходы на рекламу</div>
          <div class="result-value">${formatMoney(
            scenario.budget
          )} ${currency}</div>
          <div class="result-note">Полный бюджет израсходован</div>
        </div>
        <div class="result-tile">
          <div class="result-label">CAC (за клиента)</div>
          <div class="result-value">${cacText}</div>
          <div class="result-note">Средняя стоимость привлечения</div>
        </div>
        <div class="result-tile">
          <div class="result-label">ROAS</div>
          <div class="result-value">${result.roas.toFixed(2)}×</div>
          <div class="result-note">Цель: ${scenario.targetROAS.toFixed(1)}×</div>
        </div>
      </div>

      <p><strong>Комментарий:</strong> ${result.feedback}</p>

      <div class="btn-row">
        <button class="secondary" id="btn-retry">Попробовать ещё раз</button>
        ${
          isLast
            ? '<button class="primary" id="btn-next">К сводке игры</button>'
            : '<button class="primary" id="btn-next">Следующий сценарий</button>'
        }
      </div>
    </div>
  `;

  document.getElementById("btn-retry").addEventListener("click", () => {
    // при повторе не двигаем индекс сценария, но не записываем новый итог как отдельный
    renderAllocationScreen();
  });

  document.getElementById("btn-next").addEventListener("click", () => {
    if (isLast) {
      renderSummaryScreen();
    } else {
      gameState.currentScenarioIndex++;
      renderScenarioIntro();
    }
  });
}

function renderSummaryScreen() {
  const scores = gameState.scenarioScores;
  if (!scores.length) {
    // Если игрок сразу нажал к сводке
    app.innerHTML = `
      <div class="card">
        <h2>Сводка ещё недоступна</h2>
        <p class="subtitle">Сначала сыграйте хотя бы один сценарий.</p>
        <div class="btn-row">
          <button class="primary" id="btn-back">К сценарию</button>
        </div>
      </div>
    `;
    document
      .getElementById("btn-back")
      .addEventListener("click", () => renderScenarioIntro());
    return;
  }

  const avgScore =
    scores.reduce((acc, s) => acc + s.score, 0) / scores.length;

  let best = scores[0];
  let worst = scores[0];
  scores.forEach((s) => {
    if (s.score > best.score) best = s;
    if (s.score < worst.score) worst = s;
  });

  const itemsHtml = scores
    .map((s, idx) => {
      const scenario = scenarios.find((sc) => sc.id === s.scenarioId);
      return `
        <div class="summary-row">
          <div class="summary-name">${idx + 1}. ${scenario.name}</div>
          <div class="summary-score">${s.score}</div>
        </div>
      `;
    })
    .join("");

  const bestScenario = scenarios.find((sc) => sc.id === best.scenarioId);
  const worstScenario = scenarios.find((sc) => sc.id === worst.scenarioId);

  app.innerHTML = `
    <div class="card">
      <h2>Итоги игры</h2>
      <p class="subtitle">Вы прошли сценариев: ${scores.length} из ${
    scenarios.length
  }.</p>

      <p><strong>Средний балл:</strong> ${avgScore.toFixed(1)} / 100</p>
      <p><strong>Лучший сценарий:</strong> ${bestScenario.name} (${best.score} баллов)</p>
      <p><strong>Сложнее всего было:</strong> ${worstScenario.name} (${worst.score} баллов)</p>

      <div class="summary-list">
        ${itemsHtml}
      </div>

      <div class="btn-row">
        <button class="secondary" id="btn-continue">Продолжить текущую попытку</button>
        <button class="primary" id="btn-restart">Сыграть с начала</button>
      </div>
    </div>
  `;

  document
    .getElementById("btn-continue")
    .addEventListener("click", () => renderScenarioIntro());

  document.getElementById("btn-restart").addEventListener("click", () => {
    gameState.currentScenarioIndex = 0;
    gameState.scenarioScores = [];
    gameState.finished = false;
    renderScenarioIntro();
  });
}

// ----------------------
// СИМУЛЯЦИЯ
// ----------------------

function runSimulation(scenario, allocations) {
  let totalCustomers = 0;
  let totalSpend = 0;

  const channelResults = [];

  channels.forEach((ch) => {
    const spend = allocations[ch.key] || 0;
    totalSpend += spend;

    if (spend <= 0) {
      channelResults.push({
        key: ch.key,
        spend,
        customers: 0,
        effectiveCAC: null
      });
      return;
    }

    const spendRatio = spend / scenario.budget;
    const base = ch.baseCAC * scenario.channelModifiers[ch.key];
    const withDiminishing = base * (1 + ch.diminishingFactor * spendRatio);
    const noise = 1 + (Math.random() - 0.5) * 2 * ch.variance;
    const effectiveCAC = Math.max(100, withDiminishing * noise);
    const customers = spend / effectiveCAC;

    totalCustomers += customers;
    channelResults.push({
      key: ch.key,
      spend,
      customers,
      effectiveCAC
    });
  });

  const roundedCustomers = Math.max(0, Math.round(totalCustomers));
  const revenue = roundedCustomers * scenario.avgRevenuePerCustomer;
  const cac =
    roundedCustomers === 0 ? null : totalSpend / roundedCustomers;
  const roas = totalSpend === 0 ? 0 : revenue / totalSpend;

  const score = calculateScore(
    scenario,
    roundedCustomers,
    roas
  );

  const feedback = buildFeedback(
    scenario,
    channelResults,
    roundedCustomers,
    roas
  );

  return {
    customers: roundedCustomers,
    revenue,
    cac,
    roas,
    score,
    feedback,
    scenarioId: scenario.id
  };
}

function calculateScore(scenario, customers, roas) {
  const custRatio =
    scenario.targetCustomers === 0
      ? 1
      : customers / scenario.targetCustomers;
  const roasRatio =
    scenario.targetROAS === 0 ? 1 : roas / scenario.targetROAS;

  let scoreCustomers = Math.min(custRatio, 1) * 50;
  if (custRatio > 1) {
    scoreCustomers += Math.min((custRatio - 1) * 20, 10);
  }

  let scoreROAS = Math.min(roasRatio, 1) * 50;
  if (roasRatio > 1) {
    scoreROAS += Math.min((roasRatio - 1) * 20, 10);
  }

  const totalScore = clamp(Math.round(scoreCustomers + scoreROAS), 0, 100);
  return totalScore;
}

function buildFeedback(scenario, channelResults, customers, roas) {
  if (customers === 0) {
    return "Клиентов привлечь не удалось — вероятно, бюджет распределён слишком узко или в каналы с низкой эффективностью.";
  }

  const active = channelResults.filter((c) => c.spend > 0 && c.effectiveCAC);
  if (!active.length) {
    return "Бюджет не был задействован канально — попробуйте распределить его между несколькими источниками.";
  }

  const avgCAC =
    active.reduce((acc, c) => acc + c.effectiveCAC, 0) / active.length;

  const overspent = [...active]
    .sort((a, b) => b.spend - a.spend)
    .filter((c) => c.effectiveCAC > avgCAC * 1.1);

  const undervalued = [...active]
    .sort((a, b) => a.spend - b.spend)
    .filter((c) => c.effectiveCAC < avgCAC * 0.9);

  const nameByKey = (key) =>
    channels.find((ch) => ch.key === key)?.label ?? key;

  const hints = [];

  if (overspent.length > 0) {
    const names = overspent.slice(0, 2).map((c) => nameByKey(c.key));
    hints.push(
      `Вы вложили слишком много в каналы с высоким CAC: ${names.join(
        ", "
      )}. Попробуйте уменьшить их долю.`
    );
  }

  if (undervalued.length > 0) {
    const names = undervalued.slice(0, 2).map((c) => nameByKey(c.key));
    hints.push(
      `Часть бюджетов можно усилить: ${names.join(
        ", "
      )} давали более дешёвых клиентов.`
    );
  }

  if (hints.length === 0) {
    if (roas >= scenario.targetROAS && customers >= scenario.targetCustomers) {
      return "Отличный баланс между количеством клиентов и окупаемостью. Попробуйте слегка сместить бюджет, чтобы проверить устойчивость результата.";
    }
    if (customers < scenario.targetCustomers) {
      return "Клиентов не хватает — попробуйте усилить каналы с высоким намерением (поиск) и дешевым CAC (SEO, email).";
    }
    return "ROAS не дотягивает до цели — возможно, стоит сократить дорогие охватные каналы и сосредоточиться на тех, где выше конверсия и ниже CAC.";
  }

  return hints.join(" ");
}

function storeScenarioResult(result) {
  // Сохраняем только один результат на сценарий — последний сыгранный
  const idx = gameState.scenarioScores.findIndex(
    (s) => s.scenarioId === result.scenarioId
  );
  const entry = {
    scenarioId: result.scenarioId,
    score: result.score,
    customers: result.customers,
    roas: result.roas
  };
  if (idx === -1) {
    gameState.scenarioScores.push(entry);
  } else {
    gameState.scenarioScores[idx] = entry;
  }
}

// ----------------------
// СТАРТ ИГРЫ
// ----------------------

renderScenarioIntro();
