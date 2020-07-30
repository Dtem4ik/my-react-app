import React from 'react'

const Product = ({ name, count, setTitle, OnChangeName, onDelete }) => {
    
    return (
        <div className="p-3" style={{border: '1px solid silver'}}>
            <h2>{ name }</h2>
            <p className={[!count && 'font-weight-bold']}>count: { count }</p>
            <input type="text" value={name} onChange={OnChangeName} />
            <div>
                <button className="btn btn-primary mt-2" onClick={() => setTitle(name)}>Click</button>
                <button className="btn btn-warning mt-2" onClick={onDelete}>delete</button>
            </div>
        </div>
    )
}

export default Product