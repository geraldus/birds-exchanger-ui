import React from 'react';
import { RouteComponentProps } from 'react-router';
import navbarLogo from '@/assets/logo/logo-header.png';
import { NavLink } from 'react-router-dom';


export const pageWrap: React.FC = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export interface BootstrapLayoutProps extends RouteComponentProps {
    appVersion?: string
}

const layoutContainer: React.FC<BootstrapLayoutProps> = (props) => {
    return (
        <div>
            <nav
                className="navbar sticky-top navbar-dark navbar-expand-lg"
                style={{ backgroundColor: 'balck' }}
            >
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#main-nav-menu"
                    aria-controls="main-nav-menu"
                    aria-expanded="false"
                    aria-label="Показать меню"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <NavLink
                    className="navbar-brand"
                    to="/"
                >
                    <img
                        src={navbarLogo}
                        style={{ maxHeight: '20px' }}
                        alt="OutBirds"
                    />
                </NavLink>
                <div
                    id="main-nav-menu"
                    className="collapse navbar-collapse justify-content-between"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="@{route}">
                                #[label]
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text d-flex d-lg-none">
                        <i className="fas fa-wallet align-self-center" />
                        <span className="d-block ml-2"> _[MsgBalance]</span>
                    </span>
                    <span
                        className="navbar-text font-weight-bold d-flex d-lg-none wallet-balance-val"
                    >
                        #[cents2dblT cents]&nbsp;
                        <span className="font-weight-normal">
                            #[currSign cur]
                        </span>
                    </span>
                    <span className="navbar-text d-block d-lg-none">
                        #[userName]
                    </span>
                    <ul className="navbar-nav d-flex d-lg-none">
                        <li className="nav-item">
                            <a className="nav-link" href="@{route}">
                                #[label]
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="@{route}">
                                #[label]
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex">
                        <li
                            id="#navWalletDropdownId"
                            className="nav-item dropdown"
                        >
                            <a
                                id="#navWalletDropdownId-toggle"
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                <i className="fas fa-wallet" />
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="#navWalletDropdownId-toggle"
                            >
                                <a
                                    className="dropdown-item font-weight-bold wallet-balance-val"
                                    href="#"
                                >
                                    #[cents2dblT cents]&nbsp;
                                    <span className="font-weight-normal">
                                        #[currSign cur]
                                    </span>
                                </a>
                            </div>
                        </li>
                        <li
                            id="#navManageDropdownId"
                            className="nav-item dropdown"
                        >
                            <a
                                id="#navManageDropdownId-toggle"
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                _[MsgManage]
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="#navManageDropdownId-toggle"
                            >
                                <span
                                    className="navbar-text d-flex px-3 text-uppercase"
                                >
                                    <i className="fas fa-pen-nib align-self-center" />
                                    <span className="d-block ml-2">
                                        _[MsgEditMenuTitle]
                                    </span>
                                </span>

                                <a className="dropdown-item" href="@{route}">
                                    #[label]
                                </a>
                                <span
                                    className="navbar-text d-flex px-3 text-uppercase"
                                >
                                    <i className="fas fa-donate align-self-center" />
                                    <span className="d-block ml-2">
                                        _[MsgRequestsMenuTitle]
                                    </span>
                                </span>
                                <a className="dropdown-item" href="@{route}">
                                    #[label]
                                </a>
                                <a className="dropdown-item" href="@{route}">
                                    #[label]
                                </a>
                            </div>
                        </li>
                        <li
                            id="#navUserDropdownId"
                            className="nav-item dropdown mr-5"
                        >
                            <a
                                id="#navUserDropdownId-toggle"
                                className="nav-link dropdown-toggle"
                                data-toggle="dropdown"
                                href="#"
                                role="button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                #[userName]
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="#navUserDropdownId-toggle"
                            >
                                <a className="dropdown-item" href="@{route}">
                                    #[label]
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="@{fst bc}">#[snd bc]</a>
                            </li>
                            <li className="breadcrumb-item active">
                                #[title]
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 col-lg-6 mx-auto">
                        <div className="alert alert-warning" id="message">
                            #[msg]
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
            <footer className="footer mt-2 pt-3 container-fluid">
                <div className="row mb-2">
                    <div className="col-sm text-center">
                        <p className="text-muted mx-2">
                            _[MsgSupport]: #
                        </p>
                    </div>
                    <div className="col-sm text-center">
                        <a
                            className="mx-2"
                            href="mailto:#{supportEmail}"
                            title="_{MsgSendEmail}"
                        >
                            <i className="far fa-envelope-open" />
                            #[supportEmail]
                        </a>
                    </div>
                    <div className="col-sm text-center">
                        <a
                            className="mx-2"
                            href="https://t.me/outb_support"
                            title="_{MsgToTelegramChat}"
                        >
                            <i className="far fa-paper-plane" />
                            @outb_support
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col pt-3"
                        style={{ background: '#e9ecef' }}
                    >
                        <p className="text-center">
                            _[MsgCurrencyExchangeService] «OutBirds»
                            <small className="text-muted">
                                v{props.appVersion}
                                <small className="text-lowercase">
                                    _[MsgVerPublicBeta]
                                </small>
                            </small>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default layoutContainer
