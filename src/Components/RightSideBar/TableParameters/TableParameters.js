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


const TableParameters = (props) => {
    let params = null;
    if (props.componentParams) {
        params = Object.entries(props.componentParams).map((row) => {
            return {name: row[0], input: <input value={row[1]}/>}
        })
    }
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
                        {params && params.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell> {row.name} </StyledTableCell>
                                <StyledTableCell align="center">{row.input}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const StyledTableCell = styled(TableCell)(() => ({
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

const StyledTableRow = styled(TableRow)(() => ({}));

export default TableParameters;
