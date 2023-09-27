import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="automatic">
    <Container>
      <Title>
        Автоматизация предприятий <Badge>2023</Badge>
      </Title>
      <P>
        Платформа создовалась для автоматизации различных предприятий.
        В данном web-приложении есть все, что нужно предприятиям для 
        упрощения работы: планировать поставки товара на склады, вести 
        учет товаров, а так же следить за доходом сотрудников.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, React-native, Redux, Redux-saga, Html, Css, Adaptive layout
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/auto_01.jpeg" alt="B2B" />
      <WorkImage src="/images/works/auto_02.jpeg" alt="B2B" />
      <WorkImage src="/images/works/auto_03.jpeg" alt="B2B" />
      <WorkImage src="/images/works/auto_04.jpeg" alt="B2B" />
      <WorkImage src="/images/works/auto_05.jpeg" alt="B2B" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
