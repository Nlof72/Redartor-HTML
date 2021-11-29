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

// АХТУНГ КОСТЫЛИ
function TableParameters(props) {
    console.log(props)
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.body}`]: {
            fontSize: 16,
        },
    }));

    const StyledHeader = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        textAlign: "center",
        color: "white",
        padding: "16px 0",
        fontSize: 23,
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({}));

    function createData(name, field) {
        return {name, field};
    }
    let rows = null;
    if (props.comProps) {
         rows = Object.entries(props.comProps)
        rows = rows.map((value => {return createData(value[0], <input value={value[1]}/>)}))
    }
    console.log(rows)

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
                        {rows!==null && rows.map((row) => (
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

export default TableParameters;
