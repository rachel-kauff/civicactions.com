import React from "react"
import _ from 'lodash'
import { graphql } from "gatsby"

import SectionTitle from "./../components/atoms/SectionTitle"
import GeneralLayout from "./../components/layouts/GeneralLayout"
import Benefits from '../components/organisms/Benefits';
import ImageBand from './../components/organisms/ImageBand'
import ImageSlider from './../components/organisms/ImageSlider';
import GlobalQuoteSlider from './../components/organisms/GlobalQuoteSlider';


const Careers = ({data}) => {
  const { allJob, markdownRemark } = data;
  const { html,frontmatter } = markdownRemark;
    const {
      benefits_title,
      images,
      image_band,
      quotes,
      quotes_title,
      openings_subtitle,
      openings_title,
      title,
      subtitle,
    } = frontmatter;
  const { edges } = allJob;

  const jobs = _.map(edges, (job, index) => {

    let url = `http://civicactions.applytojob.com/apply/${job.node.board_code}`;

    return (
      <li key = { job.node.id } className = "teaser__item">
        <h4 className =  "teaser__title">{ job.node.title }</h4>
        <div className = "teaser__text">Location: { job.node.city}, { job.node.state }</div>
        <div className = "teaser__text">Type: { job.node.type }</div>
        <div className = "teaser__link"><a href = {url}> View Details</a></div>
      </li>
    )
  });

  return(
    <GeneralLayout
      heroTitle = { title }
      heroSubtitle = { subtitle }
      hideSubFooter =  {true}
    >

      <ImageSlider images = { images } />

      <section className = "section section__careers">
        <div className = "usa-grid">
          <div className = "text-container" dangerouslySetInnerHTML = {{ __html: html }} />
        </div>
      </section>

      <section className = "section section__triple-quotes section__triple-quotes-careers neutral-hex-bg">
        <div className = "usa-grid">
          <SectionTitle title = { quotes_title } />
          <div className = "blockquotes__list">
            <GlobalQuoteSlider quotes = {quotes} />
          </div>
        </div>
      </section>

      <Benefits title={benefits_title} />

      <section className = "section section__recent-posts section__recent-posts-careers neutral-hex-bg">
        <div className = "usa-grid">
          <SectionTitle
            title = {openings_title}
            subtitle = {openings_subtitle}
          />
          <ul className = "teaser--wrapper">
            {jobs}
          </ul>
        </div>
      </section>
      <section className = "feed__image--wrapper">
        <ImageBand imageArray = { image_band }/>
      </section>

    </GeneralLayout>
  )
};

export default Careers;

export const jobsQuery = graphql `
query jobsQuery {
    markdownRemark(frontmatter: { title: { eq: "Careers" } } ) {
    html
    frontmatter {
        image_band {
        childImageSharp{
                 resize(quality: 50){
                  src
                }
        }
      }

        images {
          caption
          alt
          url {
          childImageSharp {
            fixed(width:2000) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
            }
           }
         }
       }
        benefits_title
        openings_title
        openings_subtitle
        title
        subtitle
        quotes_title
        quotes {
          image {
            childImageSharp{
              fixed(width:264, height: 264) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          text
          author
        }
      }
    }
  allJob {
    edges {
      node {
        id,
        title,
        city,
        state,
        type,
        board_code
      }
    }
  }
}
`;
