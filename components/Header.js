import React from 'react'
import {Menu} from 'semantic-ui-react';
import Link from 'next/link'

const Header = () => {
    return (
        <Menu style={{marginTop:'30px', borderRadius: '20px'}}>
               
               
                <Link href='/' >
            <Menu.Item style={{ fontWeight:'bold'}}>
                Blockfund 1.0              
            </Menu.Item>
            </Link>
            <Menu.Menu position="right">
            <Menu.Item>
                Campaigns
            </Menu.Item>
            <Menu.Item>
                +
            </Menu.Item>
            </Menu.Menu>

           
        </Menu>
    )
}

export default Header
