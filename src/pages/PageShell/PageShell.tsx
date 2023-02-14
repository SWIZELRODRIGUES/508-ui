import React, { ReactElement } from 'react';
import Header from './Header';

type PageShellProps = {
    children: ReactElement;
}

function PageShell({ children }: PageShellProps) {
    return (
        <div >
            <Header />
            {children}
        </div>
    );
}

export default PageShell;
