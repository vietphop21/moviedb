import React, { useEffect, useRef } from 'react'
import { Button } from 'antd'
import Tooltip from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Search from 'antd/es/transfer/search'
import Input from 'antd'
const Nav = (props) => {
    const searchRef = useRef()
    let { handleSearch, value, page,setValue } = props
    useEffect(() => {
        searchRef.current.focus();
    }, [value,page])
    const handleEnter = (event) => {
        if (event.keyCode === 13) {
            handleSearch()
            setValue('');
        }
    }
   
    const handleSearch1 = () => {
        handleSearch();
        setValue('');
    }
    return (
        <>
            <header>
                <div className="logo">
                    <img src="https://phimmoiyyy.net/wp-content/uploads/2023/03/phimmoi.png" alt="" />
                </div>
                <div className="menu" >
                    <input  class="inputnav" type="text"
                        ref={searchRef}
                        onChange={(event) => setValue(event.target.value)}
                        placeholder='Enter Search'
                        value={value}
                        onKeyDown={(event) => handleEnter(event)}
                    />
                    <Button style={{ borderRadius: '0px 7px 7px 0px' }} onClick={handleSearch1} type="primary">Search</Button>
                </div>
            </header>
        </>
    )
}
export default Nav;