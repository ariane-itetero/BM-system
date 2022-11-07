import React from 'react'
import { Grid } from '@mui/material'
import BookItem from './BookItem'
const BookList = ({data}) => {
    
  return (
    <div>
        <Grid container>
            {data.map((book)=>(
                <Grid padding={1} spacing={2} height={'500px'} xs={6} sm={4} md={3} lg={2} width={'100%'} item key={book._id}>
                <BookItem title={book.title}
                 author={book.author}
                 id={book._id} 
                imageUrl={book.imageUrl}/>
                   </Grid>
 ))}
 </Grid>
      </div>
  )
}

export default BookList