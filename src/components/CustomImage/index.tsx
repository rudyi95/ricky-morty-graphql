import React, { memo } from "react";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

import DefaultImage from "../../assets/emptyImage.png";

import useStyles from "./style";

interface IProps {
  src?: string;
  alt: string;
  loading?: boolean;
  className?: string;
}

const CustomImage: React.FC<IProps> = ({ src, alt, loading, className }) => {
  const classes = useStyles();

  if (loading) return <CircularProgress />;

  return (
    <div className={classNames(classes.root, className)}>
      <LazyLoadImage
        src={src || DefaultImage}
        alt={alt}
        className={classes.image}
      />
    </div>
  );
};

export default memo(CustomImage, (prev: IProps, next: IProps) => {
  return prev.src === next.src;
});
