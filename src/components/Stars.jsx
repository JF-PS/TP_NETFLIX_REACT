import React from "react";
import Rating from "@mui/material/Rating";

/**
 *
 * ## Usage
 * ```jsx
 * <Stars note={7} />
 * ```
 * #rendu : ★★★☆☆
 */

const Stars = (props) => {
  const { note } = props;
  return (
    <Rating
      sx={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      name="read-only"
      value={note / 2}
    />
  );
};

export default Stars;
