import React, { useEffect, useState } from "react";

// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../components/Page";
import {
  Crops,
  AppCurrentVisits,
  AppWebsiteVisits,
  EarningCard,
  PopularCard,
  TotalOrderLineChartCard,
  TotalIncomeDarkCard,
  TotalIncomeLightCard,
  TotalGrowthBarChart,
} from "../components/_dashboard/app";
import { gridSpacing } from '../redux/constant';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
      setLoading(false);
  }, []);
  return (
    <Page title="Dashboard | Tunzi Farm">
       <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Page>
  );
}
