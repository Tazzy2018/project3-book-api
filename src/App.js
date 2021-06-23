import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BookInfo from './BookInfo';
import Footer from './Footer';



function App() {
  const [books, setBooks] = useState ([]
  );



useEffect(() => {

//             const url = new URL ('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json');

//             url.search = new URLSearchParams({
//                 'api-key': 'iRwYQdOHnKEGRd39PtcMvGMutmjHZZIt'
                
            

//             });

// }


    axios({
      url: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json',
      method: 'GET',
      dataResponse: 'json',
      params: {
        'api-key': 'iRwYQdOHnKEGRd39PtcMvGMutmjHZZIt',
        format: 'json'
    }
      
    }).then ((response) => {
      // console.log(response.data.results.books);
      
      setBooks(response.data.results.books);
      
     

    })


    }, [])


return (
    <div className="App">
       
       <div className='wrapper'>

      <h1>Best Sellers Right Now</h1>

      

      {console.log(books)}

      {books.map((book) => {
        
        return (


          <BookInfo

          rank={book.rank}
          imgPath={book.book_image}
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
