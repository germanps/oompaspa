import { OMPALIST } from './constants'

export const formatGender = gender => {
    switch (gender) {
        case 'F':
            return 'Woman'
        case 'M':
            return 'Man'
        default:
            return 'Oompa!'
    }
}

export const setLocalOompa = data => {
    localStorage.setItem(OMPALIST, JSON.stringify(data))
}
export const getLocalOompa = () => {
    const oompas = JSON.parse(localStorage.getItem(OMPALIST))
    if (oompas) {
        return oompas;
    }
}