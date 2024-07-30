import { useEffect, useState } from 'react'

const Dark = () => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])
    return {
        theme,
        toggleTheme
    }
};
export default Dark ;