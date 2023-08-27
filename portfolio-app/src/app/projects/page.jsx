import Link from 'next/link'

import * as React from 'react';
import Grid from '@mui/material/Grid';
import CustomCard from '@/components/CustomCard';

export default function BasicGrid() {

    return (
        <div>
            <h2>Projects</h2>
            <hr></hr>

            <Grid container spacing={2} my={2}>    
                <Grid item xs={12} md={4}> 
                    <Link href='https://github.com/Joan-Amudu/IOD-MOD5' target='_blank'>
                    <CustomCard title="Back-end Calculator">
                    A Back-end calculator with routes for four mathematical operations
                    </CustomCard>            
                    </Link>
                </Grid>
                <Grid item xs={12} md={4}> 
                    <Link href='https://github.com/Joan-Amudu/dashboard' target='_blank'>
                    <CustomCard title="Dashboard">
                    A static page to demonstrate HTML/CSS skills and how to create responsive websites
                    </CustomCard>            
                    </Link>
                </Grid>            
                <Grid item xs={12} md={4}> 
                    <Link href='https://github.com/Joan-Amudu/Peduns-Farm' target='_blank'>
                    <CustomCard title="Python/Django">
                    A full-stack e-commerce website developed using python/django framework.
                    
                    </CustomCard>            
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}


