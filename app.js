/* FILE 3: app.js */
/* This is the final, corrected JS for the main lesson app. */
document.addEventListener('DOMContentLoaded', () => {

    const masterVocabulary = [
        { id: 'hair', amharic: 'ፀጉር', english: 'Hair', phonetic: 'tsegur', category: 'Head', view: 'front', audioSrc: 'audio/hair.mp3', imageSrc: 'images/hair.jpg' },
        { id: 'forehead', amharic: 'ግንባር', english: 'Forehead', phonetic: 'ginbar', category: 'Head', view: 'front', audioSrc: 'audio/forehead.mp3', imageSrc: 'images/forehead.jpg' },
        { id: 'eyebrow', amharic: 'ቅንድብ', english: 'Eyebrow', phonetic: 'kindib', category: 'Head', view: 'front', audioSrc: 'audio/eyebrow.mp3', imageSrc: 'images/eyebrow.jpg' },
        { id: 'eyelash', amharic: 'ሽፋሽፍት', english: 'Eyelash', phonetic: 'shifashift', category: 'Head', view: 'front', audioSrc: 'audio/eyelash.mp3', imageSrc: 'images/eyelash.jpg' },
        { id: 'eye', amharic: 'አይን', english: 'Eye', phonetic: 'ayn', category: 'Head', view: 'front', audioSrc: 'audio/eye.mp3', imageSrc: 'images/eye.jpg' },
        { id: 'ear', amharic: 'ጆሮ', english: 'Ear', phonetic: 'joro', category: 'Head', view: 'front', audioSrc: 'audio/ear.mp3', imageSrc: 'images/ear.jpg' },
        { id: 'nose', amharic: 'አፍንጫ', english: 'Nose', phonetic: 'afincha', category: 'Head', view: 'front', audioSrc: 'audio/nose.mp3', imageSrc: 'images/nose.jpg' },
        { id: 'cheek', amharic: 'ጉንጭ', english: 'Cheek', phonetic: 'gunch', category: 'Head', view: 'front', audioSrc: 'audio/cheek.mp3', imageSrc: 'images/cheek.jpg' },
        { id: 'lip', amharic: 'ከንፈር', english: 'Lip', phonetic: 'kenfer', category: 'Head', view: 'front', audioSrc: 'audio/lip.mp3', imageSrc: 'images/lip.jpg' },
        { id: 'mouth', amharic: 'አፍ', english: 'Mouth', phonetic: 'af', category: 'Head', view: 'front', audioSrc: 'audio/mouth.mp3', imageSrc: 'images/mouth.jpg' },
        { id: 'tooth', amharic: 'ጥርስ', english: 'Tooth', phonetic: 'tirs', category: 'Head', view: 'front', audioSrc: 'audio/tooth.mp3', imageSrc: 'images/tooth.jpg' },
        { id: 'tongue', amharic: 'ምላስ', english: 'Tongue', phonetic: 'milas', category: 'Head', view: 'front', audioSrc: 'audio/tongue.mp3', imageSrc: 'images/tongue.jpg' },
        { id: 'chin', amharic: 'አገጭ', english: 'Chin', phonetic: 'agetch', category: 'Head', view: 'front', audioSrc: 'audio/chin.mp3', imageSrc: 'images/chin.jpg' },
        { id: 'face', amharic: 'ፊት', english: 'Face', phonetic: 'feet', category: 'Head', view: 'front', audioSrc: 'audio/face.mp3', imageSrc: 'images/face.jpg' },
        { id: 'head', amharic: 'ራስ', english: 'Head', phonetic: 'ras', category: 'Head', view: 'front', audioSrc: 'audio/head.mp3', imageSrc: 'images/head.jpg' },
        { id: 'neck', amharic: 'አንገት', english: 'Neck', category: 'Upper Body', view: 'front', audioSrc: 'audio/neck.mp3', imageSrc: 'images/neck.jpg' },
        { id: 'shoulder', amharic: 'ትከሻ', english: 'Shoulder', phonetic: 'tikesha', category: 'Upper Body', view: 'both', audioSrc: 'audio/shoulder.mp3', imageSrc: 'images/shoulder.jpg' },
        { id: 'chest', amharic: 'ደረት', english: 'Chest', phonetic: 'deret', category: 'Upper Body', view: 'front', audioSrc: 'audio/chest.mp3', imageSrc: 'images/chest.jpg' },
        { id: 'back', amharic: 'ጀርባ', english: 'Back', phonetic: 'jerba', category: 'Upper Body', view: 'back', audioSrc: 'audio/back.mp3', imageSrc: 'images/back.jpg' },
        { id: 'belly', amharic: 'ሆድ', english: 'Belly', phonetic: 'hod', category: 'Upper Body', view: 'front', audioSrc: 'audio/belly.mp3', imageSrc: 'images/belly.jpg' },
        { id: 'waist', amharic: 'ወገብ', english: 'Waist', phonetic: 'wegeb', category: 'Upper Body', view: 'back', audioSrc: 'audio/waist.mp3', imageSrc: 'images/waist.jpg' },
        { id: 'hip', amharic: 'ዳሌ', english: 'Hip', phonetic: 'dale', category: 'Upper Body', view: 'back', audioSrc: 'audio/hip.mp3', imageSrc: 'images/hip.jpg' },
        { id: 'buttocks', amharic: 'መቀመጫ', english: 'Buttocks', phonetic: 'mekemetcha', category: 'Upper Body', view: 'back', audioSrc: 'audio/buttocks.mp3', imageSrc: 'images/buttocks.jpg' },
        { id: 'arm', amharic: 'ክንድ', english: 'Arm', phonetic: 'kind', category: 'Arms and Hands', view: 'both', audioSrc: 'audio/arm.mp3', imageSrc: 'images/arm.jpg' },
        { id: 'elbow', amharic: 'ክርን', english: 'Elbow', phonetic: 'kirn', category: 'Arms and Hands', view: 'both', audioSrc: 'audio/elbow.mp3', imageSrc: 'images/elbow.jpg' },
        { id: 'wrist', amharic: 'የእጅ አንጓ', english: 'Wrist', phonetic: 'ye-ij angua', category: 'Arms and Hands', view: 'front', audioSrc: 'audio/wrist.mp3', imageSrc: 'images/wrist.jpg' },
        { id: 'hand', amharic: 'እጅ', english: 'Hand', phonetic: 'ijj', category: 'Arms and Hands', view: 'front', audioSrc: 'audio/hand.mp3', imageSrc: 'images/hand.jpg' },
        { id: 'finger', amharic: 'ጣት', english: 'Finger', phonetic: 'tat', category: 'Arms and Hands', view: 'front', audioSrc: 'audio/finger.mp3', imageSrc: 'images/finger.jpg' },
        { id: 'fingernail', amharic: 'ጥፍር', english: 'Fingernail', phonetic: 't’ifir', category: 'Arms and Hands', view: 'front', audioSrc: 'audio/fingernail.mp3', imageSrc: 'images/fingernail.jpg' },
        { id: 'thigh', amharic: 'ታፋ', english: 'Thigh', phonetic: 'tafa', category: 'Legs and Feet', view: 'front', audioSrc: 'audio/thigh.mp3', imageSrc: 'images/thigh.jpg' },
        { id: 'knee', amharic: 'ጉልበት', english: 'Knee', phonetic: 'gulbet', category: 'Legs and Feet', view: 'front', audioSrc: 'audio/knee.mp3', imageSrc: 'images/knee.jpg' },
        { id: 'calf', amharic: 'ጥጃ', english: 'Calf', phonetic: 't’ija', category: 'Legs and Feet', view: 'back', audioSrc: 'audio/calf.mp3', imageSrc: 'images/calf.jpg' },
        { id: 'ankle', amharic: 'ቁርጭምጭሚት', english: 'Ankle', phonetic: 'k’urch’imch’imit', category: 'Legs and Feet', view: 'front', audioSrc: 'audio/ankle.mp3', imageSrc: 'images/ankle.jpg' },
        { id: 'foot', amharic: 'እግር', english: 'Foot', phonetic: 'igir', category: 'Legs and Feet', view: 'front', audioSrc: 'audio/foot.mp3', imageSrc: 'images/foot.jpg' },
        { id: 'toe', amharic: 'የእግር ጣት', english: 'Toe', phonetic: 'ye-igir tat', category: 'Legs and Feet', view: 'front', audioSrc: 'audio/toe.mp3', imageSrc: 'images/toe.jpg' }
    ];

    // --- STATE MANAGEMENT ---
    let currentMode = 'learn';
    let currentView = 'front';
    let currentItem = null; 
    let quizState = { questions: [], currentQuestionIndex: 0, score: 0, isAmharicQuestion: false };

    // --- DOM ELEMENT CACHING ---
    const appContainer = document.getElementById('amharic-body-parts-app');
    const audioPlayer = appContainer.querySelector('#audio-player');
    const learnModeContainer = appContainer.querySelector('#learn-mode-container');
    const quizModeContainer = appContainer.querySelector('#quiz-mode-container');
    const modeLearnBtn = appContainer.querySelector('#mode-learn-btn');
    const modeQuizBtn = appContainer.querySelector('#mode-quiz-btn');
    const viewFrontBtn = appContainer.querySelector('#view-front-btn');
    const viewBackBtn = appContainer.querySelector('#view-back-btn');
    const vocabularyListContainer = appContainer.querySelector('#vocabulary-list-container');
    const allBodyMaps = appContainer.querySelectorAll('.body-map');
    
    // Display Panel Elements
    const displayPanel = appContainer.querySelector('#display-panel');
    const displayContent = appContainer.querySelector('#display-content');
    const displayImage = appContainer.querySelector('#display-image');
    const displayAmharic = appContainer.querySelector('#display-amharic');
    const displayEnglish = appContainer.querySelector('#display-english');
    const displayPhonetic = appContainer.querySelector('#display-phonetic');

    // Quiz Elements
    const quizIntro = appContainer.querySelector('#quiz-intro');
    const quizMain = appContainer.querySelector('#quiz-main');
    const quizResults = appContainer.querySelector('#quiz-results');
    const startQuizBtn = appContainer.querySelector('#start-quiz-btn');
    const quizQuestion = appContainer.querySelector('#quiz-question');
    const quizOptions = appContainer.querySelector('#quiz-options');
    const quizFeedback = appContainer.querySelector('#quiz-feedback');
    const nextQuestionBtn = appContainer.querySelector('#next-question-btn');
    const retakeQuizBtn = appContainer.querySelector('#retake-quiz-btn');

    // --- FUNCTIONS ---

    function playAudio(audioSrc) {
        if (audioSrc) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            audioPlayer.src = audioSrc;
            audioPlayer.play().catch(e => console.error("Audio playback failed:", e));
        }
    }

    function updateDisplay(item) {
        if (item) {
            currentItem = item;
            displayPanel.classList.add('content-visible');
            
            displayImage.src = item.imageSrc;
            displayImage.alt = item.english;
            displayAmharic.textContent = item.amharic;
            displayEnglish.textContent = item.english;
            displayPhonetic.textContent = `(${item.phonetic})`;
        } else {
            currentItem = null;
            displayPanel.classList.remove('content-visible');
        }
    }

    function highlightSvgPart(partId) {
        allBodyMaps.forEach(map => {
            map.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
            if (partId) {
                map.querySelectorAll(`[data-id="${partId}"]`).forEach(part => {
                    part.classList.add('highlighted');
                });
            }
        });
    }

    function handleItemInteraction(itemId) {
        const item = masterVocabulary.find(v => v.id === itemId);
        if (item) {
            updateDisplay(item);
            playAudio(item.audioSrc);
            highlightSvgPart(item.id);
        }
    }

    function renderVocabularyList(view) {
        const itemsForView = masterVocabulary.filter(item => item.category && (item.view === view || item.view === 'both'));
        const categories = [...new Set(itemsForView.map(item => item.category))];
        
        let html = '';
        categories.forEach(category => {
            const categoryId = `category-${category.replace(/\s+/g, '-')}`;
            html += `
                <div class="vocab-category">
                    <div class="vocab-category-header" role="button" tabindex="0" aria-expanded="false" aria-controls="${categoryId}-list">
                        <h2 id="${categoryId}">${category}</h2>
                        <span class="toggle-icon">&#9654;</span>
                    </div>
                    <ul class="vocab-list" id="${categoryId}-list">
            `;
            itemsForView.filter(item => item.category === category).forEach(item => {
                html += `
                    <li class="vocab-item-container">
                        <button class="vocab-btn" data-id="${item.id}">
                            <span class="amharic">${item.amharic}</span>
                            <span class="english">${item.english}</span>
                        </button>
                    </li>
                `;
            });
            html += `</ul></div>`;
        });
        vocabularyListContainer.innerHTML = html;
    }

    function switchView(view) {
        currentView = view;
        appContainer.querySelector('#svg-container-front').classList.toggle('hidden', view !== 'front');
        appContainer.querySelector('#svg-container-back').classList.toggle('hidden', view !== 'back');
        
        viewFrontBtn.classList.toggle('active', view === 'front');
        viewBackBtn.classList.toggle('active', view === 'back');
        viewFrontBtn.setAttribute('aria-pressed', view === 'front');
        viewBackBtn.setAttribute('aria-pressed', view === 'back');

        renderVocabularyList(view);
    }

    function switchMode(mode) {
        currentMode = mode;
        learnModeContainer.classList.toggle('active', mode === 'learn');
        quizModeContainer.classList.toggle('active', mode !== 'learn');
        appContainer.querySelector('#view-selector').classList.toggle('hidden', mode !== 'learn');

        modeLearnBtn.classList.toggle('active', mode === 'learn');
        modeQuizBtn.classList.toggle('active', mode !== 'learn');
        modeLearnBtn.setAttribute('aria-pressed', mode === 'learn');
        modeQuizBtn.setAttribute('aria-pressed', mode !== 'learn');

        if (mode === 'quiz') {
            resetQuiz();
        } else {
            updateDisplay(null);
            highlightSvgPart(null);
        }
    }

    // --- Quiz Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function startQuiz() {
        quizState.questions = shuffleArray([...masterVocabulary.filter(i => i.category)]);
        quizState.currentQuestionIndex = 0;
        quizState.score = 0;
        quizIntro.classList.add('hidden');
        quizResults.classList.add('hidden');
        quizMain.classList.remove('hidden');
        displayQuizQuestion();
    }

    function displayQuizQuestion() {
        quizFeedback.innerHTML = '&nbsp;';
        nextQuestionBtn.classList.add('hidden');
        const correctAnswer = quizState.questions[quizState.currentQuestionIndex];
        appContainer.querySelector('#question-current').textContent = quizState.currentQuestionIndex + 1;
        appContainer.querySelector('#question-total').textContent = quizState.questions.length;
        quizState.isAmharicQuestion = Math.random() < 0.5;
        quizQuestion.innerHTML = quizState.isAmharicQuestion 
            ? `What is the English word for "<span class="clickable-question" data-id="${correctAnswer.id}" title="Click to hear pronunciation">${correctAnswer.amharic}</span>"?`
            : `What is the Amharic word for "${correctAnswer.english}"?`;
        let options = [correctAnswer];
        let distractors = masterVocabulary.filter(item => item.id !== correctAnswer.id && item.category);
        shuffleArray(distractors);
        options.push(...distractors.slice(0, 3));
        shuffleArray(options);
        quizOptions.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.dataset.id = option.id;
            button.textContent = quizState.isAmharicQuestion ? option.english : option.amharic;
            button.addEventListener('click', handleAnswerSelection);
            quizOptions.appendChild(button);
        });
    }

    function handleAnswerSelection(e) {
        const selectedButton = e.target;
        const selectedId = selectedButton.dataset.id;
        const correctAnswer = quizState.questions[quizState.currentQuestionIndex];
        quizOptions.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
        if (selectedId === correctAnswer.id) {
            quizState.score++;
            selectedButton.classList.add('correct');
            quizFeedback.textContent = 'Correct!';
        } else {
            selectedButton.classList.add('incorrect');
            quizOptions.querySelector(`[data-id="${correctAnswer.id}"]`).classList.add('correct');
            quizFeedback.textContent = `Correct answer: ${quizState.isAmharicQuestion ? correctAnswer.english : correctAnswer.amharic}`;
        }
        nextQuestionBtn.classList.remove('hidden');
    }
    
    function showNextQuestion() {
        quizState.currentQuestionIndex++;
        if (quizState.currentQuestionIndex < quizState.questions.length) {
            displayQuizQuestion();
        } else {
            showQuizResults();
        }
    }

    function showQuizResults() {
        quizMain.classList.add('hidden');
        quizResults.classList.remove('hidden');
        appContainer.querySelector('#final-score').textContent = `${quizState.score} / ${quizState.questions.length}`;
        const percentage = (quizState.score / quizState.questions.length) * 100;
        let message = 'Keep practicing!';
        if (percentage >= 80) message = 'Excellent work!';
        else if (percentage >= 50) message = 'Good job!';
        appContainer.querySelector('#results-message').textContent = message;
    }

    function resetQuiz() {
        quizMain.classList.add('hidden');
        quizResults.classList.add('hidden');
        quizIntro.classList.remove('hidden');
    }

    // --- EVENT LISTENERS ---
    modeLearnBtn.addEventListener('click', () => switchMode('learn'));
    modeQuizBtn.addEventListener('click', () => switchMode('quiz'));
    viewFrontBtn.addEventListener('click', () => switchView('front'));
    viewBackBtn.addEventListener('click', () => switchView('back'));

    vocabularyListContainer.addEventListener('click', (e) => {
        const vocabButton = e.target.closest('.vocab-btn');
        if (vocabButton) {
            handleItemInteraction(vocabButton.dataset.id);
            return;
        }
        const header = e.target.closest('.vocab-category-header');
        if (header) {
            header.parentElement.classList.toggle('active');
        }
    });

    allBodyMaps.forEach(map => {
        map.addEventListener('click', (e) => {
            const part = e.target.closest('.clickable-area');
            if (part && part.dataset.id) {
                handleItemInteraction(part.dataset.id);
            }
        });
    });
    
    displayPanel.addEventListener('click', (e) => {
        if (e.target.closest('#display-image-container')) {
            if (currentItem && currentItem.audioSrc) {
                playAudio(currentItem.audioSrc);
            }
        }
    });
    
    quizQuestion.addEventListener('click', (e) => {
        const clickableWord = e.target.closest('.clickable-question');
        if (clickableWord && clickableWord.dataset.id) {
            const item = masterVocabulary.find(v => v.id === clickableWord.dataset.id);
            if (item) playAudio(item.audioSrc);
        }
    });

    startQuizBtn.addEventListener('click', startQuiz);
    nextQuestionBtn.addEventListener('click', showNextQuestion);
    retakeQuizBtn.addEventListener('click', resetQuiz);

    // --- INITIALIZATION ---
    function init() {
        updateDisplay(null); // Start by showing the placeholder
        switchMode('learn'); 
        switchView('front');
    }

    init();
});
