const bibleVerses = [
            { text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
            { text: "See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness.", ref: "Isaiah 43:19" },
            { text: "May he give you the desire of your heart and make all your plans succeed.", ref: "Psalm 20:4" },
            { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5-6" },
            { text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", ref: "Numbers 6:24-25" },
            { text: "His compassions never fail. They are new every morning; great is your faithfulness.", ref: "Lamentations 3:22-23" }
        ];
document.getElementById('transition-trigger').addEventListener('click', function() {
    document.getElementById('start-page').classList.add('hidden');
    const celebPage = document.getElementById('celebration-page');
    celebPage.classList.remove('hidden');

    const random = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    document.getElementById('verse-display').innerText = `"${random.text}"`;
    document.getElementById('ref-display').innerText = `- ${random.ref}`;

    // VIBRANT NEON CONFETTI
    const end = Date.now() + 5 * 1000;
    const colors = ['#8a2be2', '#00d4ff', '#ffcc33', '#ffffff', '#ff00ff'];

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
});