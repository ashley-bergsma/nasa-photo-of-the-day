import React from 'react'; 

const Image = props => {
    return (
        <div>
            <div>
                <img 
                alt=""
                className=""
                src="" // {props.url}
                />
            </div>
            <h2 className="">{props.copyright}</h2>
        </div>
    );
}


export default Image;