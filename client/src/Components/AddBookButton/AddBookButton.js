import React, { Component } from "react";
import Button from "../button";
import axios from "axios";
import { toast } from "react-toastify";

class AddBookBtn extends Component {
  postToDB = (book) => {
    let dbBook = {
      title: book.title,
      authors: book.authors,
      synopsis: book.synopsis,
      thumbnail: book.thumbnail,
      link: book.link,
    };

    axios
      .post("/api/books", dbBook)
      .then(() => toast.success(`You added ${book.title} to your bookshelf`))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => {
            this.postToDB(this.props)}
        }>
        Save book
        </Button>
      </div>
    );
  }
}

export default AddBookBtn;
