import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="B2B">
    <Container>
      <Title>
        B2B Marketplace <Badge>2021</Badge>
      </Title>
      <P>
        Приложение B2B маркеплейса с персональными ценами для каждого покупателя. Мной были разработаны сайт и мобильное приложение для Android и IOS
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, React-native, Redux-saga, Html, Css, Adaptive layout, Android Studio
          </span>
        </ListItem>
        <ListItem>
            <Meta>Team</Meta>
            <span><Link href="https://github.com/INOPraIt">InopraIt</Link> && <Link href="https://github.com/IATNAOD">IATNAOD</Link></span>
          </ListItem>
      </List>

      <WorkImage src="/images/works/b2b_01.png" alt="B2B" />
      <WorkImage src="/images/works/b2b_02.png" alt="B2B" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
