import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";

import TableMasterData from "../../components/TableMasterData";
import { postApi } from "../../utils/apiCaller";
import {
	formatDate
} from "../../utils/helpers/DateFns";
import CreateUpdateRoleForm from "../../components/Role/CreateUpdateForm";
import Pagination from "../../components/shared/Pagination";
import Notification from "../../utils/helpers/Notification";
import Excel from "../../utils/helpers/Excel";

class RoleListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchInfo: {
				name: "",
			},
			page: 0,
			total: 100,
			columns: [
				{ name: "name", value: "Tên vai trò" },
				{ name: "created_at", value: "Ngày tạo" },
			],
			rows: [],
			isOpenCreateUpdateDialog: false,
			createUpdateData: {},
			errorFields: {}
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const { searchInfo } = this.state;

		// const resp = await postApi({
		// 	endpoint: "",
		// 	body: {}
		// });

		const tmp = [
			{ id: 1, name: "Quản lý hệ thống", created_at: "2019-01-10"},
			{ id: 2, name: "Quản lý nhân viên thu gom", created_at: "2019-01-10"},
			{ id: 3, name: "Quản lý saleman", created_at: "2019-01-10"},
			{ id: 4, name: "Nhân viên thu gom", created_at: "2019-01-10"},
			{ id: 5, name: "Saleman", created_at: "2019-01-10"},
		];
		const result = tmp.map(t => {
			return {
				...t,
				created_at: formatDate(t.created_at)
			}
		});
		
		this.setState({
			rows: result
		})
	}

	onChangeSearchInfo = e => {
		const { name, value } = e.target;
		this.setState(prevState => ({
			searchInfo: {
				...prevState.searchInfo,
				[name]: value
			}
		}))
	}

	onToggleCreateUpdateFormDialog = (isOpen) => {
		this.setState({
			isOpenCreateUpdateDialog: isOpen,
		});
		if(isOpen) {
			this.setState({
				createUpdateData: {},
			});
		}
	}

	onOpenUpdateForm = rowId => {
		this.onToggleCreateUpdateFormDialog(true);
		const row = this.state.rows.find(r => r.id === rowId);
		this.setState(prevState => ({
			createUpdateData: {
				...prevState.createUpdateData,
				...row
			}
		}));
	}

	onChangePage = page => {
		this.setState({
			page
		})
	}

	onChangeCreateUpdateData = e => {
		const { name, value } = e.target;
		this.setState(prevState => ({
			createUpdateData: {
				...prevState.createUpdateData,
				[name]: value
			}
		}));
	}

	onConfirmCreateUpdateForm = () => {
		this.onToggleCreateUpdateFormDialog(false);
		Notification({
			type: "success",
			message: "Thành công"
		});
	}

	onExport = () => {
		const { rows } = this.state;

		const header = [
			{ header: 'ID', key: 'stt'},
			{ header: 'Tên', key: 'name'},
			{ header: 'Tạo', key: 'created_at'}
		]
		const excelData = rows.map(row => {
			return [
				row.id,
				row.name,
				row.created_at
			]
		});

		Excel.export({ 
			header,
			data: excelData,
			name: "role_excel"
		});
	}

	render() {

		const {
			columns,
			rows,
			searchInfo,
			isOpenCreateUpdateDialog,
			createUpdateData,
			page,
			total,
			errorFields
		} = this.state;

		return (
			<Fragment>
				<Button onClick={() => this.onToggleCreateUpdateFormDialog(true)}>Thêm</Button>
				<Button onClick={this.onExport}>Export</Button>
				<TableMasterData
					columns={columns}
					rows={rows}
					searchInfo={searchInfo}
					onChangeSearchInfo={this.onChangeSearchInfo}
					onOpenUpdateForm={this.onOpenUpdateForm}
				/>
				<Pagination
					page={page}
					total={total}
					onChangePage={this.onChangePage}
				/>
				<CreateUpdateRoleForm
					open={isOpenCreateUpdateDialog}
					data={createUpdateData}
					errorFields={errorFields}
					maxWidth="sm"
					onChange={this.onChangeCreateUpdateData}
					onConfirm={this.onConfirmCreateUpdateForm}
					onClose={() => this.onToggleCreateUpdateFormDialog(false)}
				/>
			</Fragment>
		);
	}
}

export default RoleListContainer;