function BookInfo(props) {
    return (
        <>
            {/* <h2>{props.title}</h2> */}


            <div className='number'>
            <h3>{props.rank}</h3>
            </div>

            

            <div className='book-wrapper'>

                <img src={props.imgPath} className='cover' alt='book cover' />

        
            <div className='box' alt='outline of book'>

                <h2>{props.title}</h2>

                <p>{props.description}</p>
                
                <h3>Author: {props.author}</h3>

               

                

        {/* <form>

            <h2>where to buy book:</h2>
            <select id="buy link" name='buy_links'>
            <option value href='' disabled>Amazon:</option>
            <option value='' disabled>Apple Books:</option>
            <option value='' disabled>Barnes and Noble:</option>
            <option value='' disabled>Books A Million:</option>
            </select>

        </form> */}

            

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

            




             {/* <button>buy here: {props.buy_links}</button> */}
            </div>


            {/* <div className='box' alt='outline of book'>
            <h3>Author: {props.author}</h3> */}

            {/* <p>{props.description}</p> */}
            {/* </div> */}

            {/* <p>{props.first_chapter_links}</p> */}


            {/* {
                props.buy_links.map(link => {
                    return (
                        <a href={link.url}>{link.name}</a>
                    )

                }) 

                } */}
            
            {/* <h4>{props.buy_links[0].url}</h4> */}
        

            
        </>

        
    );

}


export default BookInfo