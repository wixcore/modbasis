Method.Terminal = {};

// Отправка на сервер:: орисно для розробки модулів.
Method.Terminal.Debug = function (message, ...args) {
    mp.events.callRemote('wixcore::security::methods:terminal:debug', `${message} | ${JSON.stringify(args)} | ${args.length}`)
}
// Отправка на сервер:: Обробка помилок клієнтки.
Method.Terminal.Error = function (message, ...args) {
    mp.events.callRemote('wixcore::security::methods:terminal:error', `${message} | ${JSON.stringify(args)} | ${args.length}`)
}
// Отправка на сервер:: Виводимо інформацію від клієнтки.
Method.Terminal.Info = function (message, ...args) {
    mp.events.callRemote('wixcore::security::methods:terminal:info', `${message} | ${JSON.stringify(args)} | ${args.length}`)
}
// Отправка на сервер:: Логуємо дії на клієнтки.
Method.Terminal.Log = function (message, ...args) {
    mp.events.callRemote('wixcore::security::methods:terminal:log', `${message} | ${JSON.stringify(args)} | ${args.length}`)
}
// Отправка на сервер:: Відповідь клієнтки попередження.
Method.Terminal.Warn = function (message, ...args) {
    mp.events.callRemote('wixcore::security::methods:terminal:warn', `${message} | ${JSON.stringify(args)} | ${args.length}`)
}

exports = Method.Terminal;