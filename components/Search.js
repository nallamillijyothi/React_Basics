import { useState } from "react";

const Search = (props) =>{

    function handleSearch(event){
       props.onSearch(event.target.value)
    }
    return(
        <div className="search_container">
        <input type="text" className="search_bar"  onKeyUp={handleSearch} placeholder="search for restaurants and food"/>
        <span className="search_icon"><i className="fa fa-search" /></span>
        </div>
    )
}

export default Search;