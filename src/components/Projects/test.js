 {data.data.skills.edges.map((skills) =>{
            console.log(skills.node.childrenImageSharp)
            return (
              <li>
                {/* <Img fluid={skills.node.childrenImageSharp.fluid} /> */}
              </li>
            )
          })}