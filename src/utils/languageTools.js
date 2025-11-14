import useLanguageStore from "../store/languageStore";

export const checkLanguage = (...entries) => {
    const current = useLanguageStore.getState().lang;
    return entries.find(([, lang]) => current === lang)?.[0];
};

export const GetByLanguage = ({ children = null, lang = "" }) => {
    const current = useLanguageStore((s) => s.lang);
    return current === lang ? children : null;
};
