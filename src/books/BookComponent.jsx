import React,{useState,useEffect} from "react";
import axios from "axios";


export function BookComponent(){

    const [books,setBooks] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        axios.get('https://freetestapi.com/api/v1/books')
        .then(response=>{
            setBooks(response.data);
            setLoading(false);
        })
        .catch(error=>{
            setError(error);
        })
    },[]);

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>Error: {error.messagae}</p>
    }

    return(
        <>
        <div className="container mt-5">
            <h1 className="mb-4">Book List</h1>
            <table className="table-stripped table-bordered">
                <thead className="thread-dark">
                    <tr>
                    <th>id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publication Year</th>
                    <th>Genre</th>
                    <th>Description</th>
                    <th>Cover Image</th>
                    </tr>
                </thead>
                <tbody>
                   {books.map(book=>(
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publication_year}</td>
                        {/* <td>{book.genre}</td> */}
                        <td>
                            {
                                book.genre && book.genre.length > 0 ?(
                                    <ul>
                                        {book.genre.map((genre,index)=>(
                                            <li key={index}>{genre}</li>
                                        ))}
                                    </ul>
                                )
                                :(
                                    "No genere found!!"
                                )
                            }
                        </td>
                        <td>
                            
                            {book.description}
                        </td>
                        <td>
                        <img src={book.cover_image} width='50' height={50} alt="image_data"></img> 
                            
                        </td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div>
        </>
    );
}