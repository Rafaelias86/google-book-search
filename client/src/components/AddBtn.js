import React from "react";
import Button from "./Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-toastify';

class AddBtn extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        .then( () => toast.success(`You added ${book.title}`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
            <Button className = "ml-3 mt-3 mb-5" type="primary" onClick={() => 
              {this.postToDB(this.props)}
              }>
              Save Book
            </Button>
          </div>
        );
    }
  }

  export default AddBtn;