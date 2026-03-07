import { createContext } from "react"

export const CounterContext = createContext(0)

// Context API
    // -> Used for global state without prop drilling.
    // -> Ex: Theme, Auth, user info, language settings, app wide state.