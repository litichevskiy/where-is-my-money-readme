const AVAILABLE_CURRENCIES = ['EUR', 'PLN', 'UAH', 'USD'];

const localization = {
  "link": "https://where-is-my-money-seven.vercel.app/",
  "technology": ["React, Redux, TypeScript, IndexedDB (localForage)."],
  "email": "where.is.my.money.ls.app@gmail.com",
  "en" : {
    "name": "where's my money",
    "short-description": "where's my money - it's a mobile web application for tracking your spending.",
    "created-with": "This application is created with:",
    "contact-message": "If you have suggestions on how to make this app more user-friendly, or if you arise any error/bug (please take a screenshot or a short video about it) or questions, write to us.",
    "usage-link": "Link to application",
    "description": [
      ["That means when you make a purchase, you can add it to an app and use various sorting (for sorting, you need to add a minimum of two purchases)"],
      ["For a better experience use phone + latest version Google Chrome.",
        [
          ["For testing, we used Android 11 and Google Chrome 124+"],
          ["You can use it's in the browser, or install the app."],
          ["Browser asks you about installing or to install yourself."]
        ]
      ],
      ["Sorting by is available",
        [
          ["Product-name: like find for me: 'milk', 'coffee', 'bread', etc." ],
          ["Category: like 'food', 'drinks', 'home' ... . Categories are optional. You can add your or use default 'other'."],
          ["Dates: find for me all purchases, between selected dates 'from' and 'to'."],
          ["Latest: minimum 1 maximum 50 purchases."]
        ]
      ],
      ["All filters use date 'from' and 'to'. The application 'remembers' last query/filter.",
        [
          ["It mean when you open next time you will see last selected filter."],
          ["But when your select a filter (all filters use times 12:43, 16:18, etc. ) and later, without closing, the application add another purchase, you will not see it because the date and time are not updated automatically. Exception only if you use the 'latest' filter."],
        ]
      ],
      [`The application have for the following currencies: ${AVAILABLE_CURRENCIES.join(', ')} later there may be more.`,
        [
          ["You can use multi-currency, but if you do it, you can't see the 'total sum', only purchase sum, application doesn't converted."]
        ]
      ],
      ["The application can work without the internet/Wi-Fi. The network is used only for the first time, and for updating."],
      ["This app without registration. Your data is not transferred, no one has access to your purchases."],
      ["All user data/purchases is saved locally (device) without synchronization between devices/servers."],
      ["This Application doesn't have the  opportunity to restore user data/purchases if it is deleted."],
      ["Fast adding new purchases.",
        [
          ["For example, if you have purchased 'milk' and you buy it again, you can tap "+" on an existing purchase 'milk'. All data like name, category, price will be taken from a previous purchase, but 'date' now, and you can save it without/with editing."],
        ]
      ],
    ],
    "soon": {
      "title": "Later must be:",
      "description": [
        ["Video 'how it's used'."],
        ["Import/Export application data to/from your server (advanced usage)."],
        ["Basket/trash all deleted purchases will be stored for some time."],
        ["More filters, filters with charts."],
        ["More settings."],
      ]
    }
  },
  "ua" : {
    "name": "where's my money",
    "short-description": "where's my money - Це веб-додаток для відстеження витрат.",
    "created-with": "Цей додаток створений за допомогою:",
    "contact-message": "Якщо у вас є пропозиції щодо того, як зробити цей додаток зручнішим у використаннi, або якщо у вас виникли будь-які помилки (будь ласка, зробіть знімок екрана або коротке відео про це), чи питання, напишіть нам.",
    "usage-link": "Посилання на додаток",
    "description": [
      ["Це означає, що коли ви робите покупку, ви можете додати її в програму та використовувати різні сортування/фільтри. Для використання фільтрів потрібно додати мінімум дві покупки."],
      ["Для кращого досвіду використовуйте телефон + остання версія Google Chrome",
        [
          ["Для тестування використовувався Android 11 та Google Chrome 124+"],
          ["Ви можете використовувати його в браузері або встановити додаток."],
          ["Браузер запитає вас про встановлення, або встановiть самостійно."]
        ]
      ],
      ["Можливе сортування за:",
        [
          ["Назвою продукту: знайди менi 'молоко', 'каву', 'хліб', тощо."],
          ["Категоріями: 'їжа', 'напої', 'дім', ... . Категорія є необов'язковою, можно додати свою або використати за замовчуванням 'інше'."],
          ["Датою: знайти мене всі покупки між вибраними датами 'від' 'до'."],
          ["Останнімі: від мінімум 1, до максимум 50 покупок."],
        ]
      ],
      ["Усі фільтри використовують дату 'від' і 'до'. Додаток 'пам'ятає' останній запит/фільтр.",
        [
          ["Це означає, що під час наступного використання ви побачите останній вибраний фільтр."],
          ["Але коли ви вибираєте якийсь фільтр (всі фільтри використовують час, наприклад 12:43, 16:18 тощо), а пізніше, не закриваючи додаток, додаєте ще одну покупку, ви її не побачите, оскільки дата й час не оновлюються автоматично. Виняток, тільки якщо використовується фільтр 'останні'."],
        ]
      ],
      [`У додатку є для наступні  валюти: ${AVAILABLE_CURRENCIES.join(', ')} пізніше можливо буде більше.`,
        [
          ["Ви можете використовувати кілька валют, але якщо ви так робите, то не побачите «загальну суму», лише суму покупки, додаток не конвертує."]
        ]
      ],
      ["Додаток може працювати без інтернету/Wi-Fi. Інтернет використовується тільки перший раз, та для оновлення."],
      ["Немає реєстрації, тобто дані користувача нi кому не передаються, та нi не не зберігаються. Ніхто не має доступу до ваших покупок."],
      ["Усі дані користувача/покупки зберігаються локально (на пристрої) без синхронізації між пристроями/сервером."],
      ["В додатку не має можливості (станом на зараз) відновити дані/покупки користувача, якщо їх було видалено."],
      ["Є 'швидке' додавання нової покупки.",
        [
          ["Наприклад, ви додали 'молоко' і за деякий час хочете додати його знову."],
          ["Ви можете натиснути '+' на існуючий покупці 'молоко' i всі дані, такі як назва, категорія, ціна, будуть взяті з попередньої покупки, але 'дата' станом на зараз, і ви можете зберегти її без/з редагуванням."],
        ]
      ],
    ],
    "soon": {
      "title": "Має бути згодом:",
      "description": [
        ["Відео 'як користуватися'."],
        ["Експорт/імпорт даних користувача/покупок до (свого) сервера та навпаки."],
        ["'Кошик', в якому деякий час зберігатимуться всі видалені покупки."],
        ["Більше фільтрів, фільтри з діаграмами."],
        ["Різні налаштування."],
      ]
    }
  }
};

export default localization;