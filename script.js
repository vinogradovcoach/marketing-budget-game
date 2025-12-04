// ----------------------
// ДАННЫЕ СЦЕНАРИЕВ (ЗНАЧИТЕЛЬНО УСЛОЖНЕННЫЕ)
// ----------------------

const channels = [
  {
    key: "search",
    label: "Поиск (Яндекс/Google)",
    hint: "Высокое намерение купить. Быстро насыщается, очень дорого при масштабировании.",
    baseCAC: 3500, // Увеличено в 3.5 раза
    diminishingFactor: 0.9, // Усилен эффект убывающей отдачи
    variance: 0.25,
    saturationPoint: 0.25 // Максимум 25% бюджета эффективно
  },
  {
    key: "social",
    label: "Соцсети и блогеры",
    hint: "Низкая конверсия, но хороша для узнаваемости. Очень волатильна.",
    baseCAC: 2800,
    diminishingFactor: 0.85,
    variance: 0.35, // Увеличена волатильность
    saturationPoint: 0.2
  },
  {
    key: "display",
    label: "Медийная реклама / ретаргетинг",
    hint: "Эффективен только при умеренных бюджетах, быстро теряет эффективность.",
    baseCAC: 4200,
    diminishingFactor: 0.95, // Очень сильный эффект убывающей отдачи
    variance: 0.3,
    saturationPoint: 0.15
  },
  {
    key: "seo",
    label: "SEO и контент",
    hint: "Требует минимального бюджета для работы, не масштабируется линейно.",
    baseCAC: 1800,
    diminishingFactor: 0.6,
    variance: 0.15,
    saturationPoint: 0.1 // Очень низкая точка насыщения
  },
  {
    key: "email",
    label: "Email и CRM",
    hint: "Эффективен только для существующей базы, не работает для привлечения новых.",
    baseCAC: 1200,
    diminishingFactor: 0.7,
    variance: 0.1,
    saturationPoint: 0.08
  },
  {
    key: "offline",
    label: "Оффлайн реклама",
    hint: "Крайне высокая стоимость входа, минимальная эффективность при малых бюджетах.",
    baseCAC: 8500, // Крайне высокая базовая стоимость
    diminishingFactor: 0.98,
    variance: 0.4,
    saturationPoint: 0.3
  }
];

const scenarios = [
  {
    id: "s1",
    name: "Мебельный цех",
    description:
      "Вы — маркетинг-директор небольшого мебельного цеха, который продаёт корпусную мебель местным магазинам и частным клиентам. Конкуренция высокая, сезонность сильная.",
    budget: 220000,
    targetCustomers: 28, // Вернули оригинальные значения
    targetROAS: 2.9,
    avgRevenuePerCustomer: 15000,
    // Более агрессивные модификаторы
    channelModifiers: {
      search: 1.4,  // Дорого в этой нише
      social: 0.6,  // Плохо работает для B2B
      display: 1.2,
      seo: 0.9,
      email: 1.8,   // Хорошо работает для повторных продаж
      offline: 0.5  // Плохо для локального B2B
    },
    difficulty: 0.8 // Коэффициент сложности
  },
  {
    id: "s2",
    name: "Пекарня-заготовка",
    description:
      "Вы продвигаете мини-пекарню, которая продаёт замороженную выпечку в кафе и магазины района. Низкая маржа, высокая конкуренция.",
    budget: 180000,
    targetCustomers: 18, // СНИЖЕНО на 22%
    targetROAS: 3.2,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 0.8,
      social: 1.3,
      display: 0.7,
      seo: 1.1,
      email: 0.9,
      offline: 1.6
    },
    difficulty: 0.9
  },
  {
    id: "s3",
    name: "Окна ПВХ",
    description:
      "Небольшая компания по установке пластиковых окон ищет заявки от частных домовладельцев и квартир. Высокая стоимость заказа, но и высокая конкуренция в поиске.",
    budget: 300000,
    targetCustomers: 25, // СНИЖЕНО на 22%
    targetROAS: 3.8,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 20000,
    channelModifiers: {
      search: 2.0,  // Очень дорого в конкурентной нише
      social: 0.8,
      display: 1.5,
      seo: 0.7,
      email: 0.6,
      offline: 1.0
    },
    difficulty: 1.0
  },
  {
    id: "s4",
    name: "Упаковочная фабрика",
    description:
      "Вы отвечаете за маркетинг фабрики, которая производит картонные коробки для локального бизнеса. Длинный цикл продаж, высокий средний чек.",
    budget: 260000,
    targetCustomers: 15, // СНИЖЕНО на 25%
    targetROAS: 3.5,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 25000,
    channelModifiers: {
      search: 1.2,
      social: 0.5,  // Плохо для B2B
      display: 0.8,
      seo: 1.4,
      email: 1.7,   // Критически важен для B2B
      offline: 0.9
    },
    difficulty: 0.85
  },
  {
    id: "s5",
    name: "Натуральная косметика",
    description:
      "Маленькая мануфактура делает натуральную косметику и продаёт её онлайн по всей стране. Низкий средний чек, высокая конкуренция в соцсетях.",
    budget: 220000,
    targetCustomers: 32, // СНИЖЕНО на 16%
    targetROAS: 3.4,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 8000,
    channelModifiers: {
      search: 1.1,
      social: 1.8,  // Ключевой канал, но дорогой
      display: 0.9,
      seo: 1.2,
      email: 0.7,
      offline: 0.4  // Бесполезно для онлайн-продаж
    },
    difficulty: 0.95
  },
  {
    id: "s6",
    name: "Семейный ресторан",
    description:
      "Уютный семейный ресторан в спальном районе хочет увеличить трафик по выходным и будним вечерам. Низкая частота посещений, сезонность.",
    budget: 150000,
    targetCustomers: 22, // СНИЖЕНО на 15%
    targetROAS: 2.8,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 3000,
    channelModifiers: {
      search: 1.3,
      social: 1.4,
      display: 0.6,
      seo: 0.8,
      email: 1.1,
      offline: 1.5
    },
    difficulty: 0.75
  },
  {
    id: "s7",
    name: "Частная стоматология",
    description:
      "Вы продвигаете частную стоматологическую клинику с упором на имплантацию и эстетическую стоматологию. Высокий LTV, но длинный цикл принятия решения.",
    budget: 340000,
    targetCustomers: 22, // СНИЖЕНО на 21%
    targetROAS: 4.2,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 35000,
    channelModifiers: {
      search: 1.7,
      social: 0.9,
      display: 1.3,
      seo: 1.0,
      email: 0.8,
      offline: 1.4
    },
    difficulty: 1.1
  },
  {
    id: "s8",
    name: "Турфирма (автобусные туры)",
    description:
      "Небольшая турфирма организует автобусные туры по региону и соседним городам. Сильная сезонность, низкая лояльность клиентов.",
    budget: 160000,
    targetCustomers: 35, // СНИЖЕНО на 17%
    targetROAS: 3.1,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 7000,
    channelModifiers: {
      search: 1.5,
      social: 1.2,
      display: 0.7,
      seo: 0.9,
      email: 1.3,
      offline: 0.8
    },
    difficulty: 0.9
  },
  {
    id: "s9",
    name: "Гостевой дом",
    description:
      "Маленький гостевой дом возле реки принимает туристов на выходные и в отпускной сезон. Крайняя сезонность, зависимость от отзывов.",
    budget: 190000,
    targetCustomers: 19, // СНИЖЕНО на 21%
    targetROAS: 3.3,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 12000,
    channelModifiers: {
      search: 1.4,
      social: 1.6,
      display: 0.8,
      seo: 1.1,
      email: 0.9,
      offline: 0.7
    },
    difficulty: 0.85
  },
  {
    id: "s10",
    name: "Фитнес-студия",
    description:
      "Фитнес-студия недалеко от центра развивает направление групповых тренировок и абонементов. Высокая текучка клиентов, сезонность.",
    budget: 170000,
    targetCustomers: 29, // СНИЖЕНО на 19%
    targetROAS: 3.0,    // ПОВЫШЕНО
    avgRevenuePerCustomer: 9000,
    channelModifiers: {
      search: 1.2,
      social: 1.7,
      display: 0.9,
      seo: 0.8,
      email: 1.4,
      offline: 0.6
    },
    difficulty: 0.8
  }
];

const currency = "₽";

// ----------------------
// НОВЫЕ ФУНКЦИИ ДЛЯ РЕАЛИСТИЧНОЙ СЛОЖНОСТИ
// ----------------------

function calculateChannelEfficiency(channel, spend, totalBudget, modifier) {
    if (spend <= 0) return { effectiveCAC: null, customers: 0 };
    
    // Базовый CAC с модификатором сценария
    const baseCAC = channel.baseCAC * modifier;
    
    // Квадратичный эффект убывающей отдачи (не линейный!)
    const spendRatio = spend / totalBudget;
    const diminishingEffect = 1 + channel.diminishingFactor * Math.pow(spendRatio, 1.5);
    
    // Штраф за превышение точки насыщения
    const saturationPenalty = spendRatio > channel.saturationPoint 
        ? 1 + Math.pow((spendRatio - channel.saturationPoint) * 3, 2)
        : 1;
    
    // Волатильность
    const noise = 1 + (Math.random() - 0.5) * 2 * channel.variance;
    
    // Итоговый CAC
    const effectiveCAC = Math.max(500, baseCAC * diminishingEffect * saturationPenalty * noise);
    
    // Нелинейное преобразование бюджета в клиентов
    const customers = Math.pow(spend, 0.7) / Math.pow(effectiveCAC, 0.7);
    
    return { effectiveCAC, customers };
}

function calculateSynergyEffect(allocations, totalBudget) {
    const activeChannels = Object.values(allocations).filter(v => v > 0).length;
    
    // Оптимальное количество каналов: 3-4
    let channelCountBonus = 0;
    if (activeChannels >= 2 && activeChannels <= 4) {
        channelCountBonus = 0.1 + (activeChannels - 2) * 0.05;
    } else if (activeChannels > 4) {
        channelCountBonus = 0.2 - (activeChannels - 4) * 0.03;
    }
    
    // Расчет баланса распределения
    let balanceScore = 0;
    const allocationsArray = Object.values(allocations).filter(v => v > 0);
    if (allocationsArray.length > 1) {
        const mean = allocationsArray.reduce((a, b) => a + b, 0) / allocationsArray.length;
        const variance = allocationsArray.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / allocationsArray.length;
        balanceScore = Math.max(0, 0.15 - variance / (mean * mean) * 0.1);
    }
    
    // Штраф за концентрацию в одном канале (>40% бюджета)
    let concentrationPenalty = 0;
    for (const spend of Object.values(allocations)) {
        if (spend / totalBudget > 0.4) {
            concentrationPenalty = Math.min(0.3, (spend / totalBudget - 0.4) * 0.5);
        }
    }
    
    return 1 + channelCountBonus + balanceScore - concentrationPenalty;
}

function calculateLearningCurveEffect(scenario, attemptCount) {
    // Эффект кривой обучения: первые попытки сложнее
    return Math.min(1.3, 1 + attemptCount * 0.05);
}

// ----------------------
// ОБНОВЛЕННЫЙ ЭКОНОМИЧЕСКИЙ АНАЛИЗ
// ----------------------

function calculateEconomicMetrics(scenario, result, allocations, channelResults) {
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    
    // Расчет эффективности каждого канала
    const channelEfficiencies = {};
    channelResults.forEach(cr => {
        if (cr.effectiveCAC) {
            const efficiency = scenario.avgRevenuePerCustomer / cr.effectiveCAC;
            channelEfficiencies[cr.key] = {
                efficiency,
                marginalROAS: calculateMarginalROASForChannel(cr, scenario, allocations),
                breakeven: efficiency >= 1
            };
        }
    });
    
    // Индекс диверсификации (0-1)
    const activeChannels = channelResults.filter(cr => cr.spend > 0).length;
    const diversificationIndex = Math.min(1, activeChannels / 4);
    
    // ROI кампании
    const campaignROI = (result.revenue - totalBudget) / totalBudget;
    
    // Рентабельность по CAC
    const cacProfitability = result.cac ? scenario.avgRevenuePerCustomer / result.cac : 0;
    
    return {
        channelEfficiencies,
        diversificationIndex,
        campaignROI,
        cacProfitability,
        activeChannels
    };
}

function calculateMarginalROASForChannel(channelResult, scenario, allocations) {
    if (!channelResult.effectiveCAC || channelResult.spend <= 10000) return null;
    
    // Упрощенный расчет предельного ROAS
    const currentCustomers = channelResult.customers;
    const additionalSpend = channelResult.spend * 0.1; // +10%
    const additionalCustomers = additionalSpend / (channelResult.effectiveCAC * 1.15); // +15% к CAC
    
    if (additionalCustomers <= 0) return 0;
    
    const additionalRevenue = additionalCustomers * scenario.avgRevenuePerCustomer;
    return additionalRevenue / additionalSpend;
}

function generateEconomicAnalysis(scenario, result, allocations, channelResults) {
    const metrics = calculateEconomicMetrics(scenario, result, allocations, channelResults);
    const totalBudget = Object.values(allocations).reduce((a, b) => a + b, 0);
    
    let analysisHTML = `
        <div class="economic-metrics">
            <h4>📊 Экономическая эффективность</h4>
    `;
    
    // ROI кампании
    const roiClass = metrics.campaignROI > 0 ? 'metric-good' : 'metric-bad';
    analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">ROI кампании:</span>
                <span class="metric-value ${roiClass}">${(metrics.campaignROI * 100).toFixed(1)}%</span>
            </div>
    `;
    
    // Эффективность CAC
    if (result.cac) {
        const cacEfficiency = metrics.cacProfitability;
        const cacClass = cacEfficiency > 1.5 ? 'metric-good' : 
                        cacEfficiency > 1 ? 'metric-warning' : 'metric-bad';
        analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">Рентабельность CAC:</span>
                <span class="metric-value ${cacClass}">${cacEfficiency.toFixed(2)}×</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Фактический CAC:</span>
                <span class="metric-value">${formatMoney(Math.round(result.cac))}${currency}</span>
            </div>
        `;
    }
    
    // Диверсификация
    analysisHTML += `
            <div class="metric-row">
                <span class="metric-label">Диверсификация:</span>
                <span class="metric-value">${(metrics.diversificationIndex * 100).toFixed(0)}%</span>
            </div>
            <div class="metric-row">
                <span class="metric-label">Активных каналов:</span>
                <span class="metric-value">${metrics.activeChannels} из 6</span>
            </div>
        </div>
    `;
    
    // Анализ по каналам
    analysisHTML += `
        <div class="analysis-section">
            <h4>📈 Эффективность по каналам</h4>
    `;
    
    const effectiveChannels = channelResults.filter(cr => cr.spend > 0 && cr.effectiveCAC);
    if (effectiveChannels.length > 0) {
        effectiveChannels.forEach(cr => {
            const channel = channels.find(c => c.key === cr.key);
            const efficiency = scenario.avgRevenuePerCustomer / cr.effectiveCAC;
            const efficiencyClass = efficiency > 1 ? 'metric-good' : 'metric-bad';
            const percentage = (cr.spend / totalBudget * 100).toFixed(1);
            
            analysisHTML += `
                <div class="metric-row">
                    <span class="metric-label">${channel.label} (${percentage}%):</span>
                    <span class="metric-value ${efficiencyClass}">CAC: ${formatMoney(Math.round(cr.effectiveCAC))}${currency}</span>
                </div>
            `;
        });
    } else {
        analysisHTML += `<p class="warning">Нет эффективных каналов. Все инвестиции убыточны.</p>`;
    }
    
    analysisHTML += `</div>`;
    
    // Стратегические рекомендации
    analysisHTML += `
        <div class="analysis-section">
            <h4>🎯 Стратегические инсайты</h4>
            <ul>
    `;
    
    const insights = generateStrategicInsights(metrics, result, scenario, effectiveChannels);
    insights.forEach(insight => {
        analysisHTML += `<li>${insight}</li>`;
    });
    
    analysisHTML += `
            </ul>
        </div>
    `;
    
    // Заключительная оценка
    const finalAssessment = generateFinalAssessment(metrics, result, scenario);
    analysisHTML += `
        <div class="${finalAssessment.class}">
            <strong>${finalAssessment.title}</strong><br>
            ${finalAssessment.message}
        </div>
    `;
    
    return analysisHTML;
}

function generateStrategicInsights(metrics, result, scenario, effectiveChannels) {
    const insights = [];
    
    // Анализ ROI
    if (metrics.campaignROI < 0) {
        insights.push(`Кампания убыточна (ROI: ${(metrics.campaignROI * 100).toFixed(1)}%). Требуется пересмотр стратегии.`);
    } else if (metrics.campaignROI < 0.1) {
        insights.push(`Низкая рентабельность. Рассмотрите перераспределение бюджета в более эффективные каналы.`);
    }
    
    // Анализ диверсификации
    if (metrics.diversificationIndex < 0.5) {
        insights.push(`Слишком низкая диверсификация. Рекомендуется использовать 3-4 канала для снижения рисков.`);
    }
    
    // Анализ каналов
    const losingChannels = effectiveChannels.filter(cr => {
        const efficiency = scenario.avgRevenuePerCustomer / cr.effectiveCAC;
        return efficiency < 1;
    });
    
    if (losingChannels.length > 0) {
        insights.push(`${losingChannels.length} канал(а) приносят убыток (CAC > среднего чека).`);
    }
    
    // Анализ целей
    if (result.customers < scenario.targetCustomers * 0.7) {
        insights.push(`Серьезный дефицит клиентов. Необходимо увеличить инвестиции в каналы с низким CAC.`);
    }
    
    if (result.roas < scenario.targetROAS * 0.8) {
        insights.push(`ROAS значительно ниже цели. Сфокусируйтесь на каналах с высокой конверсией.`);
    }
    
    // Общий совет
    if (result.score >= 80) {
        insights.push(`Отличный результат! Текущая стратегия хорошо сбалансирована.`);
    } else if (result.score >= 60) {
        insights.push(`Хорошая основа. Небольшие оптимизации могут значительно улучшить результат.`);
    } else {
        insights.push(`Требуется значительная переработка стратегии распределения бюджета.`);
    }
    
    return insights;
}

function generateFinalAssessment(metrics, result, scenario) {
    const customerRatio = result.customers / scenario.targetCustomers;
    const roasRatio = result.roas / scenario.targetROAS;
    
    if (customerRatio >= 1 && roasRatio >= 1 && metrics.campaignROI > 0.2) {
        return {
            class: "success",
            title: "✅ Превосходный результат",
            message: "Все цели достигнуты с высокой рентабельностью. Стратегия оптимальна для данного сценария."
        };
    } else if (customerRatio >= 0.8 && roasRatio >= 0.8 && metrics.campaignROI > 0) {
        return {
            class: "insight",
            title: "📈 Хороший потенциал",
            message: "Основные цели близки к достижению. Небольшие корректировки могут значительно улучшить ROI."
        };
    } else if (metrics.campaignROI < 0) {
        return {
            class: "warning",
            title: "⚠️ Убыточная кампания",
            message: "Кампания приносит убытки. Необходимо пересмотреть распределение бюджета и фокус на рентабельных каналах."
        };
    } else {
        return {
            class: "warning",
            title: "📉 Требуется оптимизация",
            message: "Одна или несколько ключевых метрик значительно ниже целевых значений. Рекомендуется изучить анализ эффективности каналов."
        };
    }
}

// ----------------------
// СОСТОЯНИЕ И УТИЛИТЫ
// ----------------------

const gameState = {
  currentScenarioIndex: 0,
  scenarioScores: [],
  scenarioAttempts: {}, // Отслеживание попыток по сценариям
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
// РЕНДЕР ЭКРАНОВ
// ----------------------

function renderScenarioIntro() {
  const scenario = scenarios[gameState.currentScenarioIndex];
  const step = gameState.currentScenarioIndex + 1;
  const attemptCount = getScenarioAttemptCount(scenario.id);

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>Сценарий ${step} из ${scenarios.length} (Попытка: ${attemptCount + 1})</span>
      </div>
      <h1>${scenario.name}</h1>
      <p class="subtitle">${scenario.description}</p>

      <div class="meta-row">
        <div class="meta-pill">
          <span class="meta-label">Сложность</span>
          <span class="meta-value">${scenario.difficulty >= 1 ? 'Высокая' : scenario.difficulty >= 0.8 ? 'Средняя' : 'Низкая'}</span>
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
          <span class="meta-label">Цель по клиентам</span>
          <span class="meta-value">${scenario.targetCustomers}</span>
        </div>
      </div>

      <p><strong>Новая сложность:</strong> CAC значительно увеличен, добавлены точки насыщения каналов. Каналы быстро теряют эффективность при переинвестировании.</p>

      <div class="btn-row">
        <button class="primary" id="btn-start">Распределить бюджет</button>
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
    .addEventListener("click", () => {
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
          <div class="slider-hint">${ch.hint}</div>
          <div class="slider-hint">Точка насыщения: ${Math.round(ch.saturationPoint * 100)}% бюджета</div>
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
        <strong>Сложность:</strong> ${scenario.difficulty >= 1 ? 'Высокая' : 'Средняя'} | 
        <strong>Цели:</strong> ${scenario.targetCustomers} клиентов, ROAS ${scenario.targetROAS.toFixed(1)}×
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

      <p class="insight">⚠️ Внимание: Каналы имеют точки насыщения. Переинвестирование ведет к резкому росту CAC.</p>

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

    if (Math.abs(total - scenario.budget) < 100) { // Допуск 100 рублей
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
      <p class="subtitle">Симуляция с учетом сложной экономической модели.</p>
      <p>Расчет CAC с точками насыщения, синергии каналов и убывающей отдачи…</p>
    </div>
  `;

  setTimeout(() => {
    const result = runSimulation(scenario, allocations);
    renderResultsScreen(scenario, result, allocations);
  }, 1000);
}

function renderResultsScreen(scenario, result, allocations) {
  const step = gameState.currentScenarioIndex + 1;
  const isLast = step === scenarios.length;

  const customersText =
    result.customers >= scenario.targetCustomers
      ? `Цель по клиентам достигнута! (${result.customers} из ${scenario.targetCustomers})`
      : `До цели не хватило ${scenario.targetCustomers - result.customers} клиентов (${result.customers} из ${scenario.targetCustomers}).`;

  const roasText =
    result.roas >= scenario.targetROAS
      ? `Цель по ROAS достигнута! (${result.roas.toFixed(2)}× ≥ ${scenario.targetROAS.toFixed(1)}×)`
      : `ROAS ниже цели на ${(scenario.targetROAS - result.roas).toFixed(2)}× (${result.roas.toFixed(2)}× из ${scenario.targetROAS.toFixed(1)}×).`;

  const cacText =
    result.cac == null
      ? "Нет клиентов, CAC не считается."
      : `${formatMoney(Math.round(result.cac))} ${currency}`;

  // Генерация экономического анализа
  const economicAnalysis = generateEconomicAnalysis(scenario, result, allocations, result.channelResults || []);

  app.innerHTML = `
    <div class="card">
      <div class="badge">
        <span>Сценарий ${step} · Балл: ${result.score}/100</span>
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
          <div class="result-note">ROI: ${((result.revenue - scenario.budget) / scenario.budget * 100).toFixed(1)}%</div>
        </div>
        <div class="result-tile">
          <div class="result-label">Расходы</div>
          <div class="result-value">${formatMoney(
            scenario.budget
          )} ${currency}</div>
          <div class="result-note">Полный бюджет</div>
        </div>
        <div class="result-tile">
          <div class="result-label">CAC</div>
          <div class="result-value">${cacText}</div>
          <div class="result-note">Средний чек: ${formatMoney(scenario.avgRevenuePerCustomer)}${currency}</div>
        </div>
        <div class="result-tile">
          <div class="result-label">ROAS</div>
          <div class="result-value">${result.roas.toFixed(2)}×</div>
          <div class="result-note">Цель: ${scenario.targetROAS.toFixed(1)}×</div>
        </div>
      </div>

      <h3 style="margin-top: 16px;">📊 Детальный экономический анализ</h3>
      ${economicAnalysis}

      <div class="btn-row">
        <button class="secondary" id="btn-retry">Попробовать ещё раз</button>
        ${
          isLast
            ? '<button class="primary" id="btn-next">К итогам игры</button>'
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
        <h2>Сводка недоступна</h2>
        <p class="subtitle">Сначала завершите хотя бы один сценарий.</p>
        <div class="btn-row">
          <button class="primary" id="btn-back">Начать игру</button>
        </div>
      </div>
    `;
    document
      .getElementById("btn-back")
      .addEventListener("click", () => {
        gameState.currentScenarioIndex = 0;
        renderScenarioIntro();
      });
    return;
  }

  const avgScore = scores.reduce((acc, s) => acc + s.score, 0) / scores.length;
  
  let best = scores[0];
  let worst = scores[0];
  scores.forEach((s) => {
    if (s.score > best.score) best = s;
    if (s.score < worst.score) worst = s;
  });

  // Статистика по сложности
  const completedScenarios = scores.length;
  const totalAttempts = Object.values(gameState.scenarioAttempts).reduce((a, b) => a + b, 0);
  const avgAttemptsPerScenario = totalAttempts / completedScenarios;

  const itemsHtml = scores
    .map((s, idx) => {
      const scenario = scenarios.find((sc) => sc.id === s.scenarioId);
      const scoreClass = s.score >= 80 ? 'metric-good' : 
                        s.score >= 60 ? 'metric-warning' : 'metric-bad';
      const attempts = gameState.scenarioAttempts[s.scenarioId] || 1;
      
      return `
        <div class="summary-row">
          <div class="summary-name">
            ${idx + 1}. ${scenario.name}<br>
            <small style="color: #9ca3af; font-size: 0.75rem;">${attempts} попытка(ок)</small>
          </div>
          <div class="summary-score ${scoreClass}">${s.score}</div>
        </div>
      `;
    })
    .join("");

  const bestScenario = scenarios.find((sc) => sc.id === best.scenarioId);
  const worstScenario = scenarios.find((sc) => sc.id === worst.scenarioId);

  const performanceLevel = avgScore >= 80 ? 'Эксперт' : 
                         avgScore >= 65 ? 'Продвинутый' : 
                         avgScore >= 50 ? 'Средний' : 
                         avgScore >= 35 ? 'Начинающий' : 'Новичок';

  app.innerHTML = `
    <div class="card">
      <h2>Итоги игры</h2>
      <p class="subtitle">Завершено сценариев: ${completedScenarios} из ${scenarios.length}</p>

      <div class="economic-metrics">
        <div class="metric-row">
          <span class="metric-label">Средний балл:</span>
          <span class="metric-value">${avgScore.toFixed(1)}/100</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Уровень игры:</span>
          <span class="metric-value">${performanceLevel}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Среднее попыток на сценарий:</span>
          <span class="metric-value">${avgAttemptsPerScenario.toFixed(1)}</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Лучший результат:</span>
          <span class="metric-value">${bestScenario.name} (${best.score})</span>
        </div>
        <div class="metric-row">
          <span class="metric-label">Самый сложный:</span>
          <span class="metric-value">${worstScenario.name} (${worst.score})</span>
        </div>
      </div>

      <div class="analysis-section">
        <h4>Результаты по сценариям</h4>
        <div class="summary-list">
          ${itemsHtml}
        </div>
      </div>

      <p class="insight">Игра теперь использует сложную экономическую модель с реалистичными точками насыщения каналов и квадратичным ростом CAC. Высокие баллы требуют глубокого понимания предельной эффективности инвестиций.</p>

      <div class="btn-row">
        <button class="secondary" id="btn-continue">Продолжить игру</button>
        <button class="primary" id="btn-restart">Начать заново</button>
      </div>
    </div>
  `;

  document
    .getElementById("btn-continue")
    .addEventListener("click", () => renderScenarioIntro());

  document.getElementById("btn-restart").addEventListener("click", () => {
    gameState.currentScenarioIndex = 0;
    gameState.scenarioScores = [];
    gameState.scenarioAttempts = {};
    gameState.finished = false;
    renderScenarioIntro();
  });
}

// ----------------------
// ОБНОВЛЕННАЯ СИМУЛЯЦИЯ (ЗНАЧИТЕЛЬНО УСЛОЖНЕННАЯ)
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

    const modifier = scenario.channelModifiers[ch.key];
    const efficiency = calculateChannelEfficiency(ch, spend, scenario.budget, modifier);
    
    if (efficiency.effectiveCAC) {
      totalCustomers += efficiency.customers;
    }
    
    channelResults.push({
      key: ch.key,
      spend,
      customers: efficiency.customers,
      effectiveCAC: efficiency.effectiveCAC
    });
  });

  // Синергетический эффект
  const synergyMultiplier = calculateSynergyEffect(allocations, scenario.budget);
  totalCustomers *= synergyMultiplier;

  // Эффект кривой обучения
  const attemptCount = getScenarioAttemptCount(scenario.id);
  const learningEffect = calculateLearningCurveEffect(scenario, attemptCount);
  totalCustomers *= learningEffect;

  // Округление с учетом сложности
  const roundedCustomers = Math.max(0, Math.round(totalCustomers * scenario.difficulty));
  
  // Расчет выручки с учетом возможной перекупленности (убывающая предельная полезность)
  const revenueMultiplier = Math.min(1, 1.5 - roundedCustomers / (scenario.targetCustomers * 2));
  const revenue = roundedCustomers * scenario.avgRevenuePerCustomer * revenueMultiplier;
  
  const cac = roundedCustomers === 0 ? null : totalSpend / roundedCustomers;
  const roas = totalSpend === 0 ? 0 : revenue / totalSpend;

  const score = calculateScore(
    scenario,
    roundedCustomers,
    roas,
    cac
  );

  return {
    customers: roundedCustomers,
    revenue,
    cac,
    roas,
    score,
    scenarioId: scenario.id,
    channelResults // Возвращаем детальные результаты по каналам
  };
}

function calculateScore(scenario, customers, roas, cac) {
  const custRatio = scenario.targetCustomers === 0 ? 1 : customers / scenario.targetCustomers;
  const roasRatio = scenario.targetROAS === 0 ? 1 : roas / scenario.targetROAS;

  // Более жесткая система оценки
  let scoreCustomers = Math.min(custRatio, 1) * 40; // Было 50
  if (custRatio > 1) {
    scoreCustomers += Math.min((custRatio - 1) * 10, 5); // Было 20 и 10
  }

  let scoreROAS = Math.min(roasRatio, 1) * 40; // Было 50
  if (roasRatio > 1) {
    scoreROAS += Math.min((roasRatio - 1) * 10, 5); // Было 20 и 10
  }

  // Бонус за эффективный CAC
  let cacBonus = 0;
  if (cac) {
    const cacEfficiency = scenario.avgRevenuePerCustomer / cac;
    if (cacEfficiency > 2) cacBonus = 10;
    else if (cacEfficiency > 1.5) cacBonus = 5;
    else if (cacEfficiency < 0.8) cacBonus = -5;
  }

  // Бонус за баланс
  let balanceBonus = 0;
  if (custRatio >= 0.9 && roasRatio >= 0.9) {
    balanceBonus = 5;
  }

  // Штраф за перевыполнение (переинвестирование)
  let overinvestmentPenalty = 0;
  if (custRatio > 1.5) {
    overinvestmentPenalty = -Math.min(10, (custRatio - 1.5) * 5);
  }

  const totalScore = clamp(
    Math.round(scoreCustomers + scoreROAS + cacBonus + balanceBonus + overinvestmentPenalty),
    0,
    100
  );
  
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
