import React from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";

import {
	TableHeadCustom,
	TableBodyCustom,
	TableHeadSearchCustom
} from "./index.style";

const TableMasterData = props => {

	const {
		columns = [],
		rows = [],
		searchInfo = {},
		onChangeSearchInfo,
		onOpenUpdateForm
	} = props;

	let headRow = [];
	let searchRow = [];
	for(let i in columns) {
		const col = columns[i];
		const { name } = col;

		headRow.push(<TableCell key={name}>{col.value}</TableCell>);
		searchRow.push(
			<TableCell key={name}>
				<TextField
					placeholder="Tìm..."
					value={searchInfo[name]}
					name={name}
					onChange={e => onChangeSearchInfo(e)}
				/>
			</TableCell>
		);
	}

	const body = rows.map((row, index) => {
		const cell = columns.map(col => (
			<TableCell key={col.name}>{row[col.name]}</TableCell>
		))
		return (
			<TableRow
				key={index}
				onDoubleClick={() => onOpenUpdateForm(row.id)}
			>
				{cell}
			</TableRow>
		)
	});

	return (
		<Table>
			<TableHeadCustom>
				<TableRow>
					{headRow}
				</TableRow>
			</TableHeadCustom>
			<TableHeadSearchCustom>
				<TableRow>
					{searchRow}
				</TableRow>
			</TableHeadSearchCustom>
			<TableBodyCustom>
				{body}
			</TableBodyCustom>
		</Table>
	);
}

export default TableMasterData;