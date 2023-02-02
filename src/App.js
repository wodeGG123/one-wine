import React, { useState } from 'react';
import { Space, TabBar, NavBar, Swiper, Card, Steps, Image } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  AddCircleOutline,
  UserOutline,
  ShopbagOutline,
} from 'antd-mobile-icons';
import ReactPlayer from 'react-player';
import './App.css';
const { Step } = Steps;

function App () {
  const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div className="swiper-wrap" style={{ background: color }}>
        {index + 1}
      </div>
    </Swiper.Item>
  ))
  const tabs = [
    {
      key: 'home',
      title: '广场',
      icon: <AppOutline />,
    },
    {
      key: 'message',
      title: '消息',
      icon: <MessageOutline />,
      badge: '99+',
    },
    {
      key: 'todo',
      title: '发布',
      icon: <AddCircleOutline />,
    },
    {
      key: 'shopping',
      title: '商城',
      icon: <ShopbagOutline />,
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className="App">
      {/* <header>
        <NavBar onBack={() => { }}>官方动态</NavBar>
      </header> */}
      <div className='app-mid'>
        <Swiper
          indicatorProps={{
            color: 'white',
          }}
          defaultIndex={1}
        >
          <Swiper.Item key={1}>
            <div className="swiper-wrap">
              <Image
                src="/577889-cocktail-4k.jpeg"
                fit='cover'
              />
            </div>
          </Swiper.Item>
          <Swiper.Item key={2}>
            <div className="swiper-wrap">
              <Image
                src="/268154.jpeg"
                fit='cover'
              />
            </div>
          </Swiper.Item>
          <Swiper.Item key={3}>
            <div className="swiper-wrap">
              <Image
                src="/2727835.jpeg"
                fit='cover'
              />
            </div>
          </Swiper.Item>
        </Swiper>
        <div >
          <Card title='视频教程' onClick={() => { }}>
            <iframe width="100%" src="//player.bilibili.com/player.html?aid=302617013&bvid=BV14P411V7bz&cid=820883107&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          </Card>
        </div>
        <div>
          <Card title='文字教程' onClick={() => { }}>
            <Steps direction='vertical' current={3}>
              <Step title='第一步' description='准备冰块。很简单，家用冰箱均可制作。加冰块目的是不言而喻，如果家中没有冰格，可以直接将酒放进急冻箱冻上20分钟左右。' />
              <Step title='第二步' description='准备雪碧。也可以是各种汽水。目的在于降低白酒的烈性和注入气体，喝起来少了酒精的浓烈却增加了气泡的刺激。' />
              <Step title='第三步' description='准备柠檬。将柠檬切片，可以用蜂蜜腌制存放冰箱，调制的时候每次用1-2片即可，目的在于增加清香。' />
            </Steps>
          </Card>
          <Card title='历史讲解' onClick={() => { }}>
            鸡尾酒，听起来很牛叉的名字，给人的感觉是高大上的档次，实际上我给他下个定义就是“勾兑酒”，而且勾兑得很离谱。看到鸡尾酒的制作流程和所需要的原料，很多朋友不知道如何下手，下面介绍一种简单的鸡尾酒制作方式，保证刺激你的舌尖。
          </Card>
          <Card title='优秀案例' onClick={() => { }}>
            <Space wrap>
              <Image
                src="/wine1.jpeg"
                width={64}
                height={64}
                fit='cover'
                style={{ borderRadius: 8 }}
              />
              <Image
                src="/wine2.png"
                width={64}
                height={64}
                fit='cover'
                style={{ borderRadius: 8 }}
              />
              <Image
                src="/wine3.jpeg"
                width={64}
                height={64}
                fit='cover'
                style={{ borderRadius: 8 }}
              />
            </Space>
          </Card>

        </div>
      </div>
      <footer>
        <TabBar>
          {tabs.map(item => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </TabBar>
      </footer>
    </div>
  );
}

export default App;
