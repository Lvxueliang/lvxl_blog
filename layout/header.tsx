import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';

const {Header} = Layout

const items = [
    {
        key: '1',
        label: '首页'
    },
    {
        key: '2',
        label: '文章'
    }
]

const HeaderLayout = () => {
    return (
        <Header>
            <Menu theme="dark" mode="horizontal" >
                {
                    items.map(item => {
                        return (
                            <Menu.Item key={item.key}>{item.label}</Menu.Item>
                        )
                    })
                }
            </Menu>
        </Header>
    )
}

export default HeaderLayout