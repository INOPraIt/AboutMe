import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
import IoLogoTelegram from '../components/icons/telegram'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Привет, меня зовут Дмитрий, я web-работчик из России.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} mb={5}>
          <Heading 
            as="h2"
            variant="page-title"
            style={{fontFamily: ''}}
            >
            Дмитрий Рыжев
          </Heading>
          <p>
            Frontend Web&Mobile разработчик | Опыт коммерческой разработки 3+ года | Node.js / React / React-native
          </p>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Я frontend разработчик, увлеченный созданием различных интернет площадок и мобильных приложений.
          За все свое время работы я узнал много тонкостей и аспектов в разработке, от разработки простых лендингов
          и до решения сложных технических задач в готовом коде. У меня есть большой опыт в разработке приложений 
          различной сложности.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Мои работы
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Обо мне:
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Родился в Ярославле, Россия
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
            Впервые начал увлекаться программированием, начал делать простые проекты на html, css, js.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
            Устроился на первую работу, где занимался разработкой мобильного приложения для добавления новых
            интернет вещей на сервер.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
            Начал выполнять проекты на фрилансе с постоянными клиентами.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
            Разработал проект арбитража криптовалют.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
            Разработал проект автоматизации предпреятий.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/INOPraIt" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gmail.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                ryzevdmitrij@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/Ryzhev_3301" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTelegram />}
              >
                telegram
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
