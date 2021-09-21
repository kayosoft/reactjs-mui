import React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";
const Finish = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="days_to_maturity"
        render={({ field }) => (
          <TextField
            id="days-maturity"
            label="Days to Maturity (Days)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="harvest"
        render={({ field }) => (
          <TextField
            id="harvest-window"
            label="Harvest Window"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="harvest_unit"
        render={({ field }) => (
          <TextField
            id="harvest-unit"
            label="Harvest Unit (Kg)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="estimated_revenue"
        render={({ field }) => (
          <TextField
            id="estimated-revenue"
            label="Estimated Revenue per Unit (Shs)"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="estimated_unit"
        render={({ field }) => (
          <TextField
            id="estimated-unit"
            label="Estimated Yield per Acre"
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
export default Finish;
