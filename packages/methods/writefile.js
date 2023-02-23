"use strict"; // Created by ua.lifesheets on 23.02.2023.

/**
  * Робота з файлами, що логуються.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = {
    Run(catalog, name, expansion, message) {
        fs.appendFile('./tmp' + '\\' + catalog + '\\' + name + `.${expansion}`, `${message}\n`, function (error) {
            if (error) {
                this.Create(name);
                return console.log(error);
            }
        });
    },
    Create(value) {
        fs.open(value, 'r', function (error, fd) {
            if (err) {
                fs.writeFile(value, '', function (error) {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log("Файл збережено!");
                    }
                });
            } else {
                console.log("Файл існує!");
            }
        });
    }
}