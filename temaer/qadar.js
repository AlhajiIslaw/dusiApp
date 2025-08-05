const allQuizzes = {
  QleksjonEn: [
      {
    question: '1. Hva betyr "Qadar"?',
    options: ['At mennesker bestemmer alt selv', 'At alt er tilfeldig', 'At Allah har bestemt alt som skjer'],
    correct: 2
  },
  {
    question: '2. Hvor mange søyler har troen (iman) ?',
    options: ['tre', 'seks', 'fem'],
    correct: 1
  },
  {
    question: '3. Hvem vet hva som skal skje i framtiden?',
    options: ['Allah', 'Englene', 'Menneskene'],
    correct: 0
  },
  {
    question: '4. Hvor er alt som skal skje skrevet ned?',
    options: ['I Koranen', 'I Den bevarte tavlen (Al-Lawh Al-Mahfudh)', 'I historiebøkene'],
    correct: 1
  },
  {
    question: '5. Hva skriver engelen når et barn er i magen til mamma?',
    options: ['Hva barnet skal hete', 'Hvor lenge barnet skal leve', 'Hva barnet skal studere'],
    correct: 1
  },
  {
    question: '6. Hvem bestemmer når og hvordan ting skjer i livet?',
    options: ['Mennesker', 'Tilfeldigheter', 'Allah'],
    correct: 2
  },
  {
    question: '7. Hva slags ting vet Allah om oss?',
    options: ['Bare det vi sier', 'Alt vi gjør, tenker og føler', 'Bare det som skjer i framtiden'],
    correct: 1
  },
  {
    question: '8. Kan noe skje uten at Allah vet om det?',
    options: ['Ja, mange ting', 'Nei, ingenting skjer uten at Allah vet det', 'Kanskje, det kommer an på'],
    correct: 1
  },
  {
    question: '9. Hva betyr det at vi har ansvar for våre valg?',
    options: [
      'Vi må gjøre alt perfekt',
      'Vi velger selv hva vi gjør, selv om Allah vet hva vi velger',
      'Alt vi gjør er andres feil'
    ],
    correct: 1
  },
  {
    question: '10. Hvorfor er troen på Qadar viktig?',
    options: [
      'Fordi vi da slipper å tenke',
      'Fordi det gir oss tillit til at Allah har kontroll på alt',
      'Fordi vi kan skylde på andre'
    ],
    correct: 1
  }
  ],
  QleksjonTo: [
   {
    question: '1. Hvorfor skapte Allah oss?',
    options: [
      'Allah skapte oss for å prøve hvor sterke vi er',
      'Allah skapte oss for å fylle jorden med mennesker',
      'Allah skapte oss for at vi skal tilbe Ham alene'
    ],
    correct: 2
  },
  {
    question: '2. Hva er de tre grunnleggende prinsippene som enhver tjener må kjenne til?',
    options: [
      'Å kjenne Mekka, Medina og Koranen',
      'Å kjenne bønn, faste og zakat',
      'Å kjenne sin Herre, sin religion og sin profet Muhammed (fred være med ham)'
    ],
    correct: 2
  },
  {
    question: '3. Hvor mange søyler har islam, og hva er de?',
    options: [
      'Fire: bønn, faste, zakat og hajj',
      'Seks: shahada, bønn, faste, zakat, hajj og jihad',
      'Fem: trosbekjennelsen, bønn, zakat, faste i Ramadan og pilegrimsreise'
    ],
    correct: 2
  },
  {
    question: '4. Hvor mange søyler har troen (iman), og hva er de?',
    options: [
      'Fem: Allah, bønn, Koranen, dommens dag og hajj',
      'Sju: Allah, profetene, Koranen, dommens dag, englene, moskeer og bønn',
      'Seks: tro på Allah, englene, bøkene, sendebudene, den siste dagen og forutbestemmelsen'
    ],
    correct: 2
  },
  {
    question: '5. Hva er ihsan?',
    options: [
      'Å gjøre gode gjerninger foran folk',
      'Å følge alle fem søyler av islam nøyaktig',
      'Å tilbe Allah som om du ser Ham, og vite at Han ser deg selv om du ikke ser Ham'
    ],
    correct: 2
  },
  {
    question: '6. Hva betyr "La ilaha illa Allah"?',
    options: [
      'Allah er den største blant gudene',
      'Det finnes mange guder, men Allah er viktigst',
      'Det finnes ingen som med rett kan tilbes unntatt Allah'
    ],
    correct: 2
  }
  ],
  hadith: [
    {
      question: '1. Hva er Hadith?',
      options: ['Vers fra Koranen', 'Historier fra følgesvennene', 'Profetens ord, handlinger og godkjennelser'],
      correct: 2
    },
    {
      question: '2. Hvorfor er Hadith viktig i islam?',
      options: ['Fordi det er en samling av historier', 'Fordi det forklarer og utdyper Koranens budskap', 'Fordi det ble skrevet først'],
      correct: 1
    },
    {
      question: '3. Hva kalles en person som samler Hadith?',
      options: ['Mujtahid', 'Muhaddith', 'Muadhin'],
      correct: 1
    },
    {
      question: '4. Hvilken bok er kjent som en samling av autentiske Hadither?',
      options: ['Sahih al-Bukhari', 'Tafsir al-Jalalayn', 'Fiqh-us-Sunnah'],
      correct: 0
    },
    {
      question: '5. Hvilket kriterium brukes for å vurdere Hadiths ekthet?',
      options: ['Lengde', 'Kildekjede og innhold', 'Oversettelse'],
      correct: 1
    }
  ],
  fiqh: [
    {
      question: '1. Hva betyr "Fiqh"?',
      options: ['Tale', 'Praktisk forståelse av islamsk lov', 'Tilbedelse'],
      correct: 1
    },
    {
      question: '2. Hvilke kilder brukes i fiqh?',
      options: ['Koranen og Hadith', 'Bibelen og Toraen', 'Avisartikler'],
      correct: 0
    },
    {
      question: '3. Hvilket område dekker fiqh?',
      options: ['Bare bønn og faste', 'Alle aspekter av livet', 'Kun økonomi'],
      correct: 1
    },
    {
      question: '4. Hva er en "Madhhab"?',
      options: ['Et arabisk språk', 'Et fiqh-læresystem', 'Et kapittel i Koranen'],
      correct: 1
    },
    {
      question: '5. Hvorfor er fiqh viktig?',
      options: ['For å kjenne Allahs navn', 'For å vite hvordan man skal handle etter islamsk lov', 'For å lære arabisk grammatikk'],
      correct: 1
    }
  ],
  akhlaaq: [
    {
      question: '1. Hva betyr "Akhlaaq"?',
      options: ['Moral og god karakter', 'Matregler', 'Historier om profeter'],
      correct: 0
    },
    {
      question: '2. Hvem er det beste eksempelet på god akhlaaq?',
      options: ['En lærer', 'Profeten Muhammad ﷺ', 'En dommer'],
      correct: 1
    },
    {
      question: '3. Hvor viktig er akhlaaq i islam?',
      options: ['Lite viktig', 'Bare viktig i bønn', 'Svært viktig og en del av troen'],
      correct: 2
    },
    {
      question: '4. Hva er et eksempel på god akhlaaq?',
      options: ['Å være ærlig og respektfull', 'Å ignorere naboen', 'Å heve stemmen uten grunn'],
      correct: 0
    },
    {
      question: '5. Hva sa Profeten ﷺ om hvorfor han ble sendt?',
      options: ['For å krige', 'For å lære folk tall', 'For å fullkommengjøre god karakter'],
      correct: 2
    }
  ],
  sirah: [
    {
      question: '1. Hva betyr "Sirah"?',
      options: ['Bønnerop', 'Profetens livshistorie', 'En arabisk bok'],
      correct: 1
    },
    {
      question: '2. Hvor ble Profeten Muhammad ﷺ født?',
      options: ['Medina', 'Mekka', 'Damaskus'],
      correct: 1
    },
    {
      question: '3. Hva lærer vi fra Profetens sirah?',
      options: ['Matlaging', 'Hvordan leve islam i praksis', 'Hvordan skrive poesi'],
      correct: 1
    },
    {
      question: '4. Hva kalles Profetens utvandring til Medina?',
      options: ['Hajj', 'Hijrah', 'Umrah'],
      correct: 1
    },
    {
      question: '5. Hvorfor er Sirah viktig å studere?',
      options: ['For å forstå historien', 'For å følge Profetens eksempel', 'For å lære geografi'],
      correct: 1
    }
  ],
  quran: [
    {
      question: '1. Hva er Koranen?',
      options: ['Et dikt', 'Allahs åpenbarte ord', 'En bok skrevet av mennesker'],
      correct: 1
    },
    {
      question: '2. Hvem mottok Koranen?',
      options: ['Profeten Isa', 'Profeten Muhammad ﷺ', 'Profeten Musa'],
      correct: 1
    },
    {
      question: '3. Hva er hovedtemaet i Koranen?',
      options: ['Historie', 'Veiledning for livet og troen', 'Eventyr'],
      correct: 1
    },
    {
      question: '4. På hvilket språk ble Koranen åpenbart?',
      options: ['Hebraisk', 'Persisk', 'Arabisk'],
      correct: 2
    },
    {
      question: '5. Hva er en "surah"?',
      options: ['Et kapittel i Koranen', 'En bønn', 'En type mat'],
      correct: 0
    },
    
    
  ], 
    tafsir: [
    {
      question: '1. Hva er Tafsir?',
      options: [
        'En samling hadith',
        'Vitenskapen om å tolke og forklare Koranen',
        'En islamsk lovbok'
      ],
      correct: 1
    },
    {
      question: '2. Hvorfor er Tafsir viktig?',
      options: [
        'Fordi det hjelper oss å forstå Koranens dype mening og kontekst',
        'Fordi det lærer oss å snakke arabisk',
        'Fordi det inneholder historier fra profetene'
      ],
      correct: 0
    },
    {
      question: '3. Hva forklarer Tafsir blant annet?',
      options: [
        'Hvordan man bygger moskeer',
        'Hvorfor og hvordan vers ble åpenbart',
        'Hvordan man lager islamsk mat'
      ],
      correct: 1
    },
    {
      question: '4. Hva kan gå tapt uten Tafsir?',
      options: [
        'Språkkunnskaper',
        'Profetenes liv',
        'Koranens visdom og kontekst'
      ],
      correct: 2
    },
    {
      question: '5. Hvem trenger Tafsir?',
      options: [
        'Kun imamer og lærde',
        'Alle som ønsker å følge islamsk veiledning korrekt',
        'Bare barn i dugsi'
      ],
      correct: 1
    }
  ]
  
};


  const quizButtons = document.querySelectorAll(".quiz__btn");
const popupWrapper = document.querySelector(".wrapper");
const closes = document.querySelector(".popupclose");

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('quiz-result');

let questions = [];
let currentQuestion = 0;
let userAnswers = [];

quizButtons.forEach(b => {
  b.addEventListener("click", (e) => {
    e.preventDefault();
    const quizKey = b.dataset.quiz;

    if (!allQuizzes[quizKey]) {
      alert("Quiz ikke funnet.");
      return;
    }

    questions = allQuizzes[quizKey];
    currentQuestion = 0;
    userAnswers = [];

    popupWrapper.style.display = 'block';
    document.querySelector(".quiz-buttons").style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
  });
});

closes.addEventListener("click", () => {
  popupWrapper.style.display = 'none';
});

function loadQuestion() {
  const q = questions[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];

  quizContainer.innerHTML = `
    <div class="question" style="margin-bottom:10px;"><strong>${q.question}</strong></div>
    <div class="answers">
      ${q.options.map((opt, i) => `
        <label style="display:block; margin-bottom:5px;">
          <input type="radio" name="answer" value="${i}" ${userAnswer == i ? 'checked' : ''}>
          <span>${opt}</span>
        </label>
      `).join('')}
      <div id="feedback" style="margin-top:10px;"></div>
    </div>
  `;

  document.querySelectorAll('input[name="answer"]').forEach(radio => {
    radio.addEventListener('change', checkAnswer);
  });

  document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'inline-block';
  document.getElementById('nextBtn').textContent = currentQuestion === questions.length - 1 ? 'Fullfør' : 'Neste';
}

function checkAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');
  const feedback = document.getElementById('feedback');
  if (!selected) return;

  const selectedVal = parseInt(selected.value);
  userAnswers[currentQuestion] = selectedVal;

  const isCorrect = selectedVal === questions[currentQuestion].correct;

  feedback.textContent = isCorrect ? '✅ Riktig!' : '❌ Feil. Prøv igjen!';
  feedback.style.color = isCorrect ? 'green' : 'red';

  document.querySelectorAll('label').forEach((label, idx) => {
    label.style.backgroundColor = '';
    if (idx === questions[currentQuestion].correct) {
      label.style.backgroundColor = '#d4edda'; // grønn
    }
    if (idx === selectedVal && !isCorrect) {
      label.style.backgroundColor = '#f8d7da'; // rød
    }
  });
}

document.getElementById('nextBtn').addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert('Vennligst velg et svar før du går videre.');
    return;
  }

  const selectedVal = parseInt(selected.value);
  userAnswers[currentQuestion] = selectedVal;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showFinalResult();
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

function showFinalResult() {
  quizContainer.innerHTML = '';
  document.querySelector('.quiz-buttons').style.display = 'none';
  resultContainer.style.display = 'block';

  let correctCount = 0;

  const reviewHtml = questions.map((q, index) => {
    const userAnswer = userAnswers[index];
    const correctAnswer = q.correct;
    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) correctCount++;

    return `
      <div style="margin-bottom: 1rem; padding: 10px; border-left: 5px solid ${isCorrect ? 'green' : 'red'}; background: ${isCorrect ? '#e0ffe0' : '#ffe0e0'};">
        <strong>${q.question}</strong><br>
        Ditt svar: ${userAnswer != null ? q.options[userAnswer] : '<em>Ikke svart</em>'}<br>
        Riktig svar: ${q.options[correctAnswer]}
      </div>
    `;
  }).join('');

  resultContainer.innerHTML = `
    <h3>✅ Du fikk ${correctCount} av ${questions.length} riktige!</h3>
    <h4>📋 Gjennomgang:</h4>
    ${reviewHtml}
  `;
}
