import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default function Navi() {
    return (
        <div>
            <Menu pointing secondary>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'

                    />
                    <Menu.Item
                        name='friends'

                    />
                    <Menu.Menu position = "right">
                        <Dropdown item text ="Lisanlar">
                        <Dropdown.Menu>
                            <Dropdown.Item>Türkçe</Dropdown.Item>
                            <Dropdown.Item>Arapça</Dropdown.Item>
                            <Dropdown.Item>İngilizce</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Menu>
                        <Menu.Item
                            name='logout'

                        />
                    </Menu.Menu>


                </Container>
            </Menu>

        </div>
    )
    
}

