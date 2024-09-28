'use client';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import data from '../../data/data';

// This is table component of statistics section.


// This columns for the table.
const columns = [
  {
    key: "total_case",
    label: "TOTAL CASES",
  },
  {
    key: "new_case",
    label: "NEW CASES",
  },
  {
    key: "recovered",
    label: "RECOVERED",
  },
  {
    key: "death",
    label: "DEATH",
  },
  {
    key: "date",
    label: "DATE",
  },
];

const TableComp = () => {
  return (
    <div>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={data} >
          {(item) => (
            <TableRow key={item.date} className="text-default-600">
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableComp;
