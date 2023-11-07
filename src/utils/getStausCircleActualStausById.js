

const getStausCircleActualStausById = (id) => {
    switch (id) {
        case 1:
            return '#71953E';
        case 2:
            return '#1A73E8';
        case 3:
            return '#FF553E';
        case 4:
            return '#71953E';
        default:
            return 'Invalid ID';
    }
};

export { getStausCircleActualStausById }