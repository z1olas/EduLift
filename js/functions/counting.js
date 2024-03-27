export const countUp = (number) => {
    const num = Number(number.textContent);
    const time = 5000;
    const interval = time / num;

    for(let i = 0; i <= num; i++) {
        ((index) => {
            setTimeout(() => {
                number.innerHTML = i;
            }, interval * index);
        })(i);
    }

}