// Try & Catch

try {
    const a = 19;
    const b = 0;
    if (b === 0) {
        throw Error("B cannot be equal to 0")
    }

    console.log(a / b)
} catch (error) {
    console.log(error);
}