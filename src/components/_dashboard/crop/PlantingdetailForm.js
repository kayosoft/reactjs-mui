import React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";


const PlantingDetail = () => {
  const { control } = useFormContext();
  // eslint-disable-next-line 
  const [value, setValue] = React.useState(new Date());
 // eslint-disable-next-line 
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Controller
        control={control}
        name="start"
        render={({ field }) => (
          <TextField
            id="start"
            label="Start IN (Days)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
     
      <Controller
        control={control}
        name="days_emerge"
        render={({ field }) => (
          <TextField
            id="days-emerge"
            label="Days to Emerge (Days)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="crop_spacing"
        render={({ field }) => (
          <TextField
            id="crop-spacing"
            label="Crop Spacing (Days)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="row_spacing"
        render={({ field }) => (
          <TextField
            id="row-spacing"
            label="Row Spacing (In)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="planting-depth"
        render={({ field }) => (
          <TextField
            id="planting-depth"
            label="Planting Depth (In)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="light_profile"
        render={({ field }) => (
          <TextField
            id="light-profile"
            label="Light Profile"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
export default PlantingDetail;
