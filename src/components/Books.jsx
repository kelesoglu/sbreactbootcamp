import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb' 
import ListGroup from './common/ListGroup';
import SearchBox from  './SearchBox';
import BooksTable from './BooksTable';

class Books extends Component {
    state ={
        books :[],
        genres :"",
        currenPage:1,
        pageSize:4,
        searchQuery:"",
        selectedGenre: null,
        sortColumn:{path:"title",order:"asc"}
    };

    async componentDidMount(){
        const {data} = await getGenres()
                        .then((response)=> response.data);
        const genres = [{id:"",name:"All Types"}, ...data];

        const {data:books} =await getBooks()
                            .then((response)=>response.data);
        this.setState({books,genres});
    }

    handlePageChange = page  =>{
        this.setState({currenPage:page})
    };
    handeleGenreSelect =genre =>{
        this.setState({selectedGenre: genre, searchQuery:"",currenPage:1});
    };

    handleSearch =query =>{
        this.setState({searchQuery:query,selectedGenre:null,currenPage:1})
    };

    handleSort =sortColumn =>{
        this.setState({sortColumn});
    };

    getPagedData =()=>{
        const{
            pageSize,
            currenPage,
            sortColumn,
            selectedGenre,
            searchQuery,
            books:allBooks
        }= this.setState;

        let filtered =allBooks;
        if(searchQuery)
        {
            filtered=allBooks.filter(m=>
                m.title.toLowerCase().startWith(searchQuery.toLowerCase));
        }
        else if(selectedGenre && selectedGenre.name !=="All Types"){
            filtered =allBooks.filter(m=>
                m.type === selectedGenre.name)
        }
        const sorted  = _.orderBye (filtered, [sortColumn.path],[sortColumn.order]);
        const books =paginate(sorted , currenPage, pageSize);

        return {totalCount:filtered.length, data:books}
    };

    render() {
        return (
            <div className='container'>
                <Breadcrumb>
                    <Breadcrumb.Item active>Authors</Breadcrumb.Item>
                </Breadcrumb>
                <div className='row'>
                    <div className='col-sm-4'>
                        <ListGroup/>
                    </div>
                    <div className='col-sm-8'>
                        {user && (
                            <Link to="/books/new"
                            className ="btn btn-primary">
                                New Book
                            </Link>
                        )}
                        <p>Showing {totalCount} books in the database </p>
                        <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                        <ListGroup/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;