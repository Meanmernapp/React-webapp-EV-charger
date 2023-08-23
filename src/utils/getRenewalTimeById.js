

const getRenewalTimeById = (id) => {
    switch (id) {
        case 0:
            return '10:00';
        case 1:
            return '11:00';
        case 2:
            return '12:00';
        case 3:
            return '13:00';
        case 4:
            return 'walk in';
        default:
            return 'Invalid ID';
    }
};

export {getRenewalTimeById}