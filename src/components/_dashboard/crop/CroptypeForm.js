import React from "react";
// material ui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Controller, useFormContext } from "react-hook-form";


const CropType = () => {
  const { control } = useFormContext();
  return (
    <>
    <Autocomplete

      disablePortal

      id="combo-box-demo"
      options={top100Films}
      fullWidth
      renderInput={(params) => <TextField {...params} 
      label="Crop Type" />}
    />
      

      <Controller
        control={control}
        name="variety"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Variety"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="botanical_name"
        render={({ field }) => (
          <TextField
            id="botanical"
            label="Botanical Name"
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
        name="crop_id"
        render={({ field }) => (
          <TextField
            id="crop-id"
            label="Crop Id"
            variant="outlined"
            
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="image"
        render={({ field }) => (
          <TextField
            id="crop-id"
            label="Image"
            variant="outlined"
            type="file"
            fullWidth
            multiple
            accept="image/*"
            margin="normal"
            {...field}
          />
        )}
      />
     
    </>
  );
};

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  
];
export default CropType;
