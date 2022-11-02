import Book from "../model/Book";

export const getAllBooks=async(req,res)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        return new Error(err)
    }
    if(!books){
        return res.status(500).json({message: "Internal server error.."})
    }
    if(books.length===0){
        return res.status(404).json({message: "Sorry no book found.."})
    }
    return res.status(200).json({books});
};


export const addBook=async(req,res)=>{
    const {title,author,price,imageUrl,featured}=req.body
    if(!title && title.trim()==="" 
     && !author && author.trim()==="" && 
     !price && !imageUrl && imageUrl.trim()===""){
        return res.status(422).json({message:"Invalid inputs"})
    }

    let book;
    try{
        book=new Book({title,author,price,imageUrl,featured})
        book=await book.save();
    }catch(err){
        return new Error(err);
    }
    if(!book){
            return res.status(500).json({message:"Internal server error"})
    }
        return res.status(201).json({book})
}
export  const updateBook=async(req,res)=>{
    const id=req.query.id;
    console.log(id);

    const {title,author,price,imageUrl,featured}=req.body
    if(!title && title.trim()==="" 
     && !author && author.trim()==="" && 
     !price && !imageUrl && imageUrl.trim()===""){
        return res.status(422).json({message:"Invalid inputs"})
    }
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            title,author,price,imageUrl,featured
        })
    }catch(err){
        return console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"Internal server error"})
    }
        return res.status(200).json({message:"Boook successfully updated"})
}

export const deleteBook=async (req,res)=>{
    const id=req.query.id;

    let book;
    try{

        book=await Book.findOneAndRemove(id);
    }catch(err){
        return new Error(err);
    }
    if(!book){
        return res.status(500).json({message:"Internal server error"})
    }
        return res.status(200).json({message:"Book successfully deleted"})
}

export const getBookFromId=async(req,res)=>{
    const id=req.query.id;
    let book;
    try{
        book=await Book.findById(id);
    }catch(err){
        return new Error(err);
    }
    if(!book){
        return res.status(500).json({message:"Internal server error"})
    }
            return res.status(200).json({book})
}
