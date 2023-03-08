
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const SpecificationDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate0 = (rowData, { rowIndex }) => <InputText value={rowData.processor}  />
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.graphicCard}  />
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.storage}  />
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.ram}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="processor" header="Processor" body={inputTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="graphicCard" header="Graphic Card" body={inputTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="storage" header="Storage" body={inputTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="ram" header="RAM" body={inputTemplate3} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default SpecificationDataTable;