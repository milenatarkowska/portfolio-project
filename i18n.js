// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'Milena Tarkowska',
    title: 'Third Year Computer Science Student',
    paragraph: "Currently pursuing a bachelor's degree at",
    academy: 'Polish-Japanese Academy of Information Technology',
    location: 'Warsaw, Poland',
    email: 'milenatarkowska1@gmail.com'
  },
  pl: {
    name: 'Milena Tarkowska',
    title: 'Studentka 3 roku Informatyki',
    paragraph: 'Obecnie jestem na studiach 1 stopnia na ',
    academy: 'Polsko-Japońskiej Akademii Technik Komputerowych',
    location: 'Warszawa, Polska',
    email: 'milenatarkowska1@gmail.com'
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages
})
