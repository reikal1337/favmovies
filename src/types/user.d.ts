type ContextState = {
    state: string,
    setState: (newState: string) => void
} | {}