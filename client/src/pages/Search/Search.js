import React, { Component } from "react";
import axios from "axios";
import AddBookButton from "../../Components/AddBookButton/AddBookButton";
import { Row, Col } from "../../Components/Grid/Grid";
import { BookList, BookListItem } from "../../Components/BookList/BookList";
import EmptyList from "../../Components/EmptyList/EmptyList";

class Search extends Component {
  state = {
    searchResult: [],
    query: "",
    books: [],
  };

  displayResult = (data) => {
    this.setState({ books: data.items });
  };

  searchGoogleBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q${this.state.query}`;
    axios
      .get(url)
      .then((response) => {
        this.displayResult(response.data);
      })
      .catch((error) => console.log(error));
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Row>
        <Col size="md-12">
          <div>
            <input
              id="bookQ"
              className="form-control form-control-lg"
              autoComplete="off"
              type="text"
              name="query"
              onChange={this.handleInput}
            />
            <button type="submit" onClick={this.searchGoogleBooks}>
              Search for Books
            </button>

            {this.state.books && this.state.books.length > 0 ? (
              <BookList>
                {this.state.books.map((book) => {
                  return (
                    <div>
                      <BookListItem
                        key={book.id}
                        authors={
                          book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : ["No Author Available"]
                        }
                        title={
                          book.volumeInfo.description
                            ? book.volumeInfo.description
                            : "No Description Available"
                        }
                        link={book.volumeInfo.infoLink}
                        thumbnail={
                          book.volumeInfo.imageLinks.thumbnail
                            ? book.volumeInfo.imageLinks.thumbnail
                            : "#"
                        }
                      />
                      <AddBookButton
                        authors={
                          book.volumeInfo.authors
                            ? book.volumeInfo.authors
                            : ["No Author Available"]
                        }
                        title={book.volumeInfo.title}
                        synopsis={
                          book.volumeInfo.description
                            ? book.volumeInfo.description
                            : "No Description Available"
                        }
                        link={book.volumeInfo.infoLink}
                        thumbnail={
                          book.volumeInfo.imageLinks.thumbnail
                            ? book.volumeInfo.imageLinks.thumbnail
                            : "#"
                        }
                      />
                    </div>
                  );
                })}
              </BookList>
            ) : (
              <EmptyList />
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Search;
