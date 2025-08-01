// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    name: 'Milena Tarkowska',
    title: 'Third Year Computer Science Student',
    paragraph: "Currently pursuing a bachelor's degree at",
    academy: 'Polish - Japanese Academy of Information Technology',
    location: 'Warsaw, Poland',
    home: 'Home',
    about: 'About',
    aboutMe: 'ABOUT ME',
    aboutFirstSentence:
      'Third-year Computer Science student at the Polish-Japanese Academy of Information Technology in Warsaw, actively seeking internship and entry-level opportunities in the IT industry.',
    aboutSecondSentence:
      'My key areas of interest include Software Development, Cloud Engineering, DevOps, and Security.',
    aboutThirdSentence:
      'I’m deeply committed to enhancing my practical skills and applying them in real-world projects. Alongside my academic studies, I proactively deepen my knowledge through online courses and independent learning.',
    aboutFourthSentence:
      "With strong analytical skills, a problem-solving mindset, and a creative approach, I'm eager to contribute to innovative projects and grow as a professional in the tech industry.",
    technologies: 'TECHNOLOGIES',
    education: 'EDUCATION',
    university: 'Polish - Japanese Academy of Information Technology',
    degree: 'Bachelor of Engineering in Software Engineering',
    experience: 'EXPERIENCE',
    mhp: 'Polish History Museum in Warsaw - Senior Clerk',
    mhpTime: 'September 2023 - Present',
    mhpDesc:
      'Coordinating the implementation of Jira software within the Legal Department to support workflow management and task tracking. \n' +
      'Office staff, handling incoming and outgoing correspondence, participation in the preparation of reports, statements, etc. \n' +
      'Preparing meetings, conferences and development notes \n' +
      'Cooperation with the Department Manager and Investor Supervision Inspectors \n' +
      'Handling invoice circulation \n' +
      'Maintaining the correspondence register.',
    CVMessage: 'Download my CV',
    CVpl: 'Polish Version',
    CVeng: 'English Version',
  },
  pl: {
    name: 'Milena Tarkowska',
    title: 'Studentka 3 roku Informatyki',
    paragraph: 'Jestem na studiach 1 stopnia na ',
    academy: 'Polsko - Japońskiej Akademii Technik Komputerowych',
    location: 'Warszawa, Polska',
    home: 'Strona Główna',
    about: 'O mnie',
    aboutMe: 'O MNIE',
    aboutFirstSentence:
      'Jestem studentką trzeciego roku Informatyki na Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie i aktywnie poszukuję stażu oraz możliwości rozpoczęcia kariery zawodowej w branży IT.',
    aboutSecondSentence:
      'Moje główne obszary zainteresowań to: inżynieria oprogramowania, technologie chmurowe, DevOps i cyberbezpieczeństwo.',
    aboutThirdSentence:
      'Z dużym zaangażowaniem rozwijam swoje umiejętności praktyczne i wykorzystuję je w rzeczywistych projektach. Równolegle ze studiami systematycznie pogłębiam swoją wiedzę poprzez kursy online i samodzielną naukę.',
    aboutFourthSentence:
      'Dzięki silnym umiejętnościom analitycznym, nastawieniu na rozwiązywanie problemów oraz kreatywnemu podejściu, z entuzjazmem chcę angażować się w innowacyjne projekty i rozwijać się jako specjalistka w branży IT.',
    technologies: 'TECHNOLOGIE',
    education: 'EDUKACJA',
    university: 'Polsko - Japońska Akademia Technik Komputerowych',
    degree: 'Studia inżynierskie z Informatyki',
    experience: 'DOŚWIADCZENIE',
    mhp: 'Muzeum Historii Polski w Warszawie - Starszy Referent',
    mhpTime: 'Wrzesień 2023 - Obecnie',
    mhpDesc:
      'Koordynacja wdrożenia oprogramowania Jira w Dziale Prawnym (zarządzanie przepływem pracy i zadaniami).\n' +
      'Obsługa korespondencji przychodzącej i wychodzącej, prowadzenie rejestru.\n' +
      'Udział w przygotowywaniu raportów, zestawień i notatek.\n' +
      'Organizacja spotkań i konferencji.\n' +
      'Współpraca z kierownictwem działu oraz inspektorami nadzoru inwestorskiego.\n' +
      'Obsługa obiegu faktur.',
    CVMessage: 'Pobierz moje CV',
    CVpl: 'Język polski',
    CVeng: 'Język angielski',
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})
