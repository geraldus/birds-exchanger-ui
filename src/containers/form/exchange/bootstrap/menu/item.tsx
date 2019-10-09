import React, { ReactNode, SyntheticEvent } from 'react';


type Props = {
    id?: string,
    title?: string,
    label?: ReactNode,
    active?: boolean,
    className?: string,
    onClick?: (e: SyntheticEvent) => void
}

export const NavTab: React.FC<Props> = (props) => {
    const { id, title, label, className } = props
    const { active = false } = props
    const { onClick } = props
    const classNames = [
        'nav-link',
        ...(active ? [ 'active' ] : []),
        ...(className ? className : '').split(' ')
    ].join(' ')
    return (
        <li className="nav-item mx-1">
            <a
                id={id}
                className={classNames}
                href="#"
                title={title}
                onClick={onClick}
            >
                {label || props.children}
            </a>
        </li>
    )
}
