import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import thumbWierdmerch from '../public/images/works/wierdmerch_eyecatch.jpg';
import thumbB2B from '../public/images/works/b2b_eyecatch.png';
import thumbSale from '../public/images/works/sale_01.png';
import thumbArbit from '../public/images/works/arbit_eyecatch.png';
import thumbPolittehnolog from '../public/images/works/polit_01.png';
import thumbAuttomatic from '../public/images/works/auto_01.jpeg';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Работы 
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="b2b" title="B2B маркетплейс" thumbnail={thumbB2B}>
            Мобильное приложение и сайт с персональными ценами для каждого оптового покупателя
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="wierdmerch"
            title="Weird Merch"
            thumbnail={thumbWierdmerch}
          >
            Маркетплейс кастомной одежды
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="sale"
            title="OpenSale"
            thumbnail={thumbSale}
          >
            Платформа для продажи web/mobile приложений
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="arbit"
            title="Arbit"
            thumbnail={thumbArbit}
          >
            Площадка для арбитража криптовалют
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="polittehnolog"
            title="POLITTEHNOLOG"
            thumbnail={thumbPolittehnolog}
          >
            Сайт для обучения людей политеческой жизни
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="automatic"
            title="Автоматизация предприятий"
            thumbnail={thumbAuttomatic}
          >
            Платформа для автоматизации предприятий
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
