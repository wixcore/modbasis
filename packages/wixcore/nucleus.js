"use strict"; // Created by ua.lifesheets on 01.02.2023.

/**
  * Завантаження основного ядра на стороні сервера.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = async () => {
  try {
    // Глобальні константи
    global.fs = require('fs');
    global.path = require('path');
    // Підключаємо у всьому моді.
    global.WixCore = {};
    global.Config = {};
    global.Method = {};
    global.Module = {};
    global.Shared = {};

    WixCore.Base = require('./scripts/sequelize');

  } catch (error) {
    // Виводимо помилку яка допущена була в експорті.
    console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Nucleus:${'\x1b[0m'}`, error.message);
  }
};