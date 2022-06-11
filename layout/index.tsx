import Header from './header'
import { Layout } from 'antd';

interface IContext {
    children: React.ReactNode;
    home?: boolean;
}

const {Content} = Layout

const Main = (context:IContext) => {
    const {children} = context
    return (
        <>
            <Header />
            <Content>{children}</Content>
        </>
    )
}

export default Main