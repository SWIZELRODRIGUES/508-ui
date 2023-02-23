import React, { ReactElement } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type PageShellProps = {
    children: ReactElement;
}

function PageShell({ children }: PageShellProps) {
    return (
        <div >
            <Header />
            <Sidebar/>
            {children}
        </div>
    );
}

export default PageShell;
