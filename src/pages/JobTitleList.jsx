import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import JobTitleService from '../services/JobTitleService';
export default function JobTitleList() {

    const [jobTitles, setJobTitles] = useState([]);
    useEffect(() => {
        let jobTitleService = new JobTitleService();
        return () => {
            jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
        }
    }, [])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobTitles.map((jobTitle) => (
                    <Table.Row key= {jobTitle.titleId}>
                        <Table.Cell>
                            <Link to={`/jobTitles/${jobTitle.titleName}`}>
                                {jobTitle.titleName}
                            </Link>
                        </Table.Cell>
                        <Table.Cell>{jobTitle.details}</Table.Cell>
                        </Table.Row>
                                       ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
