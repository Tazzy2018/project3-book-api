function BookInfo(props) {
    return (
        <div>
            <h2>{props.title}</h2>


            <div className='number'>
            <h3>{props.rank}</h3>
            </div>

            <div className='wrapper'>
            <img src={props.imgPath} className='cover' alt='book cover' />
            </div>


            {/* <div className='box' alt='outline of book'>
            <h3>Author: {props.author}</h3> */}

            {/* <p>{props.description}</p> */}
            {/* </div> */}

            <p>{props.first_chapter_link}</p>



            <h4>{props.buy_link}</h4>
        

        </div>
    )
}

export default BookInfo