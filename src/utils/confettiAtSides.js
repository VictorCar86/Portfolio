import JSConfetti from "js-confetti";

/**
 * Trigger confetti on both sides of the screen.
 * @param {string[]} [emojis=["🍂", "🍁"]] - The emojis to use for the confetti.
 * @returns {void}
 */
export default function confettiAtSides(emojis = ["🍂", "🍁"]) {
    const jsConfettiRef = new JSConfetti();
    // Trigger confetti on both sides
    jsConfettiRef.addConfetti({
        emojis: emojis,
        emojiSize: window.innerWidth >= 768 ? 80 : 140,
    });
}
