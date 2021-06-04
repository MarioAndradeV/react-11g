import React from 'react';

import AppCard from './AppCard';

class SideNavRight extends React.Component {
    render() {
        return (
            <nav className="col">
                <AppCard>
                    <h5 className="card-title">Listings</h5>
                </AppCard>
            </nav>
        )
    }
}

export default SideNavRight;