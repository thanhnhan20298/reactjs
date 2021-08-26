import React from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
    album:PropTypes.object.isRequired
};

function AlbumItem({album}) {
    return (
        <div className="album">
            <div>
                <img src ={album.thumnails}/>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default AlbumItem;