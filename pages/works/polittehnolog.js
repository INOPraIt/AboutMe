import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="polittehnolog">
    <Container>
      <Title>
        Polittehnolog <Badge>2023</Badge>
      </Title>
      <P>
        Сайт создовался по спецзаказу, депутату Челябинска Марселю Хазиеву,
        который хотел научить людей правильно входить в политическую жизнь
        госсударства. На сайте представленно подробное описание обучения с
        Марселем.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Redux, Redux-toolkit, RTK, NodeJS, MongoDB, Mongoose, Html, Css, Adaptive layout
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/polit_01.png" alt="polittehnolog" />
      <WorkImage src="/images/works/polit_02.png" alt="polittehnolog" />
      <WorkImage src="/images/works/polit_03.png" alt="polittehnolog" />
      <WorkImage src="/images/works/polit_04.png" alt="polittehnolog" />
      <WorkImage src="/images/works/polit_05.png" alt="polittehnolog" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'