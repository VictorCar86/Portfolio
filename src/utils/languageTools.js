export const currentLanguage = navigator.language || "en-US";

/**
 * Checks if the current language matches the given language in any of the entries.
 * @param {...[string, string]} entries - Entries to check, where the first element is
 * the value to return if the language matches, and the second element is the language
 * to match. Sample: ["Hello World!", "en"]
 * @returns {string | undefined} The first element of the first matching entry, or
 * undefined if no entry matches.
 */
export const CheckLanguage = (...entries) => {
    return entries.find(([, lang]) => currentLanguage.includes(lang))?.[0];
};

/**
 * Return the given children if the current language matches the given language.
 * Otherwise, return null.
 * @param {{ children: *, lang: string }} props - The props object.
 * @param {*} props.children - The children to return if the language matches.
 * @param {string} props.lang - The language to match.
 * @returns {*} The children if the language matches, otherwise null.
 */
export const GetByLanguage = ({ children = null, lang = "" }) => {
    return CheckLanguage([children, lang]);
};
