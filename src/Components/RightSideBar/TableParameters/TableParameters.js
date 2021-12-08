import * as React from 'react';
import {
    Table, TableBody, TableCell,
    tableCellClasses, TableContainer, TableRow,
    styled, Divider, Box,
} from "@mui/material";
import {useDispatch} from "react-redux";
import {SetComponentAttributes} from "../../../Redux/CanvasReducer";


function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

const TableParameters = (props) => {
    const OnAttrsValueChange = (attribute, event, type) => {
        const newAttrs = JSON.parse(JSON.stringify(props.componentAttrs)); // My dirt deep copy
        newAttrs[type][attribute] = event.target.value;
        dispatch(SetComponentAttributes(props.compId, props.blockId, newAttrs))
    }
    const dispatch = useDispatch();
    return (
        <div>
            <StyledHeader>
                {"Параметры"}
            </StyledHeader>
            {props.componentAttrs && Object.keys(props.componentAttrs).map((header) => (
                <TableContainer>
                    {Object.keys(props.componentAttrs[header]).length !== 0 &&
                    <StyledTableHead>
                        {header.toUpperCase()}
                        <Divider/>
                    </StyledTableHead>}
                    <Table aria-label="customized table">
                        <TableBody>
                            {
                                Object.entries(props.componentAttrs[header]).map((row) => (
                                    <StyledTableRow>
                                        <StyledTableCell> {ucFirst(row[0])} </StyledTableCell>
                                        <StyledTableCell>
                                            <input
                                                value={row[1]}
                                                onChange={(evt) => OnAttrsValueChange(row[0], evt, header)}
                                            />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ))}
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
const StyledTableHead = styled(Box)({
    fontSize: 22,
    textAlign: "center",
    marginTop: 8,
})

export default TableParameters;
