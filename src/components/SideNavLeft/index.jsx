import React from 'react';

import MenuItem from './MenuItem';

import styles from './sideNavLeft.module.css';

class Sidenav extends React.Component {
    render() {
        return (
            <nav className={`col ${styles.sideNavLeft}`}>
                <ul className="d-flex flex-column">
                    <MenuItem
                        icon="🏠"
                        text="Home"
                    />

                    <MenuItem
                        icon="🏠"
                        text="Home"
                    />

                    <MenuItem
                        icon="🏠"
                        text="Home"
                    />
                </ul>
            </nav>
        )
    }
}

export default Sidenav