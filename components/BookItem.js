import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const BookItem = ({title,id,author,imageUrl}) => {
  return (
    <Card sx={{ 
      width:"100%",
      height:"100%",
      borderRadius:3,
      boxShadow:"5px 5px 10px #ccc",
       
       }}>
<div style={{width:'100%',height:'50%'}}>
    <img src={imageUrl} alt={title} width={'100%'} height={'100%'}/>
</div>
      <CardContent sx={{width:"100%",height:"30%"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
 
    <CardActions>
      <Button size="small" color="primary">
        Edit
      </Button>
      <Button size="small" color="primary">
        Delete
      </Button>
    </CardActions>
  </Card>
  )
}

export default BookItem