"use strict"; // Created by ua.lifesheets on 24.02.2023.

/**
  * Завантажує ігровий режим на стороні клієнта.
  * @author Mykola Dovhopol (ua.lifesheets).
  * @copyright Copyright (C) 2023 WixCore.Net
  */

require('./game_resources/handlers/wixcore/nucleus');
require('./game_resources/handlers/wixcore/configs');
require('./game_resources/handlers/wixcore/methods');
require('./game_resources/handlers/wixcore/shareds');
require('./game_resources/handlers/wixcore/modules');

mp.events.add('playerReady', () => {
  // Вимикаємо фоновий шум. Сирену, навантажувач, гудки та інше.
  mp.game.audio.startAudioScene('CHARACTER_CHANGE_IN_SKY_SCENE');
});