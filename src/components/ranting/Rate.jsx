import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import s from "./Rating.module.css";

export default function Rate(movie) {
  
  const [value, setValue] = React.useState(5);

  return (
    <>
    
      <Box 
        className={s.box}
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

    </>
  );
}
