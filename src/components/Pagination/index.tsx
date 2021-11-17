import React, { memo } from "react";
import ReactPaginate from "react-paginate";

import useStyles from "./style";

interface IProps {
  pages: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({ pages, onChangePage }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ReactPaginate
        pageCount={pages}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => onChangePage(selected + 1)}
      />
    </div>
  );
};

export default memo(Pagination);
