import { createContext, useState } from "react";

export interface ContextUser {
    userState: string
    setUserState: (newState: string) => void
}

export const UserContext = createContext<ContextUser | null>(null)