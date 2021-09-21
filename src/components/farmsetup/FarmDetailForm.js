import React from "react";
import { useState } from 'react';

import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@material-ui/core";

const districts = [
  {
    value: 'wakiso',
    label: 'Wakiso'
  },
  {
    value: 'mukono',
    label: 'Mukono'
  },
  {
    value: 'Luweero',
    label: 'Luweero'
  }
];
const countries = [
  {
    value: 'uganda',
    label: 'Uganda'
  },
  
];

const FarmDetail = (props) => {
  const { control } = useFormContext();
  
  
  
    const [values, setValues] = useState({
      firstName: 'John',
      lastName: 'Doe',
      email: 'jdoe@tunzi.io',
      phone: '0777000000',
      state: 'Alabama',
      country: 'Uganda'
    });
  
    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };
  return (
    <>
      <Controller
        control={control}
        name="farm_name"
        render={({ field }) => (
          <TextField
            id="farm_name"
            label="Farm Name"
            variant="outlined"
            placeholder=""
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Address"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="Address"
            variant="outlined"
            placeholder=""
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
        <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
                fullWidth
                margin="normal"
            {...field}
                label="Select Country"
                
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.country}
                variant="outlined"
              >
                {countries.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
               )}
               />
<Controller
        control={control}
        name="district"
        render={({ field }) => (
            <TextField
                fullWidth
                margin="normal"
            {...field}
                label="Select District"
                
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.district}
                variant="outlined"
              >
                {districts.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
              )}
              />

      
    </>
  );
};
export default FarmDetail;
