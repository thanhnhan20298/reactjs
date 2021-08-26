import React from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
    album:PropTypes.object.isRequired
};

function AlbumItem({album}) {
    return (
        <div className="album">
            <div className ="album__thumnail">
                <img src={album.thumnailUrl} alt={album.name}/>
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default AlbumItem;