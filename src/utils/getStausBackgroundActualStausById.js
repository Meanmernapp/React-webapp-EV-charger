
const getStausBackgroundActualStausById = (id) => {
    switch (id) {
        case 1:
            return '#CEDDB9';
        case 2:
            return '#BDDFFF';
        case 3:
            return '#EDC9C9';
        case 4:
            return '#CEDDB9';
        default:
            return 'Invalid ID';
    }
};

export { getStausBackgroundActualStausById }