"use strict"; // Created by ua.lifesheets on 01.02.2023.

/**
  * Завантаження методів на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
  try {
    // Глобальні константи.
    Method.DataTime = require('../methods/datatime');
    Method.WriteFile = require('../methods/writefile');
    Method.Terminal = require('../methods/terminal');
    // Підключаємо івенти.
    mp.events.add(Method.Terminal.events);
    // Todo: add method.exports
  } catch (error) {
    // Виводимо помилку яка допущена була в експорті.
    console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Methods:${'\x1b[0m'}`, error.message);
  }
};