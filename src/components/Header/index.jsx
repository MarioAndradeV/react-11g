import React from 'react';

import AppButton from '../AppButton';
import AppThemeToggle from '../AppThemeToggle';

import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';

import './index.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="header shadow-sm">
                <div className="container d-flex justify-content-between">
                    <div className="logo-search d-flex justify-content-center align-items-center">
                        <HeaderLogo />
                        <HeaderSearch />
                    </div>

                    <div className="auth d-flex justify-content-center align-items-center">
                        <AppButton
                            text="Log in"
                            type="anchor"
                        />

                        <AppButton
                            className="btn-primary"
                            type="anchor"
                            text="Create account"
                        />

                        <AppThemeToggle />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
