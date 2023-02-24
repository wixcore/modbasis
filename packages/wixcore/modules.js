"use strict"; // Created by ua.lifesheets on 01.02.2023.

/**
  * Завантаження модулів на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
  try {
    await WixCore.Base.Connect(function () {
      // Todo: add module.exports
    });
  } catch (error) {
    // Виводимо помилку яка допущена була в експорті.
    console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Modules:${'\x1b[0m'}`, error.message);
  }
};