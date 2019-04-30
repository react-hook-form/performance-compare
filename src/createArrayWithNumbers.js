export default function createArrayWithNumbers(length) {
    return Array.from({ length }, (_, k) => k + 1);
}
