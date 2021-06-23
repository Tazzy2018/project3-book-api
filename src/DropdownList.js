import { useState } from "react";

function DropdownList (props) {
    const [buy_links, setBuylinks] = useState ('placeholder');


<form>

            <h2>show me some photos that are:</h2>
            <select id="buy link" name='buy_links'>
            <option value='placeholder' disabled>pick one:</option>
            <option value='square' disabled>square:</option>
            <option value='landscape' disabled>landscape:</option>
            <option value='portrait' disabled>portrait:</option>
            </select>

            <button type='submit'>give me photos</button>
        </form>
        

}

export default DropdownList;