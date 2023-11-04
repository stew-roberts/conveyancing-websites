import { gql, GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageSection from '../components/PageSection'

export default function Home({page}) {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Navbar />
      {page.pageDetail.map(section => <PageSection section={section} key={section.id} />)}

      <section id="contact-us"><Contact /></section>

      <Footer />

    </div>
  )
}

const query = gql`
  query {
    page {
      pageDetail {
        ... on HeroRecord {
          __typename
          id
          title
          description
          callToAction
          heroImage {
            url
          }
        }
        ... on FeatureSectionRecord {
          __typename
          id
          title
          description
          features {
            id
            title
            description
            fontAwesomeIconName
          }
        }
        ... on TimelineSectionRecord {
          __typename
          id
          title
          description
          items {
            id
            title
            description
            fontAwesomeIconName
          }
        }
        ... on CarouselSectionRecord {
          __typename
          id
          title
          description
          carouselItems {
            title
            alt
            image {
              id
              url
            }
          }
        }
        ... on TextWithImageRecord {
          __typename
          id
          title
          text
          imageLeftAligned
          image {
            id
            url
          }
        }
        ... on PricingSectionRecord {
          __typename
          id
          title
          description
          pricingCard {
            id
            title
            details
            points
            price
            priceSuffix
            priceCurrency
            featured
            buttonText
          }
        }
      }
    }
  }`;

export async function getStaticProps() {
  const endpoint = process.env.DATOCMS_API_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        "content-type" : "application/json",
        authorization: `Bearer ${process.env.DATOCMS_API_TOKEN}`,
      }
  });
  const page = await graphQLClient.request(query);
  return {
    props: page 
  }
};
