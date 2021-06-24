function BookInfo(props) {
    return (
        <>


            <div className='number'>
            <h3>{props.rank}</h3>
            </div>

            

            <div className='book-wrapper'>

                <img src={props.imgPath} className='cover' alt='book cover' />

        
            <div className='box' alt='outline of book'>

                <h4>Duration of weeks on the list: {props.weeks_on_list}</h4>

                <h2>{props.title}</h2>

                

                <p>{props.description}</p>

                
                <h3>Author: {props.author}</h3>

               


                <h4>You can buy this book from the links below:</h4>


            

            {
                
                props.buy_links.map(link => {
                    return (
                    <div className = 'buy-menu'>
                        
                        <li>
                        <button>
                                <a href={link.url}>{link.name}</a>
                            </button>
                        </li>
                        </div>
                    
                    
                    )

                }) 

                }
            


            </div>

            
            </div>
        

            
        </>

        
    );

}


export default BookInfo