import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import BookInfo from './BookInfo';
// import BuyLinks from './BuyLinks';

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
      <h1>best sellers test</h1>

      {console.log(books)}

      {books.map((book) => {
        
        return (
          <BookInfo 

          rank={book.rank}
          imgPath={book.book_image}
          title={book.title}
          description={book.description}
          author={book.author}
          amazon_product_url={book.amazon_product_url}
          buy_links={book.buy_links}
          first_chapter_link={book.first_chapter_link}
          
          />
          
        )
  
}, [])}


{/* {console.log(buy_links)}

{buy_links.map((buy_link) => {

return (
  <BuyLinks 
  buy_links={buy_link.buy_links}

  />

)

}, [])}
 */}


      
    </div>

    );

  
}


export default App;
