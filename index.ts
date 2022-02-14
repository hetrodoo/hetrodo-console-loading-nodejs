declare interface loader<T> {
    markAsSuccess: () => void,
    markAsFailed: () => void,
    attach: (prom: Promise<T>) => void
}

declare function createLoader<T>(successMessage: string, failedMessage: string, animFrames?: string[]): loader<T>;

declare const defaultFramesNoText: string[]
declare const defaultFrames: string[]

export default {
    createLoader,
    defaultFrames,
    defaultFramesNoText
}