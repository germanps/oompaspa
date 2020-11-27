export const GetOompaBySearch = (page = '', searching = '') => {
    const result = page.filter(element => {
        return (
            (element["first_name"].toLowerCase().includes(searching)) ||
            (element["last_name"]).toLowerCase().includes(searching)) ||
            ((element["profession"].toLowerCase().includes(searching)))
    })
    return (result)
} 