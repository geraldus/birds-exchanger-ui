import React from 'react';
import layoutContainer, {
    BootstrapLayoutProps, pageWrap
} from '@/containers/bootstrap/default-layout';
import { withRouter } from 'react-router';


type Props = BootstrapLayoutProps

export class BootstrapLayout extends React.Component<BootstrapLayoutProps> {
    render() {
        const { children, ...props } = this.props
        const childrenWrap = props.location.pathname === '/'
            ? children
            : pageWrap({ children: children })
        return layoutContainer({ children: childrenWrap, ...props })
    }
}

export default withRouter(BootstrapLayout)
