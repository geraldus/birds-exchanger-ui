import React from 'react';
import layoutContainer, {
    BootstrapLayoutProps,
    pageWrap,
    breadcrumb,
} from '@/containers/bootstrap/default-layout';
import { withRouter } from 'react-router';
import { AppModel, AppConfig } from '@/models/app';
import { connect } from 'dva';

type Props = BootstrapLayoutProps & {
    appConfig: AppConfig;
};

export class BootstrapLayout extends React.Component<Props> {
    render() {
        const { children, ...props } = this.props;
        const { childrenWrap, breadcrumbWrap } =
            props.location.pathname === '/'
                ? {
                      childrenWrap: children,
                      breadcrumbWrap: null,
                  }
                : {
                      childrenWrap: pageWrap({ children: children }),
                      breadcrumbWrap: breadcrumb({}),
                  };
        return layoutContainer({
            children: childrenWrap,
            breadcrumb: breadcrumbWrap,
            appVersion: this.props.appConfig.app.version,
            ...props,
        });
    }
}

const mapStateToProps = (state: { app: AppModel }) => {
    return {
        appConfig: state.app.config,
    };
};

const connectedLayout = connect(mapStateToProps)(BootstrapLayout);

export default withRouter(connectedLayout);
