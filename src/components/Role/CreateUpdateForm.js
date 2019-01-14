import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import has from "lodash/has";

const CreateUpdateRoleForm = props => {

	const {
		open = false,
		maxWidth = "md",
		data,
		errorFields,
		onChange,
		onClose,
		onConfirm
	} = props;

	const {
		id,
		name = ""
	} = data;

	return (
		<Dialog
			fullWidth={true}
			maxWidth={maxWidth}
			open={open}
			onClose={onClose}
			aria-labelledby="max-width-dialog-title"
		>
			<DialogTitle id="max-width-dialog-title">{id ? "Cập nhật" : "Thêm"} vai trò</DialogTitle>
			<DialogContent>
				<Grid container spacing={8}>
					<Grid item xs={12}>
						<FormControl error={has(errorFields, "name")} fullWidth>
							<TextField
								required
								label="Tên vai trò"
								value={name}
								onChange={onChange}
								name="name"
								error={has(errorFields, "name")}
								inputProps={{
									maxLength: 255
								}}
							/>
							{errorFields.name && <FormHelperText>{errorFields.name}</FormHelperText>}
						</FormControl>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color="primary">
					Huỷ
				</Button>
				<Button onClick={onConfirm} color="primary" variant="outlined">
					Xác nhận
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default CreateUpdateRoleForm;