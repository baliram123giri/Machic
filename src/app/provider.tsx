"use client"
import { store } from '@/Redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'


export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </Provider>
}