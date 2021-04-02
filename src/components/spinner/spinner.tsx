import './spinner.css';

import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;

function Spinner() {
	return (
		<div className="loading-spinner__cover">
			<Space size="middle">
                <Spin indicator={antIcon} tip="Loading..."/>
			</Space>
		</div>
	);
}

export default Spinner;
