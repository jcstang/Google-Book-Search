import React, { Component } from "react";
import { Row, Col } from "../../Components/Grid/Grid";
import { BookList, BookListItem } from "../../Components/BookList/BookList";
import axios from "axios";
import EmptyList from "../../Components/EmptyList/EmptyList";
import RemoveBookButton from "../../Components/RemoveBookButton/RemoveBookButton";
import { toast } from "react-toastify";

class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true,
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios
      .get("/api/books")
      .then((response) => {
        this.setState({ savedBooks: response.data });
      })
      .catch((error) => console.log(error));
  };

  deleteFromDB = (id) => {
    axios
      .delete(`/api/books/${id}`)
      .then(() => {
        toast.error("Book Deleted");
        this.getBooks();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ? (
              <BookList>
                {this.state.savedBooks.map((book) => {
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      />
                      <RemoveBookButton
                        onClick={() => this.deleteFromDB(book.id)}
                      />
                    </div>
                  );
                })}
              </BookList>
            ) : (
              <EmptyList />
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;
