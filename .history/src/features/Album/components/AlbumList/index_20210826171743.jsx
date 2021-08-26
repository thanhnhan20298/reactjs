import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import "./styles.scss"
AlbumList.propTypes = {
    albumList:PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
    return (
        <ul>
            {albumList.map(album =>(
                <li key={album.id}>
                    <AlbumItem album ={album}/>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;