import React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";

const CropType = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="Crop Type"
            variant="outlined"
            placeholder="Search Crop Type"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Variety"
            variant="outlined"
            placeholder="Enter Crop Variety"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="nickName"
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="CropId"
            variant="outlined"
            placeholder="Enter CropId"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
export default CropType;
