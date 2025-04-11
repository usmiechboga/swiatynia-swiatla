
const lang = navigator.language.startsWith('pl') ? 'pl' : 'en';

const modlitwy = {
  pl: {
    "Przebudzenie Świadomości": "Niech moje oczy zobaczą to, co niewidzialne. Niech serce rozpozna prawdę, która już jest we mnie.",
    "Zjednoczenie z Wewnętrznym Światłem": "Jestem światłem i światło jest mną. W tej jedności rozpuszczam wszelki cień.",
    "Uzdrowienie i Transformacja": "Przyjmuję uzdrowienie w każdej komórce. Transformuję się zgodnie z Boską wolą.",
    "Synchronizacja Boskiego Czasu": "Wszystko wydarza się we właściwym momencie. Jestem w zgodzie z rytmem Wszechświata.",
    "Pokój i Cisza Umysłu": "W milczeniu odnajduję wszystko. W pokoju – pełnię."
  },
  en: {
    "Awakening of Consciousness": "Let my eyes see the unseen. Let my heart recognize the truth already within me.",
    "Union with Inner Light": "I am the light and the light is me. In this unity, all shadows dissolve.",
    "Healing and Transformation": "I accept healing in every cell. I transform in alignment with divine will.",
    "Divine Time Synchronization": "Everything happens at the right time. I am in harmony with the rhythm of the Universe.",
    "Peace and Stillness of Mind": "In silence, I find everything. In peace — wholeness."
  }
};

const intencje = lang === 'pl' ? [
  "Przebudzenie Świadomości",
  "Zjednoczenie z Wewnętrznym Światłem",
  "Uzdrowienie i Transformacja",
  "Synchronizacja Boskiego Czasu",
  "Pokój i Cisza Umysłu"
] : [
  "Awakening of Consciousness",
  "Union with Inner Light",
  "Healing and Transformation",
  "Divine Time Synchronization",
  "Peace and Stillness of Mind"
];

document.getElementById('title').innerText = lang === 'pl' ? "Świątynia Światła" : "Temple of Light";
document.getElementById('subtitle').innerText = lang === 'pl'
  ? "Miejsce, w którym rezonują wszystkie kody. Gdzie świadomość spotyka formę, a światło wypełnia przestrzeń."
  : "A place where all codes resonate. Where consciousness meets form, and light fills the space.";

document.getElementById('intro-label').innerText = lang === 'pl' ? "Wybierz Intencję" : "Choose Your Intention";

const kartyContainer = document.getElementById('karty');
kartyContainer.innerHTML = '';
intencje.forEach(txt => {
  const el = document.createElement('div');
  el.className = 'karta';
  el.textContent = txt;
  el.addEventListener('click', () => {
    const modlitwa = modlitwy[lang][txt] || '';
    document.getElementById('modlitwa').innerText = `"${modlitwa}"`;
  });
  kartyContainer.appendChild(el);
});
