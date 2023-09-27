import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="B2B">
    <Container>
      <Title>
        OpenSale <Badge>2022</Badge>
      </Title>
      <P>
        Это уникальный маркетплейс для продажи Android/Ios/Web приложений.
        Фишкой маркетплейса является уникальный стильный дизайн с различными
        паралакс эффектами который я разработал с нуля.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Redux-toolkit, NodeJS, MongoDB, Html, Scss, Adaptive layout
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/sale_01.png" alt="arbit" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
