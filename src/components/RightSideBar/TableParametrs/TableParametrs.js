import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
    styled
} from "@mui/material";


function TableParametrs() {
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
        },
    }));

    const StyledHeader= styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        color:"white",
        padding:"16px 0",
        fontSize: 23,
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({}));

    function createData(name, field) {
        return {name, field};
    }

    const rows = [
        createData('Background', <input/>),
        createData('Text', <input/>),

    ];

    return (
        <div>
            <StyledHeader>
                {"Параметры"}
            </StyledHeader>
            <TableContainer>
                <Table aria-label="customized table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell> {row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.field}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default TableParametrs;
