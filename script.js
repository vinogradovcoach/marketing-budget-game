// ----------------------
// КОНФИГУРАЦИЯ И СЦЕНАРИИ
// ----------------------

/* Экономическая модель: Российский областной центр (население ~650к).
   Средняя зарплата: ~66,000 руб.
   Специфика: 
   - Ограниченная емкость каналов (быстрое насыщение).
   - Высокая значимость Геосервисов для локального бизнеса.
   - Email эффективен только в B2B.
*/

const channels = [
  {
    key: "search",
    label: "Поисковая реклама",
    description: "Реклама в выдаче Яндекс/Google по ключевым запросам. Работа с горячим спросом.",
    baseCAC: 2100, 
    diminishingFactor: 0.85, 
    variance: 0.15,
    saturationPoint: 0.25, // Быстрое насыщение в небольшом городе
    revenueMultiplier: 1.1 
  },
  {
    key: "social",
    label: "Таргетированная реклама",
    description: "Реклама в соцсетях (VK, Telegram). Настройка по интересам, демографии и гео.",
    baseCAC: 950, 
    diminishingFactor: 0.65, 
    variance: 0.35,
    saturationPoint: 0.20,
    revenueMultiplier: 0.9 
  },
  {
    key: "display",
    label: "Медийная реклама",
    description: "Баннерные сети (РСЯ) и охватные кампании. Работа на узнаваемость бренда.",
    baseCAC: 1600,
    diminishingFactor: 0.9,
    variance: 0.4,
    saturationPoint: 0.15,
    revenueMultiplier: 0.95
  },
  {
    key: "seo",
    label: "SEO и Геосервисы",
    description: "Оптимизация сайта, Яндекс.Карты, 2ГИС. Органический трафик.",
    baseCAC: 400, 
    diminishingFactor: 0.4, // Сложно масштабировать бюджетом
    variance: 0.2,
    saturationPoint: 0.15,
    revenueMultiplier: 1.0
  },
  {
    key: "email",
    label: "Email-маркетинг",
    description: "Работа с базой, CRM-маркетинг и прямые продажи (B2B).",
    baseCAC: 300, 
    diminishingFactor: 0.3, 
    variance: 0.1,
    saturationPoint: 0.10,
    revenueMultiplier: 1.25 
  },
  {
    key: "offline",
    label: "Оффлайн реклама",
    description: "Наружная реклама, радио, локальная полиграфия.",
    baseCAC: 3800, 
    diminishingFactor: 0.98, // Почти не имеет предела емкости (охват всех)
    variance: 0.5, 
    saturationPoint: 0.45,
    revenueMultiplier: 0.85
  }
];

const scenarios = [
  {
    id: "s1",
    name: "Мебельное производство (Кухни)",
    description: "Изготовление кухонь на заказ. Средний ценовой сегмент. Конкуренция с федеральными сетями.",
    budget: 150000,
    targetCustomers: 160,      // was 15
    targetROAS: 65.0,          // was 4.0
    avgRevenuePerCustomer: 55000,
    channelModifiers: {
      search: 0.9,   // Эффективно
      social: 1.1,
      display: 1.4,
      seo: 0.7,      // Локальное присутствие критично
      email: 2.5,    // Нет базы
      offline: 1.3
    },
    difficulty: 0.9
  },

  {
    id: "s2",
    name: "Сеть пекарен",
    description: "3 точки в спальных районах. Трафик местных жителей. Низкий–средний чек, премиальный формат (кофе, десерты).",
    budget: 45000,
    targetCustomers: 64,       // was 140
    targetROAS: 2.5,           // was 2.5
    avgRevenuePerCustomer: 850, // was 420
    channelModifiers: {
      search: 3.0,   // Неэффективно для товаров повседневного спроса
      social: 0.5,   // Локальный гео-таргетинг
      display: 1.8,
      seo: 0.4,      // Карты/2ГИС — критически важно
      email: 2.0,
      offline: 0.45   // Локальная раздача, лифты
    },
    difficulty: 0.85
  },

  {
    id: "s3",
    name: "Остекление балконов",
    description: "Высокая сезонность и конкуренция. Клиенты сравнивают цены у множества подрядчиков.",
    budget: 220000,
    targetCustomers: 192,      // was 25
    targetROAS: 39.0,          // was 3.2
    avgRevenuePerCustomer: 38000,
    channelModifiers: {
      search: 1.2,   // Перегретый аукцион
      social: 1.8,
      display: 0.9,  // Ретаргетинг
      seo: 1.1,
      email: 2.0,
      offline: 0.9
    },
    difficulty: 1.0
  },

  {
    id: "s4",
    name: "Производство гофротары (B2B)",
    description: "Поставка упаковки для локального бизнеса. Длинный цикл сделки, LTV.",
    budget: 80000,
    targetCustomers: 148,      // was 8
    targetROAS: 185.0,         // was 5.0
    avgRevenuePerCustomer: 75000,
    channelModifiers: {
      search: 1.1,
      social: 3.0,  // Нерелевантный канал
      display: 2.0,
      seo: 1.2,
      email: 0.4,   // Прямые коммерческие предложения
      offline: 2.5
    },
    difficulty: 0.95
  },

  {
    id: "s5",
    name: "Автозапчасти (Интернет-магазин)",
    description: "Специфические запчасти (праворульные авто). Доставка по региону.",
    budget: 120000,
    targetCustomers: 138,      // was 40
    targetROAS: 15.5,          // was 3.5
    avgRevenuePerCustomer: 11500,
    channelModifiers: {
      search: 0.7,  // Низкочастотные запросы по артикулам
      social: 1.4,
      display: 1.2,
      seo: 0.8,     // Профильные форумы
      email: 1.5,
      offline: 3.0
    },
    difficulty: 0.9
  },

  {
    id: "s6",
    name: "Гриль-бар",
    description: "Вечерняя посадка и бизнес-ланчи. Конкуренция за досуг в центре города.",
    budget: 60000,
    targetCustomers: 70,       // was 60
    targetROAS: 3.5,           // was 2.8
    avgRevenuePerCustomer: 2100,
    channelModifiers: {
      search: 1.6,
      social: 0.6,  // Визуальный контент
      display: 1.2,
      seo: 0.7,     // Отзывы, Карты
      email: 1.8,
      offline: 1.2
    },
    difficulty: 0.8
  },

  {
    id: "s7",
    name: "Стоматология (Имплантация)",
    description: "Высокий чек, сложное принятие решения. Важен фактор доверия к врачу.",
    budget: 180000,
    targetCustomers: 202,      // was 10
    targetROAS: 89.0,          // was 3.8
    avgRevenuePerCustomer: 65000,
    channelModifiers: {
      search: 0.8,  // Горячий спрос
      social: 1.1,
      display: 1.3,
      seo: 0.9,     // Репутация
      email: 1.4,   // Работа с базой
      offline: 1.5
    },
    difficulty: 0.95
  },

  {
    id: "s8",
    name: "Загородная база отдыха",
    description: "Сезонный спрос. Продажа путевок на выходные жителям города и области.",
    budget: 90000,
    targetCustomers: 110,      // was 30
    targetROAS: 23.0,          // was 3.0
    avgRevenuePerCustomer: 16000,
    channelModifiers: {
      search: 1.0,
      social: 0.6,  // Визуальный контент, гео-таргетинг
      display: 1.0,
      seo: 1.1,
      email: 1.3,
      offline: 2.0
    },
    difficulty: 0.85
  },

  {
    id: "s9",
    name: "Образовательный центр (ЕГЭ)",
    description: "Подготовка старшеклассников. ЦА: родители. Сезонность: август-сентябрь.",
    budget: 100000,
    targetCustomers: 106,      // was 22
    targetROAS: 35.0,          // was 3.5
    avgRevenuePerCustomer: 28000,
    channelModifiers: {
      search: 1.0,
      social: 0.7,  // Родительские сообщества
      display: 1.5,
      seo: 1.2,
      email: 1.5,
      offline: 1.0  // Школы, собрания
    },
    difficulty: 0.9
  },

  {
    id: "s10",
    name: "Строительство бань",
    description: "Частный подрядчик. Работа по области. Высокий чек, визуальный продукт.",
    budget: 140000,
    targetCustomers: 155,      // was 4
    targetROAS: 310.0,         // was 6.0
    avgRevenuePerCustomer: 250000,
    channelModifiers: {
      search: 1.1,
      social: 0.5,  // Видеообзоры объектов
      display: 1.4,
      seo: 1.0,
      email: 2.0,
      offline: 1.3
    },
    difficulty: 1.0
  }
];

const currency = "₽";

// ----------------------
// МАТЕМАТИЧЕСКОЕ ЯДРО
// ----------------------

function calculateChannelEfficiency(channel, spend, totalBudget, modifier) {
    if (spend <= 0) return { effectiveCAC: null, customers: 0 };
    
    // Базовый CAC корректируется модификатором сценария
    const adjustedBaseCAC = channel.baseCAC * modifier;
    
    // Доля бюджета в канале
    const spendRatio = spend / totalBudget;
    
    // 1. Эффект убывающей отдачи (Diminishing returns)
    // Чем выше траты, тем дороже привлечение следующего клиента
    const diminishingEffect = 1 + (channel.diminishingFactor * Math.pow(spendRatio, 1.2));
    
    // 2. Штраф за перенасыщение (Saturation)
    // Если бюджет в канале превышает разумную емкость для данного региона, CAC растет
    let saturationPenalty = 1;
    if (spendRatio > channel.saturationPoint) {
        // Мягкое удорожание, а не "обнуление" клиентов
        const excess = spendRatio - channel.saturationPoint;
        saturationPenalty = 1 + (excess * 4); 
    }
    
    // Вариативность (Рандом)
    const noise = 1 + (Math.random() - 0.5) * 2 * channel.variance;
    
    // Итоговый CAC
    const effectiveCAC = Math.max(200, adjustedBaseCAC * diminishingEffect * saturationPenalty * noise);
    
    // Количество клиентов (округление вниз)
    const customers = Math.floor(spend / effectiveCAC);
    
    return { effectiveCAC, customers };
}

function calculateSynergyEffect(allocations, totalBudget) {
    const activeChannels = Object.values(allocations).filter(v => v > 0).length;
    
    // Бонус за омниканальность
    let channelCountBonus = 0;
    if (activeChannels >= 2 && activeChannels <= 4) {
        channelCountBonus = 0.05 + (activeChannels - 2) * 0.02; 
    } else if (activeChannels > 4) {
        channelCountBonus = 0.10; 
    }
    
    // Бонус за сбалансированное распределение
    let balanceScore = 0;
    const allocationsArray = Object.values(allocations).filter(v => v > 0);
    if (allocationsArray.length > 1) {
        const mean = allocationsArray.reduce((a, b) => a + b, 0) / allocationsArray.length;
        const variance = allocationsArray.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / allocationsArray.length;
        const cv = Math.sqrt(variance) / mean; // Коэффициент вариации
        
        if (cv < 1.0) balanceScore = 0.05; 
    }
    
    return 1 + channelCountBonus + balanceScore;
}

function calculateLearningCurveEffect(scenario, attemptCount) {
    // Небольшой бонус за повторные попытки (обучение)
    return Math.min(1.15, 1 + (attemptCount - 1) * 0.03);
}

// ----------------------
// ЭКОНОМИЧЕСКИЙ АНАЛИЗ И МЕТРИКИ
// ----------------------

function calculateEconomicMetrics(scenario, result, allocations, channelResults) {
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    
    return {
        campaignROI: (result.revenue - totalBudget) / totalBudget,
        activeChannels: channelResults.filter(cr => cr.spend > 0).length,
        budgetUtilization: totalBudget / scenario.budget
    };
}

function generateEconomicAnalysis(scenario, result, allocations, channelResults) {
    const metrics = calculateEconomicMetrics(scenario, result, allocations, channelResults);
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    
    let analysisHTML = `
        <div class="economic-metrics">
            <h4>📊 Экономические показатели</h4>
    `;
    
    // ROI
    const roiClass = metrics.campaignROI > 0.2 ? 'metric-good' : metrics.campaignROI > 0 ? 'metric-warning' : 'metric-bad';
    analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">ROI (Возврат инвестиций):</span>
                <span class="metric-value ${roiClass}">${(metrics.campaignROI * 100).toFixed(1)}%</span>
            </div>
    `;
    
    // Средний чек
    analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">Средний чек (Факт / План):</span>
                <span class="metric-value">${formatMoney(Math.round(result.actualAvgRevenue))}${currency} / ${formatMoney(scenario.avgRevenuePerCustomer)}${currency}</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">CAC (Стоимость привлечения):</span>
                <span class="metric-value">${result.cac ? formatMoney(Math.round(result.cac)) + currency : '—'}</span>
            </div>
        </div>
    `;
    
    // Анализ эффективности каналов
    analysisHTML += `
        <div class="analysis-section">
            <h4>📉 Эффективность каналов</h4>
            <div class="channel-audit-grid">
    `;
    
    const sortedChannels = [...channelResults].sort((a, b) => b.spend - a.spend);
    
    sortedChannels.forEach(cr => {
        if (cr.spend > 0) {
            const channel = channels.find(c => c.key === cr.key);
            const roas = cr.revenue / cr.spend;
            
            let efficiencyClass = "metric-bad";
            if (roas > 3.0) efficiencyClass = "metric-good";
            else if (roas > 1.5) efficiencyClass = "metric-warning";
            
            // Расчет нагрузки на канал (Saturation)
            const spendRatio = cr.spend / totalBudget;
            let saturationStatus = "Норма";
            if (spendRatio > (channel.saturationPoint * 1.5)) saturationStatus = "Перенасыщение";
            
            analysisHTML += `
                <div class="channel-row">
                    <div class="ch-name"><strong>${channel.label}</strong> (${Math.round(spendRatio*100)}% бюджета)</div>
                    <div class="ch-stats">
                        <span>CAC: ${formatMoney(Math.round(cr.effectiveCAC))}${currency}</span>
                        <span class="${efficiencyClass}">ROAS: ${roas.toFixed(1)}</span>
                    </div>
                    <div class="ch-status" style="font-size:0.75rem; color:#94a3b8">Нагрузка: ${saturationStatus}</div>
                </div>
            `;
        }
    });
    
    analysisHTML += `</div></div>`;
    
    // Резюме
    analysisHTML += `
        <div class="analysis-section">
            <h4>🔎 Аналитическое резюме</h4>
            <ul>
    `;
    
    if (result.customers < scenario.targetCustomers) {
        analysisHTML += `<li>Фактический объем продаж ниже планового (${Math.round(result.customers/scenario.targetCustomers*100)}%). Текущая структура каналов не обеспечивает целевой охват.</li>`;
    }
    if (result.roas < scenario.targetROAS) {
        analysisHTML += `<li>Рентабельность инвестиций ниже целевого значения. Рекомендуется пересмотр долей высокозатратных каналов.</li>`;
    }
    if (metrics.activeChannels < 2) {
        analysisHTML += `<li>Выявлена высокая концентрация бюджета в одном канале. Риск зависимости от одного источника.</li>`;
    }
    
    analysisHTML += `
            </ul>
        </div>
    `;
    
    return analysisHTML;
}


// ----------------------
// СОСТОЯНИЕ И УТИЛИТЫ
// ----------------------

const gameState = {
  currentScenarioIndex: 0,
  scenarioScores: [],
  scenarioAttempts: {},
  finished: false
};

const app = document.getElementById("app");

function formatMoney(num) {
  return num.toLocaleString("ru-RU");
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function getScenarioAttemptCount(scenarioId) {
  return gameState.scenarioAttempts[scenarioId] || 0;
}

function incrementScenarioAttempt(scenarioId) {
  if (!gameState.scenarioAttempts[scenarioId]) {
    gameState.scenarioAttempts[scenarioId] = 1;
  } else {
    gameState.scenarioAttempts[scenarioId]++;
  }
}

// ----------------------
// РЕНДЕР ИНТЕРФЕЙСА
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
          <span class="meta-label">Сложность</span>
          <span class="meta-value">${scenario.difficulty >= 0.95 ? 'Высокая' : 'Средняя'}</span>
        </div>
        <div class="meta-pill">
          <span class="meta-label">Целевой ROAS</span>
          <span class="meta-value">${scenario.targetROAS.toFixed(1)}×</span>
        </div>
      </div>

      <div class="meta-row">
        <div class="meta-pill">
          <span class="meta-label">Бюджет</span>
          <span class="meta-value">${formatMoney(scenario.budget)} ${currency}</span>
        </div>
        <div class="meta-pill">
          <span class="meta-label">План продаж</span>
          <span class="meta-value">${scenario.targetCustomers} клиентов</span>
        </div>
      </div>

      <p style="margin-top:12px; font-size: 0.85rem; color: #cbd5e1;">
        <strong>Задача:</strong> Распределить бюджет между каналами для достижения плановых показателей по количеству клиентов и рентабельности.
      </p>

      <div class="btn-row">
        <button class="primary" id="btn-start">Настройка бюджета</button>
        ${
          gameState.currentScenarioIndex > 0
            ? '<button class="secondary" id="btn-summary">Общая сводка</button>'
            : ""
        }
      </div>
    </div>
  `;

  document.getElementById("btn-start").addEventListener("click", () => {
    incrementScenarioAttempt(scenario.id);
    renderAllocationScreen();
  });

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
          <div class="slider-hint">${ch.description}</div>
          <input
            type="range"
            min="0"
            max="${scenario.budget}"
            step="5000"
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
      <h2>Распределение бюджета</h2>
      <div class="budget-row">
        <span>Бюджет: <strong>${formatMoney(scenario.budget)} ${currency}</strong></span>
        <span id="budget-remaining" style="color: #34d399">Доступно: ${formatMoney(scenario.budget)} ${currency}</span>
      </div>

      ${slidersHtml}

      <div class="total-row">
        <span>Распределено:</span>
        <span id="total-allocated">0 ${currency} (0%)</span>
      </div>

      <div class="btn-row">
        <button class="secondary" id="btn-back">К условиям</button>
        <button class="primary" id="btn-launch" disabled>Запустить</цию</button>
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
      document.getElementById(`amount-${key}`).textContent = `${formatMoney(Number(sl.value))} ${currency}`;
    });

    const remaining = scenario.budget - total;
    
    if (remaining < 0) {
        remainingSpan.style.color = "#f87171";
        remainingSpan.innerHTML = `Перерасход: <strong>${formatMoney(Math.abs(remaining))} ${currency}</strong>`;
        launchBtn.disabled = true;
    } else {
        remainingSpan.style.color = "#34d399";
        remainingSpan.innerHTML = `Доступно: <strong>${formatMoney(remaining)} ${currency}</strong>`;
        launchBtn.disabled = false;
    }

    const percent = Math.round((total / scenario.budget) * 100);
    totalSpan.textContent = `${formatMoney(total)} ${currency} (${percent}%)`;
    
    if (total > 0 && remaining >= 0) {
        launchBtn.disabled = false;
    } else {
        launchBtn.disabled = true;
    }
  }

  sliders.forEach((sl) => sl.addEventListener("input", recalc));
  
  recalc();

  document.getElementById("btn-back").addEventListener("click", () => renderScenarioIntro());

  launchBtn.addEventListener("click", () => {
    const allocations = {};
    sliders.forEach((sl) => {
      allocations[sl.dataset.channel] = Number(sl.value);
    });
    const result = runSimulation(scenario, allocations);
    renderResultsScreen(scenario, result, allocations);
  });
}

function renderResultsScreen(scenario, result, allocations) {
  const step = gameState.currentScenarioIndex + 1;
  const isLast = step === scenarios.length;
  
  const custDiff = result.customers - scenario.targetCustomers;
  const custSign = custDiff >= 0 ? "+" : "";
  const custColor = custDiff >= 0 ? "#34d399" : "#f87171";
  
  const roasDiff = result.roas - scenario.targetROAS;
  const roasSign = roasDiff >= 0 ? "+" : "";
  const roasColor = roasDiff >= 0 ? "#34d399" : "#f87171";

  const economicAnalysis = generateEconomicAnalysis(scenario, result, allocations, result.channelResults || []);

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>Результат симуляции · ${result.score}/100</span>
      </div>
      <h2>Итоги кампании</h2>
      
      <div class="results-grid">
        <div class="result-tile">
          <div class="result-label">Клиенты</div>
          <div class="result-value" style="color:${custColor}">
             ${result.customers} <small>(${custSign}${custDiff})</small>
          </div>
          <div class="result-note">План: ${scenario.targetCustomers}</div>
        </div>
        
        <div class="result-tile">
          <div class="result-label">ROAS</div>
          <div class="result-value" style="color:${roasColor}">
             ${result.roas.toFixed(2)}x <small>(${roasSign}${roasDiff.toFixed(2)})</small>
          </div>
          <div class="result-note">План: ${scenario.targetROAS.toFixed(1)}x</div>
        </div>

        <div class="result-tile">
          <div class="result-label">Выручка</div>
          <div class="result-value">${formatMoney(Math.round(result.revenue))} ${currency}</div>
        </div>
        
        <div class="result-tile">
          <div class="result-label">Средний CAC</div>
          <div class="result-value">${result.cac ? formatMoney(Math.round(result.cac)) + currency : '—'}</div>
        </div>
      </div>

      ${economicAnalysis}

      <div class="btn-row">
        <button class="secondary" id="btn-retry">Перераспределить бюджет</button>
        ${
          isLast
            ? '<button class="primary" id="btn-next">Завершить игру</button>'
            : '<button class="primary" id="btn-next">Следующий сценарий</button>'
        }
      </div>
    </div>
  `;

  document.getElementById("btn-retry").addEventListener("click", () => {
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
  
  const avgScore = scores.reduce((acc, s) => acc + s.score, 0) / scores.length;
  const totalRevenue = scores.reduce((acc, s) => acc + s.revenue, 0);

  const itemsHtml = scores
    .map((s, idx) => {
      const scenario = scenarios.find((sc) => sc.id === s.scenarioId);
      const scoreClass = s.score >= 80 ? 'metric-good' : s.score >= 60 ? 'metric-warning' : 'metric-bad';
      
      return `
        <div class="summary-row">
          <div class="summary-name">
            ${idx + 1}. ${scenario.name}
          </div>
          <div class="summary-score ${scoreClass}">${s.score} баллов</div>
        </div>
      `;
    })
    .join("");

  let verdict = "Junior";
  if (avgScore >= 85) verdict = "Head of Marketing";
  else if (avgScore >= 70) verdict = "Senior Marketer";
  else if (avgScore >= 50) verdict = "Middle Marketer";

  app.innerHTML = `
    <div class="card">
      <h2>Финал игры</h2>
      <div class="economic-metrics">
        <div class="metric-row">
          <span class="metric-label">Квалификация:</span>
          <span class="metric-value" style="font-size:1.1rem; color:#3b82f6">${verdict}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Средний балл:</span>
          <span class="metric-value">${avgScore.toFixed(1)}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Итоговая выручка:</span>
          <span class="metric-value">${formatMoney(Math.round(totalRevenue))} ${currency}</span>
        </div>
      </div>

      <div class="analysis-section" style="margin-top:16px;">
        ${itemsHtml}
      </div>

      <div class="btn-row">
        <button class="primary" id="btn-restart">Начать заново</button>
      </div>
    </div>
  `;

  document.getElementById("btn-restart").addEventListener("click", () => {
    location.reload();
  });
}

// ----------------------
// СИМУЛЯЦИЯ
// ----------------------

function runSimulation(scenario, allocations) {
  let totalCustomers = 0;
  let totalRevenue = 0;
  let totalSpend = 0;
  const channelResults = [];

  channels.forEach((ch) => {
    const spend = allocations[ch.key] || 0;
    totalSpend += spend;

    const modifier = scenario.channelModifiers[ch.key];
    const efficiency = calculateChannelEfficiency(ch, spend, scenario.budget, modifier);
    
    if (efficiency.effectiveCAC) {
      const channelCustomers = efficiency.customers;
      totalCustomers += channelCustomers;
      
      const channelRevenue = channelCustomers * scenario.avgRevenuePerCustomer * ch.revenueMultiplier;
      totalRevenue += channelRevenue;
      
      channelResults.push({
        key: ch.key,
        spend,
        customers: channelCustomers,
        revenue: channelRevenue,
        effectiveCAC: efficiency.effectiveCAC
      });
    } else {
      channelResults.push({
         key: ch.key, spend, customers: 0, revenue: 0, effectiveCAC: null 
      });
    }
  });

  const synergyMultiplier = calculateSynergyEffect(allocations, scenario.budget);
  const attemptCount = getScenarioAttemptCount(scenario.id);
  const learningEffect = calculateLearningCurveEffect(scenario, attemptCount);
  
  const finalCustomers = Math.round(totalCustomers * synergyMultiplier * learningEffect);
  
  const revenuePerCust = totalCustomers > 0 ? totalRevenue / totalCustomers : 0;
  const finalRevenue = finalCustomers * revenuePerCust;
  
  const cac = finalCustomers > 0 ? totalSpend / finalCustomers : null;
  const roas = totalSpend > 0 ? finalRevenue / totalSpend : 0;
  const actualAvgRevenue = finalCustomers > 0 ? finalRevenue / finalCustomers : 0;

  const score = calculateScore(scenario, finalCustomers, roas, cac, actualAvgRevenue);

  const result = {
    customers: finalCustomers,
    revenue: finalRevenue,
    cac,
    roas,
    actualAvgRevenue,
    score,
    scenarioId: scenario.id,
    channelResults
  };

  storeScenarioResult(result);
  return result;
}

function calculateScore(scenario, customers, roas, cac, actualAvgRevenue) {
  const custRatio = customers / scenario.targetCustomers;
  const roasRatio = roas / scenario.targetROAS;

  let scoreCustomers = Math.min(custRatio, 1.2) * 50; 
  if (custRatio < 1) scoreCustomers *= 0.9; 

  let scoreROAS = Math.min(roasRatio, 1.2) * 50;
  if (roasRatio < 1) scoreROAS *= 0.8; 

  let bonus = 0;
  if (custRatio >= 1 && roasRatio >= 1) bonus = 5;

  return clamp(Math.round((scoreCustomers + scoreROAS) / 2 + bonus), 0, 100);
}

function storeScenarioResult(result) {
  const idx = gameState.scenarioScores.findIndex(s => s.scenarioId === result.scenarioId);
  const entry = {
    scenarioId: result.scenarioId,
    score: result.score,
    revenue: result.revenue
  };
  
  if (idx === -1) gameState.scenarioScores.push(entry);
  else gameState.scenarioScores[idx] = entry;
}

// Запуск приложения
renderScenarioIntro();
