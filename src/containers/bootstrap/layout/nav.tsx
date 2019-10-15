import React, { ReactNode, ReactNodeArray } from 'react';
import { RouteComponentProps } from 'react-router';
import navbarLogo from '@/assets/logo/logo-header.png';
import { NavLink, Link } from 'react-router-dom';


export type GroupItemProps = {
    label?: ReactNode,
    route: string
}

const menuLeftGroupItem: React.FC<GroupItemProps> = (props) => {
    return (
        <li className="nav-item mx-2">
            <NavLink className="nav-link" to={props.route}>
                {props.label || props.children}
            </NavLink>
        </li>
    )
}

type Props = {
    left?: ReactNode | ReactNodeArray
}

const layoutNavContainer: React.FC<Props> = props => {
    return (
        <nav
            className="navbar sticky-top navbar-dark navbar-expand-lg"
            style={{ backgroundColor: 'black' }}
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
            <NavLink className="navbar-brand" to="/">
                <img src={navbarLogo} style={{ maxHeight: '20px' }} alt="OutBirds" />
            </NavLink>
            <div
                id="main-nav-menu"
                className="collapse navbar-collapse justify-content-between"
            >
                <ul className="navbar-nav">
                    {props.left}
                </ul>
                <span className="navbar-text d-flex d-lg-none">
                    <i className="fas fa-wallet align-self-center" />
                    <span className="d-block ml-2"> _[MsgBalance]</span>
                </span>
                <span className="navbar-text font-weight-bold d-flex d-lg-none wallet-balance-val">
                    #[cents2dblT cents]&nbsp;
                        <span className="font-weight-normal">#[currSign cur]</span>
                </span>
                <span className="navbar-text d-block d-lg-none">#[userName]</span>
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
                    <li id="#navWalletDropdownId" className="nav-item dropdown">
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
                                <span className="font-weight-normal">#[currSign cur]</span>
                            </a>
                        </div>
                    </li>
                    <li id="#navManageDropdownId" className="nav-item dropdown">
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
                            <span className="navbar-text d-flex px-3 text-uppercase">
                                <i className="fas fa-pen-nib align-self-center" />
                                <span className="d-block ml-2">_[MsgEditMenuTitle]</span>
                            </span>

                            <a className="dropdown-item" href="@{route}">
                                #[label]
                                </a>
                            <span className="navbar-text d-flex px-3 text-uppercase">
                                <i className="fas fa-donate align-self-center" />
                                <span className="d-block ml-2">_[MsgRequestsMenuTitle]</span>
                            </span>
                            <a className="dropdown-item" href="@{route}">
                                #[label]
                                </a>
                            <a className="dropdown-item" href="@{route}">
                                #[label]
                                </a>
                        </div>
                    </li>
                    <li id="#navUserDropdownId" className="nav-item dropdown mr-5">
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
    )
}

export default layoutNavContainer;
