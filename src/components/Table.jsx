import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const Table = () => {
    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Placa",
            selector: (row) => row.placa,
            sortable: true,
        },
        {
            name: "Marca",
            selector: (row) => row.marca,
            sortable: true,
        },
        {
            name: "Modelo",
            selector: (row) => row.modelo,
            sortable: true,
        },
        {
            name: "Kilometraje",
            selector: (row) => row.kilometraje,
            sortable: true,
        },
        {
            name: "Transición",
            selector: (row) => row.transmision,
            sortable: true,
        },
        {
            name: "Tipo",
            selector: (row) => row.tipo,
            sortable: true,
        },
        {
            name: "Precio de compra",
            selector: (row) => row.precio,
            sortable: true,
        },
        {
            name: "Provinencia",
            selector: (row) => row.proviniencia,
            sortable: true,
        },
    ];

    const data = [];

    return (
        <>
            <DataTable columns={columns} data={data} selectableRows />
        </>
    );
};

export default Table;
