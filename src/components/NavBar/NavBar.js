import { AccountCircle, Margin } from '@mui/icons-material'
import { AppBar, Toolbar, styled, InputBase, Typography, Avatar } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';


const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const NavBar = () => {
    return (
        <>
        <AppBar position="sticky" sx={{Margin:"20px"}}>
            <StyledToolBar>
                <AccountCircle />
                <Typography>KodeColor</Typography>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }} />
                </Search>
                <Typography>Find people</Typography>
                <Typography>Messages</Typography>
                <Typography>My Contacts</Typography>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledToolBar>
        </AppBar>
        <hr className='.py-sm-5'/>
        </>
    )
}

export default NavBar 

