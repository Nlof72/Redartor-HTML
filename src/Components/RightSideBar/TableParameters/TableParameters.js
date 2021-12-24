import * as React from 'react';
import {
    Table, TableBody, TableCell,
    tableCellClasses, TableContainer, TableRow,
    styled, Divider, Box, TextField, InputAdornment, Checkbox, Select, MenuItem,
} from "@mui/material";
import {useDispatch} from "react-redux";
import {SetComponentAttributes} from "../../../Redux/CanvasReducer";
import {AttributesData} from "../../../Data/AttributesData";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const TableParameters = (props) => {
    const OnAttrsValueChange = (attribute, value, type) => {
        console.log(value)
        const newAttrs = JSON.parse(JSON.stringify(props.componentAttrs)); // My dirt deep copy
        newAttrs[type][attribute] = value;
        dispatch(SetComponentAttributes(props.compId, props.blockId, newAttrs))
    }
    const dispatch = useDispatch();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "100vh",
            width: "340px"
        }}>
            <StyledHeader sx={{flexShrink: 0}}>
                {"Параметры"}
            </StyledHeader>
            {props.componentAttrs && Object.keys(props.componentAttrs).map((header, index) => {
                return <TableContainer sx={{flexShrink: index === 0 ? 0 : 6, overflow: "auto"}}>
                    {Object.keys(props.componentAttrs[header]).length !== 0 &&
                        <StyledTableHead>
                            {header.toUpperCase()}
                            <Divider/>
                        </StyledTableHead>}
                    <Table aria-label="customized table">
                        <TableBody>
                            {Object.entries(props.componentAttrs[header]).map((row) => {
                                return <StyledTableRow>
                                    <StyledTableCell><b>{AttributesData[row[0]].rus}</b></StyledTableCell>
                                    <StyledTableCell>
                                        <AttributeInput
                                            name={row[0]}
                                            type={header}
                                            fieldType={AttributesData[row[0]].type}
                                            value={row[1]}
                                            OnAttrsValueChange={OnAttrsValueChange}
                                        />
                                    </StyledTableCell>
                                </StyledTableRow>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            })}
        </Box>
    )
}

const AttributeInput = (props) => {
    const AttrTypeHandler = (fieldType) => {
        switch (fieldType) {
            case "string":
                return <TextField
                    value={props.value}
                    sx={{width: 150, padding: 0}}
                    InputProps={{
                        style: {height: 30},
                    }}
                    onChange={(event) => {
                        props.OnAttrsValueChange(props.name, event.target.value, props.type);
                    }}
                    variant="outlined"/>

            case "bool":
                return <Checkbox value={props.value} onChange={(event) => {
                    props.OnAttrsValueChange(props.name, event.target.checked, props.type)
                }}/>

            case "value":
                return <TextField
                    value={props.value.replace(/\D/g, '')}
                    sx={{width: 100, padding: 0}}
                    onChange={(event) => {
                        props.OnAttrsValueChange(props.name, event.target.value + "px", props.type)
                    }}
                    InputProps={{
                        endAdornment: <InputAdornment position="and">px</InputAdornment>,
                        type: "number",
                        style: {height: 30},
                    }}
                />

            case "color":
                return <input type="color" value={props.value} onChange={(event) => {
                    props.OnAttrsValueChange(props.name, event.target.value, props.type)
                }}/>

            case "list":
                return <Select
                    value={props.value}
                    sx={{width: 120, height: 30}}
                    onChange={(event) => {
                        props.OnAttrsValueChange(props.name, event.target.value, props.type)
                    }}
                >
                    {AttributesData[props.name].listOptions.map((item) => {
                        return <MenuItem value={item}>{capitalizeFirstLetter(item)}</MenuItem>;
                    })}
                </Select>

            default:
                return "div"
        }
    }
    return (
        <div>
            {AttrTypeHandler(props.fieldType)}
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
