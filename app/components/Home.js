import React, { useEffect } from 'react'

import { List, Icon, Row, Col, Button, notification } from 'antd'
import useStoreon from 'storeon/react'
import { GET_LIST } from '../store/activity'

const likeHandler = id => {
  if (id === 1) {
    notification.success({ message: 'Ваш голос учтен' })
  } else {
    notification.warn({ message: 'Вы уже голосовали' })
  }
}

const ShowItem = item => (
  <List.Item
    key={item.id}
    actions={[
      <span
        onClick={() => likeHandler(item.id)}
        key={`list-item-like-${item.id}`}
      >
        {item.likes.isLike ? <Icon type="like-o" /> : <Icon type="like" />}
        {item.likes.count}
      </span>
    ]}
  >
    <List.Item.Meta
      title={item.resource.name}
      description={
        <div>
          {item.community.resource.name} ({item.resource.tags.join(',')})
        </div>
      }
    />
    {item.resource.description}
  </List.Item>
)

const Home = () => {
  const { user, activity, dispatch } = useStoreon('user', 'activity')
  useEffect(() => {
    dispatch(GET_LIST)
  }, [dispatch])
  return (
    <div className="content">
      <Row>
        <Col span={18}>
          <List
            itemLayout="vertical"
            size="large"
            pagination={false}
            loading={activity.loading}
            dataSource={activity.list}
            renderItem={ShowItem}
          />
        </Col>
        <Col span={6}>
          {user && <Button icon="plus-circle">Добавить</Button>}
        </Col>
      </Row>
    </div>
  )
}

export default Home
