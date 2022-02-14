declare function createLoader(successMessage: string, failedMessage: string, animFrames: string[]);

declare const defaultFramesNoText: string[]
declare const defaultFrames: string[]

export default {
    createLoader,
    defaultFrames,
    defaultFramesNoText
}