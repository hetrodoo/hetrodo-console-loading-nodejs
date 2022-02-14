const defaultFrames = [
    "[<->---------] Loading...",
    "[-<->--------] Loading...",
    "[--<->-------] Loading...",
    "[---<->------] Loading...",
    "[----<->-----] Loading...",
    "[-----<->----] Loading...",
    "[------<->---] Loading...",
    "[-------<->--] Loading...",
    "[--------<->-] Loading...",
    "[---------<->] Loading...",
    "[--------<->-] Loading...",
    "[-------<->--] Loading...",
    "[------<->---] Loading...",
    "[-----<->----] Loading...",
    "[----<->-----] Loading...",
    "[---<->------] Loading...",
    "[--<->-------] Loading...",
    "[-<->--------] Loading..."
];
const defaultFramesNoText = [
    "[<->---------]",
    "[-<->--------]",
    "[--<->-------]",
    "[---<->------]",
    "[----<->-----]",
    "[-----<->----]",
    "[------<->---]",
    "[-------<->--]",
    "[--------<->-]",
    "[---------<->]",
    "[--------<->-]",
    "[-------<->--]",
    "[------<->---]",
    "[-----<->----]",
    "[----<->-----]",
    "[---<->------]",
    "[--<->-------]",
    "[-<->--------]"
];

function createLoader(successMessage, failedMessage, animFrames = defaultFrames) {
    let index = 0;

    const write = (value, clear = false, interval = null) => {
        interval && clearInterval(interval);
        clear && process.stdout.clearLine(0);
        process.stdout.write(`\r${value}`);
    }

    const animLoop = setInterval(() => {
        write(animFrames[index])
        index = ((index + 1) % animFrames.length);
    }, 64);

    const markAsFailed = () => write(failedMessage, true, animLoop);
    const markAsSuccess = () => write(successMessage, true, animLoop);
    const attach = (prom) => prom.then(markAsSuccess).catch(markAsFailed);

    return {
        markAsSuccess, markAsFailed, attach
    }
}

module.exports = {
    createLoader, defaultFrames, defaultFramesNoText
}