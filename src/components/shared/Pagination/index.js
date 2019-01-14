import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import LastPageIcon from "@material-ui/icons/LastPage";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { ROWS_PER_PAGE } from "../../../constants/Variables";
import {
	PaginationWrapper,
	Block,
	Info,
	Navigation
} from "./index.style";

const Pagination = props => {

	const { page = 0, rowsPerPage = ROWS_PER_PAGE, total = 0, onChangePage, style } = props;
	const from = page * rowsPerPage + 1;
	const to = from + rowsPerPage - 1;
	const lastPage = (total % rowsPerPage !== 0) ? Math.floor(total / rowsPerPage) : (Math.floor(total / rowsPerPage) - 1);

	if(total <= 0) {
		return null;
	}

	return (
		<PaginationWrapper style={{...style}}>
			<Block>
				<Info>
					<span>{from}-{to < total ? to : total}</span>
					<span>Tổng { total }</span>
				</Info>
				<Navigation>
					<IconButton onClick={() => onChangePage(0)}>
						<FirstPageIcon fontSize="small" />
					</IconButton>
					<IconButton disabled={page === 0} onClick={() => onChangePage(page - 1)}>
						<KeyboardArrowLeftIcon fontSize="small" />
					</IconButton>
					{ page + 1 }
					<IconButton disabled={page === lastPage} onClick={() => onChangePage(page + 1)}>
						<KeyboardArrowRightIcon fontSize="small" />
					</IconButton>
					<IconButton onClick={() => onChangePage(lastPage)}>
						<LastPageIcon fontSize="small" />
					</IconButton>
				</Navigation>
			</Block>
		</PaginationWrapper>
	)
}

export default Pagination;