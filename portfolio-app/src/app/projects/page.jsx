import Link from 'next/link'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CustomCard from '@/components/CustomCard';

export default function BasicGrid() {

    return (
    <Grid container spacing={2} my={2}>
   
        <Grid item xs={12} md={4}> 
            <CustomCard title="First Column">
            First column is wider
            </CustomCard>
        </Grid>
        <Grid item xs={12} md={4}> 
            <CustomCard title="First Column">
            First column is wider
            </CustomCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
            <CustomCard title="Last Column">
            Last column is wider
            </CustomCard>
        </Grid>
    </Grid>
    );
}


