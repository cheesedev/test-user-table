export const required = (value) => {
    if (!value) {
        return 'Пожалуйста, заполните поле';
    }
    return null;
};

export const phone = (value) => {
    const phoneRegex = /^(?:\+7|8)\d{10}$/;
    if (!phoneRegex.test(value)) {
        return 'Проверьте правильность введённого номера';
    }
    return null;
};

export const date = (value) => {
    const parsedDate = new Date(value);
    if (isNaN(parsedDate.getTime())) {
        return 'Неверный формат даты';
    }
    return null;
};

export const email = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return 'Проверьте правильность введённого адреса';
    }
    return null;
};
