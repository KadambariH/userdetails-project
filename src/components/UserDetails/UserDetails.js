import { Bookmark, ChatBubble, Person, Rating, Visibility } from '@mui/icons-material';
import { Button, Collapse } from '@mui/material';
import { fontWeight, padding } from '@mui/system';
import React, { useEffect } from 'react'
// import { Col, Container, Image, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress, Box, Container, Alert, Grid, CardContent, Typography, Card, CardMedia } from '@mui/material';
import { getUserDetailsData } from '../../redux/actions/userDetailsAction';
import Ratings from '../Ratings';

// function Spinner() {
//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CircularProgress />
//         </Box>
//     );
// }

const UserDetails = () => {
    const dispatch = useDispatch();
    const { isLoading, userdata, error } = useSelector(state => state.userDetails);
    const { results } = userdata;

    useEffect(() => {
        dispatch(getUserDetailsData())
    }, [])


    const showDetails = (inf) => {
        return inf?.map((item, i) => {
            return (

                <Container>
                    
                    <Grid container  >
                        <Grid item xs={4}>
                            < img fluid src={item.picture.medium} width={250} height={250} className='.mt-sm-5 ms-1 ' />
                        </Grid>
                        
                        <Grid item xs={4} sx={{maxWeight:"350px"}}>
                            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }} variant="h5" >{item.name.first}</Typography>
                            <Typography sx={{ fontSize: "15px", paddingBottom: "30px", color: "blue" }} variant="h6" >Product Designer</Typography>
                            <Typography sx={{ fontSize: "15px", fontweight: "light" }}  >Ratings</Typography>
                            <Ratings />


                            <ChatBubble sx={{ fontSize: "medium"}} /><Button variant="text" sx={{ textTransform: "lowercase", color: "black", paddingRight: "15px" }}>Send message</Button>
                            <Button variant="contained" sx={{ textTransform: "lowercase", paddingX: "20px", margin: "10px", bgcolor: "lightblue", color: "blue" }}>Contacts</Button>
                            <Button variant="text" sx={{ textTransform: "lowercase", color: "black" }}>Report User</Button>
                          
                            <Box sx={{display: "flex"}}>
                            <Visibility  sx={{paddingTop: "10px"}}/><Button variant="text" sx={{ textTransform: "lowercase", color: "black", paddingRight: "15px" }}>Timeline</Button>
                            <Person sx={{paddingTop: "10px"}}/><Button variant="text" sx={{ textTransform: "lowercase", color: "black", paddingRight: "15px" }}>About</Button>
                            </Box>
                            <hr />

                        </Grid>
                     

                       
                        <Box sx={{display:"flex"}}>
                        <Grid item xs={6}>

                            <Typography sx={{ fontSize: "20px", color:"lightgrey"}} variant="h5" >Work</Typography>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >Login: </Typography>
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >{item.login.username}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >Pasword: </Typography>
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >{item.login.password}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >salt:</Typography>
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >{item.login.salt}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >Rigistered date: </Typography>
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >{item.registered.date}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >age: </Typography>
                            <Typography sx={{ fontSize: "15px" }} variant="h5" > {item.registered.age}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{paddingLeft:"62px"}}>
                            <Typography sx={{ fontSize: "20px",color:"lightgrey"}} variant="h5" >Contact Information</Typography>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >Phone: </Typography>
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >{item.phone}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >Address:</Typography>
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >{item.location.street.name},{item.location.country}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >Email:</Typography>
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >{item.email}</Typography>
                            </Box>         
                            <Typography sx={{ fontSize: "20px", color:"lightgrey",  paddingTop: "20px"}} variant="h5" >Basic Information</Typography>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >Birthday: </Typography>
                            <Typography sx={{ fontSize: "15px", color: "blue" }} variant="h5" >{item.dob.date}</Typography>
                            </Box>
                            <Box sx={{display: "flex"}} >
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >Gender: </Typography>
                            <Typography sx={{ fontSize: "15px" }} variant="h5" >{item.gender}</Typography>
                            </Box>
                        </Grid>
                        </Box>
                    </Grid >
                </Container >
            )
        })
    }
    return (
        <Container>
            {/* {isLoading && <Spinner />} */}
            {results?.length > 0 && showDetails(results)}
        </Container>

    )
}

export default UserDetails
