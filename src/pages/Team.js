import React from "react"
//import { graphql } from "gatsby"

import GeneralLayout from "./../components/layouts/GeneralLayout"

import OurPerspectives from '../components/organisms/OurPerspectives';

const Team = ({data}) => {

    console.log("DATA, ", data);

  return(
    <GeneralLayout
      heroTitle = "Our Team"
      heroSubtitle = "We are a fun loving, open hearted group of civic technology professionals committed to making life better for our clients and each other."
    >

      About:
      <p />

      <OurPerspectives /> 
    </GeneralLayout>
  )
};

export default Team;


// export const query = graphql`
//   query AboutQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
`


export const OBJ = graphql `
query AllTeamNodes() {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "team"}}}) {
        edges {
            node {
                headings {
                    depth
                    value
                }
                frontmatter {
          name 
          image {
            id
          } 
        }
      }
    }
  }
}
`;


