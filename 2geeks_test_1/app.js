function generateRange(start, end, step) {
    const result = [];

    if (step === 0) {
        throw new Error("Step cannot be 0.");
    }

    if (start < end && step > 0) {

        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    } else if (start > end && step < 0) {

        for (let i = start; i >= end; i += step) {
            result.push(i);
        }
    } else {
        throw new Error("Step direction does not match start and end values.");
    }

    return result;
}


console.log(generateRange(1, 10, 1));   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(generateRange(10, 30, 5));  // [10, 15, 20, 25, 30]
console.log(generateRange(0, 100, 10)); // [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log(generateRange(0, -9, -1));  // [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(generateRange(5, -5, -1));  // [5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5]