import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {getBooks} from '../services/bookService';
import {getGenres} from '../services/genresService';
//import { getDefaultNormalizer } from '@testing-library/react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from "./common/ListGroup";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import SearchBox from "./SearchBox";


function BooksCard(props) {
    const [data, setData] = useState([])
    const [allBooks, setAllBooks] = useState([])
    const [types, setTypes] = useState([])
    const [type, setType] = useState([])
    const [searchQuery, setSearchQuery] = useState([])
  
    const getData = async () => {
      const result = await getBooks()
      setData(result.data.data)
      setAllBooks(result.data.data)
      const TypesResult = await getGenres()
      const genres = [{ id: '', name: 'All Genres' }, ...TypesResult.data.data]
      setTypes(genres)
    }
  
    // useEffect(() => {
    //   getData()
    // }, [])
  
    const handleGenreSelect = async (genre) => {
      setType(genre)
      let filtered = allBooks
      if (genre.name !== 'All Genres')
        filtered = filtered.filter((m) => m.type === genre.name)
  
      setData(filtered)
      setSearchQuery('')
    }
  
    const handleSearch = async (query) => {
      let filtered = allBooks
      if (searchQuery)
        filtered = filtered.filter((m) =>
          m.title.toLowerCase().startsWith(query.toLowerCase())
        )
      setData(filtered)
      setSearchQuery(query)
      setType(null)
    }
  

    const count=data.length;
    if(count===0) return <p>There are no books in the database </p>;

    return(
        <div>
            <Breadcrumb>
                <Breadcrumb.Item active>Books</Breadcrumb.Item>
            </Breadcrumb>
            <Container>
                <Row>
                    <Col sm={3}>
                        <ListGroup
                            items={types}
                            selectedItem={type}
                            onItemSelect={handleGenreSelect}
                        />
                    </Col>
                    <col sm={9}>
                        <Container>
                            <p>Showing {count} books in the database.</p>
                            <SearchBox value={searchQuery} onChange={handleSearch} />
                            <Row xs={1} md={2} className="g-4">
                                {data.map((item,index)=>{
                                    return <React.Fragment key={index}>
                                    <Col>
                                        <Link to={`/books/${item.id}`}>
                                            <Card style={{width:'18rem'}}>
                                                <Card.Img 
                                                    variant="top"
                                                    src={require(`../images/${item.isbn}.jpg`).default}
                                                    //src={require(`../images/${item.isbn}.jpg`).default}
                                                    //default kaldır çalışmazsa
                                                />
                                                <Card.Body>
                                                    <Card.Title>{item.title}</Card.Title>
                                                    <Card.Text>
                                                        {item.subtitle}
                                                    </Card.Text>
                                                    Author:{item.author}
                                                </Card.Body>
                                                    Price:{item.price}
                                            </Card>
                                        </Link>
                                    </Col>
                                    </React.Fragment>
                                })}
                            </Row>
                        </Container>
                    </col>
                </Row>
            </Container>
        </div>
    )
}
export default BooksCard