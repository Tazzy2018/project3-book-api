import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BookInfo from './BookInfo';
import Footer from './Footer';



function App() {
  const [books, setBooks] = useState ([]
  );



useEffect(() => {


    axios({
      url: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json',
      method: 'GET',
      dataResponse: 'json',
      params: {
        'api-key': 'iRwYQdOHnKEGRd39PtcMvGMutmjHZZIt',
        format: 'json'
    }
      
    }).then ((response) => {
      
      
      setBooks(response.data.results.books);
      
     

    })


    }, [])


return (
    <div className="App">
       
       <div className='wrapper'>

      <h1>New York Times Best Sellers</h1>


      {books.map((book) => {
        
        return (


          <BookInfo

          rank={book.rank}
          imgPath={book.book_image}
          weeks_on_list={book.weeks_on_list}
          title={book.title}
          description={book.description}
          author={book.author}
          buy_links={book.buy_links}
          

          />
          
        );

  
}, [])}

    </div>

      <Footer />

    </div>


    );

    
  
}


export default App;
