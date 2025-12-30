const bibleVerses = [
    { text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
    { text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness.", ref: "Isaiah 43:19" },
    { text: "May he give you the desire of your heart and make all your plans succeed.", ref: "Psalm 20:4" },
    { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5-6" },
    { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25" },
    { text: "His compassions never fail. They are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" },
    { text: "Don’t let anyone look down on you because you are young, but set an example for the believers.", ref: "1 Timothy 4:12" },
    { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
    { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
    { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord is with you.", ref: "Joshua 1:9" },
    { text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", ref: "2 Timothy 1:7" },
    { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
    { text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", ref: "Isaiah 40:31" },
    { text: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights.", ref: "James 1:17" },
    { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
    { text: "And surely I am with you always, to the very end of the age.", ref: "Matthew 28:20" },
    { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8" },
    { text: "Let all that you do be done in love.", ref: "1 Corinthians 16:14" },
    { text: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
    { text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!", ref: "2 Corinthians 5:17" },
    { text: "Rejoice always, pray continually, give thanks in all circumstances.", ref: "1 Thessalonians 5:16-18" },
    { text: "He has made everything beautiful in its time.", ref: "Ecclesiastes 3:11" },
    { text: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", ref: "Proverbs 18:10" },
    { text: "For with God nothing shall be impossible.", ref: "Luke 1:37" },
    { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
    { text: "I have told you these things, so that in me you may have peace.", ref: "John 16:33" },
    { text: "Above all else, guard your heart, for everything you do flows from it.", ref: "Proverbs 4:23" },
    { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
    { text: "Give thanks to the Lord, for he is good; his love endures forever.", ref: "1 Chronicles 16:34" },
    { text: "Wait for the Lord; be strong and take heart and wait for the Lord.", ref: "Psalm 27:14" },
    { text: "Peace I leave with you; my peace I give you.", ref: "John 14:27" },
    { text: "But seek first his kingdom and his righteousness.", ref: "Matthew 6:33" },
    { text: "Let the peace of Christ rule in your hearts.", ref: "Colossians 3:15" },
    { text: "Blessed are the pure in heart, for they will see God.", ref: "Matthew 5:8" },
    { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
    { text: "A joyful heart is good medicine.", ref: "Proverbs 17:22" },
    { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
    { text: "As for me and my household, we will serve the Lord.", ref: "Joshua 24:15" },
    { text: "Gracious words are a honeycomb, sweet to the soul and healing to the bones.", ref: "Proverbs 16:24" },
    { text: "Humble yourselves before the Lord, and he will lift you up.", ref: "James 4:10" },
    { text: "The Lord is faithful to all his promises and loving toward all he has made.", ref: "Psalm 145:13" },
    { text: "Draw near to God and He will draw near to you.", ref: "James 4:8" },
    { text: "Great is our Lord and mighty in power; his understanding has no limit.", ref: "Psalm 147:5" },
    { text: "Whatever you do, work at it with all your heart, as working for the Lord.", ref: "Colossians 3:23" },
    { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
    { text: "The path of the righteous is like the morning sun, shining ever brighter.", ref: "Proverbs 4:18" },
    { text: "Be kind and compassionate to one another, forgiving each other.", ref: "Ephesians 4:32" },
    { text: "You are the light of the world. A town built on a hill cannot be hidden.", ref: "Matthew 5:14" },
    { text: "My help comes from the Lord, the Maker of heaven and earth.", ref: "Psalm 121:2" },
    { text: "He restores my soul.", ref: "Psalm 23:3" },
    { text: "Love is patient, love is kind. It does not envy, it does not boast.", ref: "1 Corinthians 13:4" },
    { text: "Let your light shine before others.", ref: "Matthew 5:16" },
    { text: "For we live by faith, not by sight.", ref: "2 Corinthians 5:7" },
    { text: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.", ref: "Nahum 1:7" },
    { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
    { text: "In all your ways acknowledge him, and he will make your paths straight.", ref: "Proverbs 3:6" },
    { text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", ref: "Galatians 5:22" },
    { text: "He leads me beside quiet waters.", ref: "Psalm 23:2" },
    { text: "Do not worry about tomorrow, for tomorrow will worry about itself.", ref: "Matthew 6:34" },
    { text: "Search me, God, and know my heart; test me and know my anxious thoughts.", ref: "Psalm 139:23" },
    { text: "Your love, Lord, reaches to the heavens, your faithfulness to the skies.", ref: "Psalm 36:5" },
    { text: "You will keep in perfect peace those whose minds are steadfast.", ref: "Isaiah 26:3" },
    { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
    { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
    { text: "You are altogether beautiful, my darling; there is no flaw in you.", ref: "Song of Solomon 4:7" },
    { text: "The Lord will guide you always; he will satisfy your needs.", ref: "Isaiah 58:11" },
    { text: "Let us not become weary in doing good.", ref: "Galatians 6:9" },
    { text: "The grass withers and the flowers fall, but the word of our God endures forever.", ref: "Isaiah 40:8" },
    { text: "But I trust in your unfailing love; my heart rejoices in your salvation.", ref: "Psalm 13:5" },
    { text: "The Lord is gracious and compassionate, slow to anger and rich in love.", ref: "Psalm 145:8" },
    { text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", ref: "Psalm 51:10" },
    { text: "For your love is ever before me, and I walk continually in your truth.", ref: "Psalm 26:3" },
    { text: "You are my hiding place; you will protect me from trouble.", ref: "Psalm 32:7" },
    { text: "Commit your way to the Lord; trust in him and he will do this.", ref: "Psalm 37:5" },
    { text: "The Lord is my strength and my shield; my heart trusts in him.", ref: "Psalm 28:7" },
    { text: "Sing to the Lord a new song, for he has done marvelous things.", ref: "Psalm 98:1" },
    { text: "Satisfy us in the morning with your unfailing love.", ref: "Psalm 90:14" },
    { text: "The Lord sustains all who fall and raises up all who are bowed down.", ref: "Psalm 145:14" },
    { text: "Surely your goodness and love will follow me all the days of my life.", ref: "Psalm 23:6" },
    { text: "I have set the Lord always before me. Because he is at my right hand, I will not be shaken.", ref: "Psalm 16:8" },
    { text: "You broaden the path beneath me, so that my ankles do not give way.", ref: "Psalm 18:36" },
    { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
    { text: "Teach me your way, Lord, that I may rely on your faithfulness.", ref: "Psalm 86:11" },
    { text: "For you are my hope, Sovereign Lord, my confidence since my youth.", ref: "Psalm 71:5" },
    { text: "But as for me, I watch in hope for the Lord, I wait for God my Savior.", ref: "Micah 7:7" },
    { text: "He will cover you with his feathers, and under his wings you will find refuge.", ref: "Psalm 91:4" },
    { text: "The Lord is my strength and my song; he has given me victory.", ref: "Psalm 118:14" },
    { text: "Blessed are those who trust in the Lord and have made the Lord their hope.", ref: "Jeremiah 17:7" },
    { text: "So do not fear, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
    { text: "I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.", ref: "Psalm 16:8" },
    { text: "For the Lord gives wisdom; from his mouth come knowledge and understanding.", ref: "Proverbs 2:6" },
    { text: "Keep your lives free from the love of money and be content with what you have.", ref: "Hebrews 13:5" },
    { text: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
    { text: "The peace of God, which transcends all understanding, will guard your hearts.", ref: "Philippians 4:7" },
    { text: "He gives strength to the weary and increases the power of the weak.", ref: "Isaiah 40:29" },
    { text: "But the Lord stood at my side and gave me strength.", ref: "2 Timothy 4:17" },
    { text: "Light shines on the righteous and joy on the upright in heart.", ref: "Psalm 97:11" },
    { text: "You have turned my mourning into joyful dancing.", ref: "Psalm 30:11" },
    { text: "Therefore encourage one another and build each other up.", ref: "1 Thessalonians 5:11" },
    { text: "Be devoted to one another in love. Honor one another above yourselves.", ref: "Romans 12:10" }
];

const TARGET_DATE = '2025-12-30T18:55:00+05:30'; //''2025-12-31T23:59:00+00:00'';
const targetTime = new Date(TARGET_DATE).getTime();

let wakeLock = null;

// Function to request the Wake Lock
const requestWakeLock = async () => {
    try {
        // Check if the browser supports Wake Lock
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            
            // Listen for when the lock is released (e.g., if user switches tabs)
            wakeLock.addEventListener('release', () => {
                console.log('Victorian Telegraph: Wake Lock was released');
            });
            
            console.log('Victorian Telegraph: Screen is now LOCKED ON');
        }
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
};

// Handle visibility change (If user minimizes Chrome and comes back)
const handleVisibilityChange = async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        await requestWakeLock();
    }
};

document.addEventListener('visibilitychange', handleVisibilityChange);

// Request lock when they click the first button
document.getElementById('transition-trigger').addEventListener('click', requestWakeLock);

// Function to trigger the local push via the Service Worker
function sendLocalPush() {
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('🎩 Victorian Youth: 2026', {
                body: 'The New Dawn is 60 seconds away! Get your device ready.',
                icon: 'logo.png',
                vibrate: [200, 100, 200],
                tag: 'nye-reminder' // Prevents duplicate notifications
            });
        });
    }
}

// 1. Better Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('Telegraph Service Worker Active');
    });
}

// 2. Optimized Permission Request
window.addEventListener('load', () => {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                // We send a test via Service Worker to ensure background capability
                navigator.serviceWorker.ready.then(reg => {
                    reg.showNotification("🎩 Victorian Youth", {
                        body: "Telegraph Linked! You will be notified 1 min before the New Dawn.",
                        icon: "logo.png"
                    });
                });
            }
        });
    }
});

let notificationSent = false;

// 3. BACKGROUND-READY NOTIFICATION
function sendReadyNotification() {
    if (Notification.permission === "granted" && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            // This is the specific call that reaches the LOCK SCREEN
            registration.showNotification("🎩 Victorian Youth: 2026", {
                body: "The New Dawn is 60 seconds away! Get your device ready.",
                icon: "logo.png",
                badge: "logo.png",
                vibrate: [500, 110, 500], // Stronger vibration for pocket alert
                tag: "nye-reminder",
                requireInteraction: true, // Notification stays until user dismisses it
                renotify: true
            });
        });
    }
}

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetTime - now;
    const timerDisplay = document.getElementById('countdown-timer');

    // Trigger notification at the 1-minute mark
    if (distance <= 60000 && distance > 0 && !notificationSent) {
        sendReadyNotification();
        showModal("⚠️ GET READY! 1 Minute remains until the New Dawn!");
        notificationSent = true;
    }

    // Timer UI updates...
    if (distance <= 10000 && distance > 0) {
        timerDisplay.style.color = "var(--gold)";
        timerDisplay.style.fontSize = "3.5rem";
        timerDisplay.style.transition = "all 0.3s ease";
    }

    if (distance <= 0) {
        document.getElementById('countdown-wrapper').innerHTML = "<p class='timer-label'>THE DAWN IS HERE</p>";
        const triggerBtn = document.getElementById('transition-trigger');
        triggerBtn.style.background = "var(--gold)";
        triggerBtn.innerHTML = "✨ Enter 2026";
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const format = (num) => num.toString().padStart(2, '0');
    
    if (timerDisplay) {
        timerDisplay.innerText = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
    }
};

setInterval(updateTimer, 1000);
updateTimer();

function showModal(message) {
    const modal = document.getElementById('custom-alert');
    const msgPara = document.getElementById('modal-message');
    if (modal && msgPara) {
        msgPara.innerText = message;
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    const modal = document.getElementById('custom-alert');
    if (modal) modal.classList.add('hidden');
}

document.getElementById('transition-trigger').addEventListener('click', function() {
    const now = new Date().getTime();

    if (now < targetTime) {
        const distance = targetTime - now;
        const hrs = Math.floor(distance / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        const timeString = hrs > 0 ? `${hrs} hour(s) and ${mins} minute(s)` : `${mins} minute(s)`;
        
        showModal(`Patience, Victorian! The new dawn is not yet here. Please wait ${timeString} more.`);
        
        this.classList.add('locked-shake');
        setTimeout(() => this.classList.remove('locked-shake'), 500);
        return;
    }

    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('celebration-page').classList.remove('hidden');

    const random = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    document.getElementById('verse-display').innerText = `"${random.text}"`;
    document.getElementById('ref-display').innerText = `- ${random.ref}`;

    const startSleigh = () => {
        const sleigh = document.createElement('img');
        sleigh.src = 'deer.png'; // Ensure hdeer.png is in your folder
        sleigh.className = 'sleigh-animation';
        const randomTop = Math.floor(Math.random() * 30) + 10;
        sleigh.style.top = `${randomTop}%`;
        document.body.appendChild(sleigh);
        setTimeout(() => sleigh.remove(), 12000);
    };
    startSleigh();
    setInterval(startSleigh, 15000);

    launchCelebrationFX();
});

function launchCelebrationFX() {
    const crackerColors = ['#ffcc33', '#ffae42', '#ffffff', '#ff4500'];
    
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: crackerColors,
        shapes: ['circle', 'star'],
        scalar: 0.8,
        ticks: 250,
        gravity: 1.2
    });

    const end = Date.now() + 10 * 1000;
    (function frame() {
        confetti({
            particleCount: 1,
            startVelocity: 0,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
            colors: ['#ffffff'],
            shapes: ['circle'],
            scalar: 0.5,
            gravity: 0.3,
            drift: Math.sin(Date.now() / 1000)
        });

        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}
