const useIntersection = (elements) => {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                elements.map((e) => {
                    return entry.target.classList.add(e);
                });
                entry.target.classList.remove("opacity-0");
                entry.target.classList.add("opacity-100");
            }
        });
    });
};

export default useIntersection;
