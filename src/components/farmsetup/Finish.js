import React from "react";

import { useFormContext } from "react-hook-form";
import { Box, Button} from "@mui/material";
const Finish = () => {
  // eslint-disable-next-line 
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
