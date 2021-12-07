import { Card, Drawer, Form, Input, Button, Tag } from 'antd'

function DrawerWrapper(props) {

    const { title, visible, onClose } = props;

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Drawer title={title} placement="left" onClose={onClose} visible={visible} >
            <Form
                name="basic"
                layout={'vertical'}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="板块标题"
                    name="title"
                    rules={[{ message: 'Please input your username!' }]}
                >
                    <Input defaultValue={title} />
                </Form.Item>

                <Form.Item
                    label="颜色"
                    name="color"
                >
                    <Tag color="#f50">#f50</Tag>
                    <Tag color="#2db7f5">#2db7f5</Tag>
                    <Tag color="#87d068">#87d068</Tag>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                    <Button type="primary" block={true} htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            <Button type="primary" block={true} danger>
                删除板块
            </Button>
        </Drawer>
    )
}

export default DrawerWrapper