import currentLanguage from './currentLanguage'

const TextIncludes = ({ children, compare = "" }) => {
    if (currentLanguage.includes(compare)){
        return ( children );
    }
}

export default TextIncludes;