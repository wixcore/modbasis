"use strict"; // Created by ua.lifesheets on 01.02.2023.

/**
  * Завантаження модулів на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
  try {
    // Ініціалізація бази даних та запуск систем.
    await WixCore.Base.Connect(function () {
      // Читання папки із системами (../modules/*.js).
      fs.readdirSync(path.dirname(__dirname) + '\\modules\\').forEach(module => {
        // Змінна каталог систем для зручності.
        var catalog = path.dirname(__dirname) + '\\modules\\' + module;
        // Ігноруємо модулі, які не виконує.
        if (!Config.Modules['ignore'].includes(module)) {
          // Перевірка існування файлу.
          if (fs.existsSync(catalog + "\\init.js")) {
            // Виконати код з index.js
            require('..\\' + '\\modules\\' + module + '\\init.js')();
          };
          // Перевірка існування файлу.
          if (fs.existsSync(catalog + "\\events.js")) {
            // Виконати код з events.js
            var events = require(catalog + '\\events');
            mp.events.add(events);
          };
        };
      })
    });
  } catch (error) {
    // Виводимо помилку яка допущена була в експорті.
    console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Modules:${'\x1b[0m'}`, error.message);
  }
};