import { getFeaturedBooks } from "../api-helpers/Frontend/utils"
import BookList from "../components/BookList"

export default function Home({books}) {
  console.log(books)
  return <BookList data={books}/>
}
export const getStaticProps=async ()=>{
  const books=await getFeaturedBooks();
  return {props:{
    books, 
  }}
}
