import Excel from "exceljs/dist/es5/exceljs.browser";
import * as fileSaver from "file-saver";

export default {
	export: ({ 
		header = null,
		isShowHeader = true,
		data, 
		sheetName = "Sheet", 
		merge = null, 
		style = null, 
		name = "bus", 
		ext = "xlsx",
		rowOption = null
	}) => {
		const workbook = new Excel.Workbook();
		const sheet = workbook.addWorksheet(sheetName);
	
		if(header) {
			sheet.columns = header;
		}
	
		sheet.addRows(data);
	
		if(header && !isShowHeader) {
			sheet.spliceRows(1, 1);
		}
	
		if(merge && merge.length > 0) {
			for(let i in merge) {
				sheet.mergeCells(merge[i]);
			}
		}
	
		if(style && Object.keys(style).length > 0) {
			for(let cell in style) {
				for(let prop in style[cell]) {
					sheet.getCell(cell)[prop] = style[cell][prop];
				}
			}
		}
	
		if(rowOption && Object.keys(rowOption).length > 0) {
			for(let i in rowOption) {
				const row = sheet.getRow(i);
				for(let prop in rowOption[i]) {
					row[prop] = rowOption[i][prop];
				}
			}
		}
	
		workbook.xlsx.writeBuffer()
				.then(buffer => fileSaver.saveAs(new Blob([buffer]), `${name}.${ext}`))
				.catch(err => console.log('Error writing excel export', err))
	}
}