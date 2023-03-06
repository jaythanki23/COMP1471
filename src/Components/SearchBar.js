import React, {useState} from 'react';
import './SearchBar.css';
import data from './data.json';

function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.tray_name.toLowerCase().includes(searchWord.toLowerCase());
        })

        if(searchWord== "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return(
        <div className="search">
            <div className="search-inputs">
                <input
                    type = "text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter}/>
                <div className="search-icon">
                    {filteredData.length == 0 ? (
                        <i className="fa-solid fa-magnifying-glass"></i>
                    ) : (
                        <i className="fa-solid fa-xmark"
                           id="clearBtn"
                           onClick={clearInput}></i>
                    )}
                </div>
            </div>
            {filteredData.length != 0 &&
                <div className="dataResult">
                    {filteredData.slice(0, 5).map((value, key) => {
                        return <a className="dataItem" href={value.link} target="_blank">
                            <p>{value.tray_name}</p>
                        </a>
                    })}
                </div>
            }
        </div>
    );
}

export default SearchBar;