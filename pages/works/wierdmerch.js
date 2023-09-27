import {
    Container,
    Badge,
    List,
    ListItem,
    Link
  } from '@chakra-ui/react';
  import { Title, WorkImage, Meta } from '../../components/work';
  import P from '../../components/paragraph';
  import Layout from '../../components/layouts/article';
  
  const Work = () => (
    <Layout title="Discord">
      <Container>
        <Title>
          Weird Merch <Badge>2021</Badge>
        </Title>
        <P>
          Проект, который предоставляет возможность создавать кастомную одежду 
          на заказ, то есть пользователь выбирает вещь из каталога или присылаете 
          свою. Затем с помощью редактора наносит рисунки и фотографии по своему 
          желанию и завершает заказ. А дальше в работу включается команда проекта, 
          которая выполнит заказ
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, React-native, Redux-saga, Html, Scss, Adaptive layout</span>
          </ListItem>
          <ListItem>
            <Meta>Team</Meta>
            <span><Link href="https://github.com/INOPraIt">InopraIt</Link> && <Link href="https://github.com/IATNAOD">IATNAOD</Link></span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/wierdmerch_01.jpg" alt="wierdmerch" />
        <WorkImage src="/images/works/wierdmerch_02.jpg" alt="wierdmerch" />
        <WorkImage src="/images/works/wierdmerch_03.jpg" alt="wierdmerch" />
      </Container>
    </Layout>
  );
  
  export default Work;
  export { getServerSideProps } from '../../components/chakra';
  