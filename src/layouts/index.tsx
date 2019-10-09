import React from 'react';
import BootstrapLayout from '@/components/bootstrap/default-layout';


const BasicLayout: React.FC = props => {
    return (
        <BootstrapLayout>
            {props.children}
        </BootstrapLayout>
    )
}

export default BasicLayout;
