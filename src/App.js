import React from 'react';
import './App.css';
import { Button, Form, Input } from 'antd';


import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  const onFinish=values=>{
    console.log(values)
  }
  return (
    <div className="App">
      <Form onFinish={onFinish} style={{ width: "50%" }}>
        
      <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "กรุณากรอก e-mail"
            },
            {
              type: "email",
              message: "รูปแบบ email ไม่ถูกต้อง"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "กรุณากรอก username"
            },
            {
              max: 26,
              message: "ความยาวไม่เกิน 26 ตัว"
            },
            {
              min: 6,
              message: "ความยาวไม่ต่ำกว่า 6 ตัว"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "กรุณากรอก password"
            },
          ]}
        >
          <Input type="password"/>
        </Form.Item>

        <Form.Item
          name="confirm"
          label="confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "กรุณากรอก password อีกครั้ง"
            },
         
        
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          })
         ]}
         >
           <Input.Password />
          
        </Form.Item>
        
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default App;
