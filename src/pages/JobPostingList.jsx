import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import JobPostingService from '../services/JobPostingService';

export default function JobPostingList() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingService = new JobPostingService();
        return () => {
            jobPostingService.getJobPostings().then((result) => setJobPostings(result.data.data));
        }
    }, [])
    
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Minimum maaş</Table.HeaderCell>
                        <Table.HeaderCell>Maksimum maaş</Table.HeaderCell>
                        <Table.HeaderCell>Boş İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobPostings.map((jobposting) => (
                    <Table.Row key= {jobPostings.id}>
                        <Table.Cell>
                            <Link to={`/jobPostings/${jobPostings.name}`}>
                                {jobPostings.name}
                            </Link>
                        </Table.Cell>
                        <Table.Cell>{jobPostings.description}</Table.Cell>
                        <Table.Cell>{jobPostings.minSalary}</Table.Cell>
                        <Table.Cell>{jobPostings.maxSalary}</Table.Cell>
                        <Table.Cell>{jobPostings.openPositionCount}</Table.Cell>
                        <Table.Cell>{jobPostings.jobTitles.titleName}</Table.Cell>
                        <Table.Cell>{jobPostings.employers.companyName}</Table.Cell>
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
