import styled from "styled-components";
import TableHead from "@material-ui/core/TableHead";
import { TableBody } from "@material-ui/core";

export const TableHeadCustom = styled(TableHead)`
	&& {
		tr {
			background-color: #2A3F52;
			height: 36px;
			th {
				color: #fff !important;
			}
		}
	}
`;

export const TableHeadSearchCustom = styled(TableHead)`
	&& {
		tr {
			height: 45px;
			th {
				border: 1px solid #ddd;
			}
		}
	}
`;

export const TableBodyCustom = styled(TableBody)`
	&& {
		tr {
			height: 36px;
			&:nth-child(odd) {
				background-color: #F1F2F3;
			}
			&:nth-child(even) {
				background-color: #fff;
			}
			&:hover {
				background-color: #e7f1ef;
			}
			td {
				border: 1px solid #ddd;
			}
		}
	}
`;