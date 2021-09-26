import React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { TextField, Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography } from "@mui/material";

const FarmStructure = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="land_size"
        render={({ field }) => (
          <TextField
            id="land-size"
            label="Land Size"
            variant="outlined"
            placeholder="Enter Land size in Acrs"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="latitude"
        render={({ field }) => (
          <TextField
            id="latitude"
            label="Latitude"
            variant="outlined"
            placeholder="Enter latitude"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="longtude"
        render={({ field }) => (
          <TextField
            id="longtude"
            label="Longtude"
            variant="outlined"
            placeholder="Enter longtude"
            fullWidth
            margin="normal"
            {...field}
          />

        )}
      />
      
        
        <CardContent>
          
            <Grid
              item
              md={6}
              sm={6}
              sx={{
                display: 'flex',
                flexDirection: 'column'
              }}
              xs={12}
            >
              <Typography
                color="textPrimary"
                gutterBottom
                variant="h6"
              >
                Enterprise
              </Typography>
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Crop Farming"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    color="primary"
                    defaultChecked
                  />
                )}
                label="Livestock Farming"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Poultry Farming"
              />
              
            </Grid>
            
         
        </CardContent>
        
      
    </>
  );
};
export default FarmStructure;
