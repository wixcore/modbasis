"use strict"; // Created by ua.lifesheets on 23.02.2023.

/**
  * Обробка часу для серверної частини.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

module.exports = {
    // Об'єкт з поточною датою та часом.
    Object: new Date(),
    // Отримання дати сервера.
    Date(value) {
        // Отримуємо поточну дату.
        var date = this.Object.getDate();
        // Отримуємо поточний місяць.
        var month = this.Object.getMonth() + 1;
        // Отримуємо поточну рік.
        var year = this.Object.getFullYear();
        // Повертаєм дату.
        if (value === 'date') {
            var result = `${date}`
            return result;
        }
        // Повертаєм місяць і дату.
        if (value === 'date month') {
            var result = `${month}.${date}`
            return result;
        }
        // Повертаєм дату і місяць.
        if (value === 'date month') {
            var result = `${date}.${month}`
            return result;
        }
        // Повертаєм дату, місяць, рік.
        if (value === 'date month year') {
            var result = `${date}.${month}.${year}`
            return result;
        }
    },
    // Отримання часу сервера.
    Time(value) {
        // Отримуємо поточну Годину.
        var hour = this.Object.getHours();
        // Отримуємо поточну Хвилину.
        var minute = this.Object.getMinutes();
        // Отримуємо поточний Секунду.
        var second = this.Object.getSeconds();
        // Повертаєм годину і хвилину.
        if (value === 'hour minute') {
            var result = `${hour}:${minute}`;
            return result;
        }
        // Повертаєм хвилину і секунду.
        if (value === 'minute second') {
            var result = `${minute}:${second}`;
            return result;
        }
        // Повертаєм годину хвилину і секунду.
        if (value === 'hour minute second') {
            var result = `${hour}:${minute}:${second}`;
            return result;
        }
    },
    // Поточний час у форматі таймстампу.
    Stamp(value) {
        // Повністю таймстамп час.
        if (value === undefined) {
            return Date.now();
        }
        // Формула для повернення даних.
        return Date.now() / value | 0;
    }
}