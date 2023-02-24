"use strict"; // Created by ua.lifesheets on 23.02.2023.

/**
  * Результат під час виконання коду в консоль.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = {
     // Обробка даних з боку сервера.
    Server(type, message, ...args) {
        var date = Method.DataTime.Date('date month year');
        var time = Method.DataTime.Time('hour minute');
        var color = Config.Terminal.Color.FG;
        var colorReset = Config.Terminal.Color.Reset;
        var server = {};

        // Конфігурація | Корисно для розробки модулів.
        if (type === 'debug') {
            server = { "id": 0, "name": "DEBUG", "color": { "name": color[6], "time": color[5] }, "patch": { "file": "terminal\\server\\debug", "expansion": "log" } };
        }
        // Конфігурація | Обробка помилок сервера.
        if (type === 'error') {
            server = { "id": 1, "name": "ERROR", "color": { "name": color[1], "time": color[5] }, "patch": { "file": "terminal\\server\\error", "expansion": "log" } };
        }
        // Конфігурація | Виводимо інформацію.
        if (type === 'info') {
            server = { "id": 2, "name": "DEBUG", "color": { "name": color[2], "time": color[5] }, "patch": { "file": "terminal\\server\\info", "expansion": "log" } };
        }
        // Конфігурація | Логуємо дії.
        if (type === 'log') {
            server = { "id": 3, "name": "DEBUG", "color": { "name": color[3], "time": color[5] }, "patch": { "file": "terminal\\server\\log", "expansion": "log" } };
        }
        // Конфігурація | Відповідь - попередження.
        if (type === 'warn') {
            server = { "id": 4, "name": "DEBUG", "color": { "name": color[4], "time": color[5] }, "patch": { "file": "terminal\\server\\warn", "expansion": "log" } };
        }
        // Сторона сервера | Виведення даних для консолі.
        if (Config.Terminal.Option.Server.Console[server.id]) {
            console.debug(`${server.color.name}[SERVER-${server.name}] ${server.color.time}[${date}/${time}]${colorReset} ::`, message, JSON.stringify(args));
        }
        // Сторона сервера | Збереження даних у файлі.
        if (Config.Terminal.Option.Server.Records[server.id]) {
            Method.WriteFile.Run(server.patch.file, Method.DataTime.Date('date month year'), server.patch.expansion, `[${date}/${time}] ${message}, ${JSON.stringify(args)}`);
        }
    },
    // Обробка отриманих даних із клієнтки.
    Client(type, message, ...args) {
        var date = Method.DataTime.Date('date month year');
        var time = Method.DataTime.Time('hour minute');
        var color = Config.Terminal.Color.FG;
        var colorReset = Config.Terminal.Color.Reset;
        var client = {};

        // Конфігурація | Корисно для розробки модулів.
        if (type === 'debug') {
            client = { "id": 0, "name": "DEBUG", "color": { "name": color[6], "time": color[5] }, "patch": { "file": "terminal\\client\\debug", "expansion": "log" } };
        }
        // Конфігурація | Обробка помилок сервера.
        if (type === 'error') {
            client = { "id": 1, "name": "ERROR", "color": { "name": color[1], "time": color[5] }, "patch": { "file": "terminal\\client\\error", "expansion": "log" } };
        }
        // Конфігурація | Виводимо інформацію.
        if (type === 'info') {
            client = { "id": 2, "name": "DEBUG", "color": { "name": color[2], "time": color[5] }, "patch": { "file": "terminal\\client\\info", "expansion": "log" } };
        }
        // Конфігурація | Логуємо дії.
        if (type === 'log') {
            client = { "id": 3, "name": "DEBUG", "color": { "name": color[3], "time": color[5] }, "patch": { "file": "terminal\\client\\log", "expansion": "log" } };
        }
        // Конфігурація | Відповідь - попередження.
        if (type === 'warn') {
            client = { "id": 4, "name": "DEBUG", "color": { "name": color[4], "time": color[5] }, "patch": { "file": "terminal\\client\\warn", "expansion": "log" } };
        }

        // Сторона клієнта | Виведення даних для консолі.
        if (Config.Terminal.Option.Client.Console[client.id]) {
            console.debug(`${client.color.name}[CLIENT-${client.name}] ${client.color.time}[${date}/${time}]${colorReset} ::`, message, JSON.stringify(args));
        }
        // Сторона клієнта | Збереження даних у файлі.
        if (Config.Terminal.Option.Client.Records[client.id]) {
            Method.WriteFile.Run(client.patch.file, Method.DataTime.Date('date month year'), client.patch.expansion, `[${date}/${time}] ${message}, ${JSON.stringify(args)}`);
        }
    },
    // Корисно для розробки модулів.
    Debug(message, ...args) {
        try {
            this.Server('debug', message, args);
        } catch (error) {
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} [Method.Terminal.Debug]:${'\x1b[0m'}`, error.message);
        }
    },
    // Обробка помилок сервера.
    Error(message, ...args) {
        try {
            this.Server('error', message, args);
        } catch (error) {
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} [Method.Terminal.Error]:${'\x1b[0m'}`, error.message);
        }
    },
    // Виводимо інформацію від сервера.
    Info(message, ...args) {
        try {
            this.Server('info', message, args);
        } catch (error) {
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} [Method.Terminal.Info]:${'\x1b[0m'}`, error.message);
        }
    },
    // Логуємо дії на сервері.
    Log(message, ...args) {
        try {
            this.Server('log', message, args);
        } catch (error) {
            // Виводимо помилку яка допущена була в експорті.
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} [Method.Terminal.Log]:${'\x1b[0m'}`, error.message);
        }
    },
    // Відповідь сервера попередження.
    Warn(message, ...args) {
        try {
            this.Server('warn', message, args);
        } catch (error) {
            // Виводимо помилку яка допущена була в експорті.
            console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} [Method.Terminal.Warn]:${'\x1b[0m'}`, error.message);
        }
    },
    // Прийом із клієнтки
    events: {
        // Корисно для розробки модулів.
        "wixcore::security::methods:terminal:debug": (player, message) => {
            Method.Terminal.Client('debug', `[${player.socialClub}]: ${message}`);
            //this.Client('debug', message, args);
        },
        // Обробка помилок клієнтки.
        "wixcore::security::methods:terminal:error": (player, message) => {
            Method.Terminal.Client('error', `[${player.socialClub}]: ${message}`);
        },
        // Виводимо інформацію від клієнтки.
        "wixcore::security::methods:terminal:info": (player, message) => {
            Method.Terminal.Client('info', `[${player.socialClub}]: ${message}`);
        },
        // Логуємо дії на клієнтки.
        "wixcore::security::methods:terminal:log": (player, message) => {
            Method.Terminal.Client('log', `[${player.socialClub}]: ${message}`);
        },
        // Відповідь клієнтки попередження.
        "wixcore::security::methods:terminal:warn": (player, message) => {
            Method.Terminal.Client('warn', `[${player.socialClub}]: ${message}`);
        },
    }
}