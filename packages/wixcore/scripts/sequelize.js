"use strict"; // Created by ua.lifesheets on 24.02.2023.

/**
  * @Name Підключення до ORM Sequelize для MySQL.
  * @description Модуль для підтримки активних та відкладених завантажень.
  * @support https://sequelize.org/docs/v6/
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

let Sequelize = require('sequelize');

module.exports = {
    Config: require('../../configs/sequelize'),
    Sequelize: null,
    Models: {},

    Connect: function (callback) {
        // Дані для підключення до бази даних.
        this.Sequelize = new Sequelize(this.Config.Connect[2], this.Config.Connect[3], this.Config.Connect[4], {
            host: this.Config.Connect[0],
            dialect: "mysql",
            port: this.Config.Connect[1] || 3306,
            logging: this.Config.Logging,
            pool: {
                max: this.Config.Pool[0],
                min: this.Config.Pool[1],
                acquire: this.Config.Pool[2],
                idle: this.Config.Pool[3]
            },
            dialectOptions: {
                connectTimeout: this.Config.ConnectTimeout
            },
            define: {
                timestamps: this.Config.TimeStamps
            }
        });

        this.loading();
        callback();
    },
    loading: function () {
        var root = path.dirname(path.dirname(__dirname));
        // Перевіряємо наявність підключення до бази даних.
        this.Sequelize.authenticate().then(() => {
            // Отримуємо список плагінів.
            fs.readdirSync(root + '\\modules\\').forEach(catalog => {
                // Перевірити чи є папка з моделями бази даних в плагіні.
                if (fs.existsSync(root + '\\modules\\' + catalog + '\\base')) {
                    // Отримуємо список моделей із папки.
                    fs.readdirSync(root + '\\modules\\' + catalog + '\\base').forEach(file => {
                        // Відносний шлях моделі бази даних.
                        var listModels = root + '\\modules\\' + catalog + '\\base\\' + file;
                        // Підключаємо моделі до масиву.
                        var model = require(listModels)(this.Sequelize, Sequelize.DataTypes);
                        // Записуємо список моделей до нашого загального масиву.
                        this.Models[model.name] = model;
                    });
                }
            });
            // Перебрати список моделей.
            for (var name in this.Models) {
                var model = this.Models[name];
                if (model.associate) {
                    model.associate(this.Models);
                }
            }
            // Створює таблицю, якщо вона не існує
            this.Sequelize.sync();
        }).catch((error) => {
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Не вдалося підключитися до бази даних:${'\x1b[0m'}`, error.message);
        });
    }
};