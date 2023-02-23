"use strict"; // Created by ua.lifesheets on 01.02.2023.

/**
  * Завантаження конфігураціЇ на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
  try {
    Config.Terminal = require("../configs/terminal");
  } catch (error) {
    // Виводимо помилку яка допущена була в експорті.
    console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Configs:${'\x1b[0m'}`, error.message);
  }
};