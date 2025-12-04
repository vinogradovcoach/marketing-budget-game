// ----------------------
// ДАННЫЕ СЦЕНАРИЕВ (ОБНОВЛЕННЫЕ ДЛЯ УСЛОЖНЕНИЯ)
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
    baseCAC: 900,
    diminishingFactor: 0.65,
    variance: 0.16
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
  },
  {
    key: "offline",
    label: "Оффлайн реклама",
    hint: "ТВ, радио, билборды. Дорого, но охватывает широкую аудиторию.",
    baseCAC: 2200,
    diminishingFactor: 0.85,
    variance: 0.20
  }
];

const scenarios = [
  {
    id: "s1",
    name: "Мебельный цех",
    description:
      "Вы — маркетинг-директор небольшого мебельного цеха, который продаёт корпусную мебель местным магазинам и частным клиентам.",
    budget: 220000,
    targetCustomers: 34, // Увеличено с 28 (+21%)
    targetROAS: 3.3,    // Увеличено с 2.9 (+14%)
    avgRevenuePerCustomer: 15000,
    channelModifiers: {
      search: 0.9,
      social: 1.2,
      display: 1.0,
      seo: 0.8,
      email: 0.7,
      offline: 1.3
    }
  },
  {
    id: "s2",
    name: "Пекарня-заготовка",
    description:
      "Вы продвигаете мини-пекарню, которая продаёт замороженную выпечку в кафе и магазины района.",
    budget: 180000,
    targetCustomers: 28, // Увеличено с 23 (+22%)
    targetROAS: 3.0,    // Увеличено с 2.6 (+15%)
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 1.0,
      social: 1.1,
      display: 1.1,
      seo: 0.9,
      email: 0.8,
      offline: 1.4
    }
  },
  {
    id: "s3",
    name: "Окна ПВХ",
    description:
      "Небольшая компания по установке пластиковых окон ищет заявки от частных домовладельцев и квартир.",
    budget: 300000,
    targetCustomers: 39, // Увеличено с 32 (+22%)
    targetROAS: 3.6,    // Увеличено с 3.1 (+16%)
    avgRevenuePerCustomer: 20000,
    channelModifiers: {
      search: 0.8,
      social: 1.0,
      display: 1.0,
      seo: 0.85,
      email: 0.9,
      offline: 1.2
    }
  },
  {
    id: "s4",
    name: "Упаковочная фабрика",
    description:
      "Вы отвечаете за маркетинг фабрики, которая производит картонные коробки для локального бизнеса.",
    budget: 260000,
    targetCustomers: 24, // Увеличено с 20 (+20%)
    targetROAS: 3.1,    // Увеличено с 2.7 (+15%)
    avgRevenuePerCustomer: 25000,
    channelModifiers: {
      search: 0.9,
      social: 1.4,
      display: 1.0,
      seo: 0.8,
      email: 0.6,
      offline: 1.5
    }
  },
  {
    id: "s5",
    name: "Натуральная косметика",
    description:
      "Маленькая мануфактура делает натуральную косметику и продаёт её онлайн по всей стране.",
    budget: 220000,
    targetCustomers: 46, // Увеличено с 38 (+21%)
    targetROAS: 3.2,    // Увеличено с 2.8 (+14%)
    avgRevenuePerCustomer: 8000,
    channelModifiers: {
      search: 0.95,
      social: 0.75,
      display: 1.0,
      seo: 0.85,
      email: 0.7,
      offline: 0.9
    }
  },
  {
    id: "s6",
    name: "Семейный ресторан",
    description:
      "Уютный семейный ресторан в спальном районе хочет увеличить трафик по выходным и будним вечерам.",
    budget: 150000,
    targetCustomers: 31, // Увеличено с 26 (+19%)
    targetROAS: 2.6,    // Увеличено с 2.3 (+13%)
    avgRevenuePerCustomer: 3000,
    channelModifiers: {
      search: 1.0,
      social: 0.7,
      display: 1.1,
      seo: 0.9,
      email: 0.8,
      offline: 0.85
    }
  },
  {
    id: "s7",
    name: "Частная стоматология",
    description:
      "Вы продвигаете частную стоматологическую клинику с упором на имплантацию и эстетическую стоматологию.",
    budget: 340000,
    targetCustomers: 34, // Увеличено с 28 (+21%)
    targetROAS: 3.9,    // Увеличено с 3.4 (+15%)
    avgRevenuePerCustomer: 35000,
    channelModifiers: {
      search: 0.8,
      social: 1.1,
      display: 1.0,
      seo: 0.9,
      email: 0.85,
      offline: 1.3
    }
  },
  {
    id: "s8",
    name: "Турфирма (автобусные туры)",
    description:
      "Небольшая турфирма организует автобусные туры по региону и соседним городам.",
    budget: 160000,
    targetCustomers: 50, // Увеличено с 42 (+19%)
    targetROAS: 2.9,    // Увеличено с 2.5 (+16%)
    avgRevenuePerCustomer: 7000,
    channelModifiers: {
      search: 0.95,
      social: 0.8,
      display: 0.95,
      seo: 0.85,
      email: 0.8,
      offline: 1.0
    }
  },
  {
    id: "s9",
    name: "Гостевой дом",
    description:
      "Маленький гостевой дом возле реки принимает туристов на выходные и в отпускной сезон.",
    budget: 190000,
    targetCustomers: 29, // Увеличено с 24 (+21%)
    targetROAS: 3.1,    // Увеличено с 2.7 (+15%)
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 0.9,
      social: 0.85,
      display: 0.95,
      seo: 0.9,
      email: 0.85,
      offline: 1.1
    }
  },
  {
    id: "s10",
    name: "Фитнес-студия",
    description:
      "Фитнес-студия недалеко от центра развивает направление групповых тренировок и абонементов.",
    budget: 170000,
    targetCustomers: 43, // Увеличено с 36 (+19%)
    targetROAS: 2.8,    // Увеличено с 2.4 (+17%)
    avgRevenuePerCustomer: 9000,
    channelModifiers: {
      search: 1.0,
      social: 0.65,
      display: 1.0,
      seo: 0.9,
      email: 0.7,
      offline: 0.8
    }
  }
];

const currency = "₽";

// ----------------------
// НОВЫЕ ФУНКЦИИ ДЛЯ УСЛОЖНЕНИЯ И АНАЛИЗА
// ----------------------

function calculateEfficiencyPenalty(spendRatio) {
    const idealRange = 0.2;
    const deviation = Math.abs(spendRatio - idealRange);
    return 1 + Math.pow(deviation * 2.5, 2);
}

function calculateSynergyEffect(allocations) {
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    if (totalBudget === 0) return 1;
    
    let hhi = 0;
    for (const spend of Object.values(allocations)) {
        hhi += Math.pow((spend / totalBudget) * 100, 2);
    }
    
    const activeChannels = Object.values(allocations).filter(v => v > 0).length;
    const concentrationPenalty = Math.max(1, Math.sqrt(hhi / 1600));
    const diversificationBonus = 1 + Math.max(0, activeChannels - 2) * 0.15;
    
    return Math.min(1.5, diversificationBonus / concentrationPenalty);
}

function calculateMarginalROAS(scenario, allocations, baseResult) {
    const marginalROAS = {};
    
    Object.keys(allocations).forEach(channel => {
        const increasedAllocations = {...allocations};
        const currentAllocation = allocations[channel];
        
        // Не рассчитываем предельную отдачу для каналов с нулевым бюджетом
        if (currentAllocation === 0) {
            marginalROAS[channel] = null;
            return;
        }
        
        increasedAllocations[channel] = currentAllocation * 1.1; // +10% к бюджету канала
        
        const newResult = runSimulation(scenario, increasedAllocations, true); // true - без сохранения
        const revenueChange = newResult.revenue - baseResult.revenue;
        const spendChange = currentAllocation * 0.1;
        
        marginalROAS[channel] = spendChange > 0 ? revenueChange / spendChange : null;
    });
    
    return marginalROAS;
}

function getChannelName(key) {
    const channel = channels.find(ch => ch.key === key);
    return channel ? channel.label : key;
}

function calculateEconomicMetrics(scenario, result, allocations) {
    const breakevenCAC = scenario.avgRevenuePerCustomer / scenario.targetROAS;
    const efficiencyRatio = result.cac ? result.cac / breakevenCAC : 0;
    
    // Расчет диверсификации
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    let hhi = 0;
    for (const spend of Object.values(allocations)) {
        hhi += Math.pow((spend / totalBudget) * 100, 2);
    }
    
    const activeChannels = Object.values(allocations).filter(v => v > 0).length;
    const diversificationScore = Math.min(10, activeChannels * 1.5 + (hhi < 2000 ? 2 : 0));
    const riskConcentration = hhi / 10000; // Нормализация до 0-1
    
    // Расчет альтернативной стоимости (упрощенный)
    const optimalCustomers = scenario.targetCustomers * 1.15; // Оптимальный результат
    const opportunityCost = result.customers > 0 
        ? ((optimalCustomers - result.customers) / optimalCustomers * 100).toFixed(1)
        : "100.0";
    
    return {
        breakevenCAC,
        efficiencyRatio,
        diversificationScore,
        riskConcentration,
        opportunityCost,
        hhi,
        activeChannels
    };
}

function generateEconomicAnalysis(scenario, result, allocations) {
    const metrics = calculateEconomicMetrics(scenario, result, allocations);
    const baseResult = runSimulation(scenario, allocations, true);
    const marginalROAS = calculateMarginalROAS(scenario, allocations, baseResult);
    
    let analysisHTML = `
        <div class="economic-metrics">
            <h4>Ключевые экономические показатели</h4>
    `;
    
    // Показатель эффективности CAC
    const cacEfficiencyClass = metrics.efficiencyRatio < 1 ? 'metric-good' : 
                              metrics.efficiencyRatio < 1.3 ? 'metric-warning' : 'metric-bad';
    
    analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">Эффективность CAC:</span>
                <span class="metric-value ${cacEfficiencyClass}">
                    ${result.cac ? metrics.efficiencyRatio.toFixed(2) + '×' : 'N/A'}
                </span>
            </div>
    `;
    
    if (result.cac) {
        analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">Фактический CAC:</span>
                <span class="metric-value">${formatMoney(Math.round(result.cac))} ${currency}</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Безопасный CAC (целевой ROAS):</span>
                <span class="metric-value">${formatMoney(Math.round(metrics.breakevenCAC))} ${currency}</span>
            </div>
        `;
    }
    
    // Предельная отдача по каналам
    analysisHTML += `
            <h4 style="margin-top: 12px;">Предельная отдача (Marginal ROAS)</h4>
    `;
    
    Object.entries(marginalROAS).forEach(([channel, value]) => {
        if (value !== null) {
            const channelClass = value > 1.2 ? 'metric-good' : 
                               value > 0.8 ? 'metric-warning' : 'metric-bad';
            analysisHTML += `
                <div class="metric-row">
                    <span class="metric-label">${getChannelName(channel)}:</span>
                    <span class="metric-value ${channelClass}">${value.toFixed(2)}×</span>
                </div>
            `;
        }
    });
    
    // Анализ распределения
    analysisHTML += `
        </div>
        
        <div class="analysis-section">
            <h4>Анализ распределения бюджета</h4>
            <div class="metric-row">
                <span class="metric-label">Оценка диверсификации:</span>
                <span class="metric-value">${metrics.diversificationScore.toFixed(1)}/10</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Концентрация риска (HHI):</span>
                <span class="metric-value">${Math.round(metrics.hhi)}</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Активных каналов:</span>
                <span class="metric-value">${metrics.activeChannels} из 6</span>
            </div>
    `;
    
    // Визуализация распределения
    if (metrics.activeChannels > 0) {
        analysisHTML += `<div class="diversification-chart">`;
        
        const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
        let colorIndex = 0;
        
        Object.entries(allocations).forEach(([channel, amount]) => {
            if (amount > 0) {
                const percentage = (amount / scenario.budget * 100).toFixed(1);
                analysisHTML += `
                    <div class="diversification-segment" 
                         style="width: ${percentage}%; background-color: ${colors[colorIndex % colors.length]};"
                         title="${getChannelName(channel)}: ${percentage}%">
                    </div>
                `;
                colorIndex++;
            }
        });
        
        analysisHTML += `</div>`;
    }
    
    analysisHTML += `</div>`;
    
    // Стратегические инсайты
    analysisHTML += `
        <div class="analysis-section">
            <h4>Стратегические инсайты</h4>
            <ul>
    `;
    
    // Генерация инсайтов
    const insights = generateStrategicInsights(metrics, marginalROAS, result, scenario);
    insights.forEach(insight => {
        analysisHTML += `<li>${insight}</li>`;
    });
    
    analysisHTML += `
            </ul>
        </div>
    `;
    
    // Заключительные рекомендации
    const finalInsight = generateFinalInsight(metrics, result, scenario);
    analysisHTML += `
        <div class="${finalInsight.class}">
            ${finalInsight.text}
        </div>
    `;
    
    return analysisHTML;
}

function generateStrategicInsights(metrics, marginalROAS, result, scenario) {
    const insights = [];
    
    // Анализ эффективности CAC
    if (result.cac) {
        if (metrics.efficiencyRatio > 1.5) {
            insights.push(`CAC превышает безопасный уровень в ${metrics.efficiencyRatio.toFixed(1)} раз. Рекомендуется пересмотреть стратегию привлечения.`);
        } else if (metrics.efficiencyRatio < 0.8) {
            insights.push(`Отличная эффективность CAC (${metrics.efficiencyRatio.toFixed(1)}× ниже безопасного уровня).`);
        }
    }
    
    // Анализ предельной отдачи
    const validMarginalROAS = Object.entries(marginalROAS).filter(([_, value]) => value !== null);
    if (validMarginalROAS.length > 0) {
        const maxChannel = validMarginalROAS.reduce((a, b) => a[1] > b[1] ? a : b);
        const minChannel = validMarginalROAS.reduce((a, b) => a[1] < b[1] ? a : b);
        
        if (maxChannel[1] > 1.5) {
            insights.push(`${getChannelName(maxChannel[0])} показывает высокую предельную отдачу (${maxChannel[1].toFixed(2)}×). Рассмотрите увеличение бюджета до точки насыщения.`);
        }
        
        if (minChannel[1] < 0.8) {
            insights.push(`${getChannelName(minChannel[0])} демонстрирует низкую предельную эффективность. Дальнейшие инвестиции могут снизить общую рентабельность.`);
        }
    }
    
    // Анализ диверсификации
    if (metrics.diversificationScore < 6) {
        insights.push(`Низкая диверсификация (${metrics.diversificationScore.toFixed(1)}/10) увеличивает риски кампании.`);
    } else if (metrics.diversificationScore > 8) {
        insights.push(`Хорошая диверсификация (${metrics.diversificationScore.toFixed(1)}/10) снижает зависимость от одного канала.`);
    }
    
    // Анализ достижения целей
    if (result.customers >= scenario.targetCustomers && result.roas >= scenario.targetROAS) {
        insights.push(`Цели по клиентам и ROAS достигнуты. Оптимальная стратегия для данного сценария.`);
    } else if (result.customers < scenario.targetCustomers) {
        const shortfall = scenario.targetCustomers - result.customers;
        insights.push(`Недостаточно клиентов (не хватает ${shortfall}). Рассмотрите каналы с более низким CAC.`);
    } else if (result.roas < scenario.targetROAS) {
        insights.push(`ROAS ниже целевого. Сфокусируйтесь на каналах с более высокой конверсией или увеличьте средний чек.`);
    }
    
    // Анализ S-кривой
    insights.push(`Используйте принцип S-кривой: инвестируйте в каналы до точки перегиба (где предельный ROAS начинает снижаться).`);
    
    return insights;
}

function generateFinalInsight(metrics, result, scenario) {
    if (result.customers === 0) {
        return {
            class: "warning",
            text: "⚠️ Критическая ситуация: кампания не привлекла ни одного клиента. Требуется полный пересмотр стратегии распределения бюджета."
        };
    }
    
    const customerRatio = result.customers / scenario.targetCustomers;
    const roasRatio = result.roas / scenario.targetROAS;
    
    if (customerRatio >= 1 && roasRatio >= 1) {
        return {
            class: "success",
            text: "✅ Отличный результат! Все цели достигнуты. Рекомендуется проанализировать предельную отдачу для дальнейшей оптимизации."
        };
    } else if (customerRatio >= 0.8 && roasRatio >= 0.8) {
        return {
            class: "insight",
            text: "📈 Хороший результат, близкий к цели. Небольшие корректировки в распределении бюджета могут привести к достижению всех KPI."
        };
    } else if (customerRatio < 0.6 || roasRatio < 0.6) {
        return {
            class: "warning",
            text: "⚠️ Требуется значительная оптимизация. Рассмотрите перераспределение бюджета из наименее эффективных каналов в более перспективные."
        };
    } else {
        return {
            class: "insight",
            text: "📊 Умеренный результат. Проанализируйте предельную отдачу по каналам для выявления точек роста эффективности."
        };
    }
}

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
// РЕНДЕР ЭКРАНОВ (ОБНОВЛЕННЫЙ)
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

      <p><strong>Новые условия игры:</strong> Цели повышены для увеличения сложности. Эффективность распределения теперь зависит от диверсификации и синергии между каналами.</p>

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
        <strong>Новая сложность:</strong> Цели повышены на 15-22%. Эффективность зависит от диверсификации.
      </p>
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
      <p class="subtitle">Рассчитываем результаты с учетом новых правил сложности.</p>
      <p>Учитываем диверсификацию, синергию каналов и нелинейные эффекты…</p>
    </div>
  `;

  setTimeout(() => {
    const result = runSimulation(scenario, allocations, false);
    storeScenarioResult(result);
    renderResultsScreen(scenario, result, allocations);
  }, 800);
}

function renderResultsScreen(scenario, result, allocations) {
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

  // Генерация экономического анализа
  const economicAnalysis = generateEconomicAnalysis(scenario, result, allocations);

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

      <h3 style="margin-top: 16px;">Экономический анализ</h3>
      ${economicAnalysis}

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
      const scoreClass = s.score >= 80 ? 'metric-good' : s.score >= 60 ? 'metric-warning' : 'metric-bad';
      return `
        <div class="summary-row">
          <div class="summary-name">${idx + 1}. ${scenario.name}</div>
          <div class="summary-score ${scoreClass}">${s.score}</div>
        </div>
      `;
    })
    .join("");

  const bestScenario = scenarios.find((sc) => sc.id === best.scenarioId);
  const worstScenario = scenarios.find((sc) => sc.id === worst.scenarioId);

  const performanceLevel = avgScore >= 85 ? 'отличный' : 
                         avgScore >= 70 ? 'хороший' : 
                         avgScore >= 55 ? 'удовлетворительный' : 'низкий';

  app.innerHTML = `
    <div class="card">
      <h2>Итоги игры</h2>
      <p class="subtitle">Вы прошли сценариев: ${scores.length} из ${
    scenarios.length
  }.</p>

      <div class="economic-metrics">
        <div class="metric-row">
          <span class="metric-label">Средний балл:</span>
          <span class="metric-value">${avgScore.toFixed(1)} / 100</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Уровень игры:</span>
          <span class="metric-value">${performanceLevel}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Лучший сценарий:</span>
          <span class="metric-value">${bestScenario.name} (${best.score} баллов)</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Сложнее всего было:</span>
          <span class="metric-value">${worstScenario.name} (${worst.score} баллов)</span>
        </div>
      </div>

      <div class="analysis-section">
        <h4>Результаты по сценариям</h4>
        <div class="summary-list">
          ${itemsHtml}
        </div>
      </div>

      <p><strong>Анализ:</strong> Игра теперь включает сложные экономические модели с убывающей отдачей и синергией каналов. Высокие баллы требуют глубокого понимания предельной эффективности инвестиций.</p>

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
// СИМУЛЯЦИЯ (ОБНОВЛЕННАЯ)
// ----------------------

function runSimulation(scenario, allocations, skipStorage = false) {
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
    
    // НОВОЕ: Добавление штрафа за неэффективное распределение
    const efficiencyPenalty = calculateEfficiencyPenalty(spendRatio);
    const effectiveCAC = Math.max(100, withDiminishing * noise * efficiencyPenalty);
    
    const customers = spend / effectiveCAC;

    totalCustomers += customers;
    channelResults.push({
      key: ch.key,
      spend,
      customers,
      effectiveCAC
    });
  });

  // НОВОЕ: Синергетический эффект между каналами
  const synergyMultiplier = calculateSynergyEffect(allocations);
  totalCustomers *= synergyMultiplier;

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

  const feedback = ""; // Теперь анализ генерируется отдельно

  const result = {
    customers: roundedCustomers,
    revenue,
    cac,
    roas,
    score,
    feedback,
    scenarioId: scenario.id
  };

  if (!skipStorage) {
    storeScenarioResult(result);
  }

  return result;
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

  // НОВОЕ: Бонус за сбалансированное достижение обеих целей
  let balanceBonus = 0;
  if (custRatio >= 1 && roasRatio >= 1) {
    balanceBonus = 5;
  } else if (custRatio >= 0.9 && roasRatio >= 0.9) {
    balanceBonus = 3;
  }

  const totalScore = clamp(Math.round(scoreCustomers + scoreROAS + balanceBonus), 0, 100);
  return totalScore;
}

function storeScenarioResult(result) {
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
