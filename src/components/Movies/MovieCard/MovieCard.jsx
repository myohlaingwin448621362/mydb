import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const MovieCard = (props) => {
  const getCatName = () => {
    const namecat = props.cate.map((x) => {
      const naming = props.categorylist.filter((cat) => cat.id === x);
      return naming[0].name;
    });

    const nameStr = namecat.join(", ");
    return nameStr;
  };

  return (
    <Card>
      <CardContent>
        <img src={props.image} style={{ width: "100%" }} />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {getCatName()}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MovieCard;
