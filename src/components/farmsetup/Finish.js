import React from "react";

import { Controller, useFormContext } from "react-hook-form";
import { TextField, Box, Button} from "@mui/material";
const Finish = () => {
  const { control } = useFormContext();
  return (
    <>
      <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-center',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Add Farm Map
          </Button>
        </Box>
    </>
  );
};
export default Finish;
