import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";



const Search = styled("div")(({theme}) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        width: "auto"
    }
}));
const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));


function LeftSideBar() {
    return(
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{"aria-label": "search"}}
            />
        </Search>
    )
}

export default LeftSideBar;