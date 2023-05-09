import React from "react";

import { Typography } from "@mui/material";

const ToggleItem = ({ title, addToggle, onClickHandler, answer, number }) => {
  return (
    <>
      <Typography
        variant="h5"
        onClick={onClickHandler}
        sx={{ cursor: "pointer" }}
        mb={2}
        align="center"
      >
        {title}
      </Typography>
      {addToggle === number && <Typography>{answer}</Typography>}
    </>
  );
};

export default ToggleItem;
