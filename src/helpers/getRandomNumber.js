export const getRandomNumber = (firstNum, lastNum) => {
    const num = Math.floor(Math.random() * (lastNum - firstNum) + firstNum)

    return num
}
