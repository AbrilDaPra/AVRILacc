// export function toCapital(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

export function toCapital(str) {
    if (typeof str === 'string' && str.length > 0) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        return str;
    }
}
