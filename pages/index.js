import { getFeaturedBooks } from "../api-helpers/Frontend/utils"

export default function Home({books}) {
  console.log(books)
  return (
<div>Home</div>
  )
}
export const getStaticProps=async ()=>{
  const books=await getFeaturedBooks();
  return {props:{
    books, 
  }}
}
