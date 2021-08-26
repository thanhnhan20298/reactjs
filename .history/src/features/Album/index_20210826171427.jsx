import React from 'react';

import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id:1,
            name:"Gửi Thanh Xuân Tươi Đẹp",
            thumnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/3/f/e/43fe7973194a531e9549ea221e2075a3.jpg"
        },
        {
            id:1,
            name:"Tớ Thích Cậu",
            thumnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/a/4/7/7/a477d74a30fa4e7a4df41d5d2a26f53d.jpg"
        },
        {
            id:1,
            name:"Ánh Trăng Nói Hộ Lòng Tôi",
            thumnailUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/4/0/4/c404ef2a14065124599ee3df2eb88954.jpg"
        },
    ]
    return (
        <div>
            <h3>Có thể bạn sẽ thích đấy</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;