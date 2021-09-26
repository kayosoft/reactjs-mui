import React from 'react';

// material-ui
import { Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// project imports
import { gridSpacing } from '../../../../redux/constant';

//-----------------------|| SKELETON TOTAL GROWTH BAR CHART ||-----------------------//

const TotalGrowthBarChart = () => {
    return (
        <Card>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item xs zeroMinWidth>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Skeleton variant="text" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Skeleton variant="rect" height={20} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Skeleton variant="rect" height={50} width={80} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Skeleton variant="rect" height={530} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TotalGrowthBarChart;
