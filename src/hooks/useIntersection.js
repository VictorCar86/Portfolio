const useIntersection = (elements) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            if (entry.isIntersecting){
                elements.map(e => {
                    return entry.target.classList.add(e)
                })
                entry.target.classList.remove("opacity-0")
                entry.target.classList.add("opacity-100")
            }
        })
    })
    return observer
}

export default useIntersection