declare interface loader<T> {
    markAsSuccess: () => void,
    markAsFailed: () => void,
    attach: (prom: Promise<T>) => void
}

export declare function createLoader<T>(successMessage: string, failedMessage: string, animFrames?: string[]): loader<T>;

export declare const defaultFramesNoText: string[]
export declare const defaultFrames: string[]