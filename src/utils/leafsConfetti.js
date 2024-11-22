import JSConfetti from "js-confetti";

export const leafsConfetti = () => {
    const jsConfettiRef = new JSConfetti();
    // Trigger confetti on both sides
    jsConfettiRef.addConfetti({
        emojis: ["🍂", "🍁"],
        emojiSize: 80,
    });
};
