import React from 'react';
import SideMenu from './SideMenu';
import { Grid} from 'semantic-ui-react'
import JobPostingList from '../pages/JobPostingList';

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width ={4}>
                        <SideMenu></SideMenu>
                    </Grid.Column>
                    <Grid.Column width = {12}>
                        <JobPostingList></JobPostingList>
                    </Grid.Column>
               </Grid.Row>
            </Grid>
  
        </div>
    )
}
