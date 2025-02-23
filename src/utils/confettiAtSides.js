import JSConfetti from "js-confetti";

let confettiRunning = false;

/**
 * Trigger confetti on both sides of the screen.
 * @param {string[]} - The emojis to use for the confetti. default: ["🍂", "🍁"]
 * @returns {void}
 */
export default function confettiAtSides(emojis = ["🍂", "🍁"]) {
    if (confettiRunning) return;
    confettiRunning = true;

    const jsConfettiRef = new JSConfetti();
    // Trigger confetti on both sides
    jsConfettiRef.addConfetti({
        emojis: emojis,
        emojiSize: window.innerWidth >= 768 ? 80 : 140,
    });

    const confettiTimeout = setTimeout(() => {
        const canvas = document.getElementsByTagName("canvas");
        for (let i = 0; i < canvas.length; i++) {
            const child = canvas[i];
            if (child.id === "" && !child.ariaHidden) child.remove();
        }
        confettiRunning = false;
    }, 3500);
    return () => clearTimeout(confettiTimeout);
}
