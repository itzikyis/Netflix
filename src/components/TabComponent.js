import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './Tabs_nav/TabDoor'
import TabDevices from './Tabs_nav/TabDevices'
import TabPrice from './Tabs_nav/TabPrice'
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'
import '../css/TabsNav.css'

class TabComponent extends Component {
    state = {
        tabIndex: 0
    }

    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor />
                            <p style={{ marginBottom: '1.875rem' }}><strong>No commitments<br />Cancel online at anytime</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p style={{ marginTop: '-5.3125rem' }}><strong>Watch anywhere</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrice />
                            <p><strong>Pick your price</strong></p>
                        </Tab>
                    </TabList>
                    {/* Tabs Content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default TabComponent;