import { Button, Modal } from 'antd';
import { useState } from 'react';
import Search from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import ReactPaginate from 'react-paginate';
const Viewmore = (props) => {
    let { item, API_IMGAE } = props
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button style={{ fontWeight: '600', height: '42px', background: '#1d2a3e' }} type="primary" onClick={showModal}>
                View more
            </Button>
            <Modal width={'600px'} title="Over review" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="viewmore">
                    <img src={`${API_IMGAE}` + `${item.poster_path}`} />
                    <p>IMDb : {item.vote_average}</p>
                    <p>Ngày phát hành: {item.release_date}</p>
                    <p> Overview: <div className="overview-title"> {item.overview} </div> </p>
                </div>
            </Modal>
        </>
    );
};
export default Viewmore;