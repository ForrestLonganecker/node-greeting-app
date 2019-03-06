const greetings = require('./greeting.js');
const newModule = require('./new-module.js');

greetings.greetingEnglish();
greetings.greetingJapanese();
greetings.greetingSpanish();
greetings.greetingIcelandic();

newModule.add(2, 2);
newModule.currentDate();