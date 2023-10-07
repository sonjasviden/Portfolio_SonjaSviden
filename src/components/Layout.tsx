import useThemeContext from '../hooks/useThemeContext';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    const { isDarkMode } = useThemeContext()

    return (
        <div className={`layout ${isDarkMode ? 'dark' : 'light'}`}>
            {children}
        </div>
    );
}

export default Layout;
