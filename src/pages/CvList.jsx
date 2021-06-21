import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import CvService from '../services/CvService';

export default function CvList() {
    const [cvs, setCvs] = useState([]);
    useEffect(() => {
        let cvService = new CvService();
        return () => {
            cvService.getJobPostings().then((result) => setCvs(result.data.data));
        }
    }, [])
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>TCKN</Table.HeaderCell>
                        <Table.HeaderCell>Okul Adı</Table.HeaderCell>
                        <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
                        <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Deneyim Süresi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {cvs.map((cv) => (
                        <Table.Row key={cvs.id}>
                            <Table.Cell>
                                <Link to={`/cvs/${cvs.candidates.firstName}`}>
                                    {cvs.candidates.firstName}
                                </Link>
                            </Table.Cell>
                            <Table.Cell>{cvs.candidates.lastName}</Table.Cell>
                            <Table.Cell>{cvs.candidates.identityNumber}</Table.Cell>
                            <Table.Cell>{cvs.educations.schoolName}</Table.Cell>
                            <Table.Cell>{cvs.educations.facultyName}</Table.Cell>
                            <Table.Cell>{cvs.educations.graduateDate}</Table.Cell>
                            <Table.Cell>{cvs.experiences.experienceYear}</Table.Cell>
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
