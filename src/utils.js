export const adaptJSONtype = (type) => {
    switch (type) {
        case 'adventures':
            return 'приключения';
        case 'horror':
                return 'ужасы';
                case 'mystic':
                    return 'мистика';
                case 'detective':
                    return 'детектив';
                case 'scifi':
                    return 'scifi';
  }
}

export const adaptJSONlevel = (level) => {
    switch (level) {
        case 'hard':
            return 'сложный';
        case 'middle':
            return 'средний';
        case 'easy':
            return 'легкий';
    }
}