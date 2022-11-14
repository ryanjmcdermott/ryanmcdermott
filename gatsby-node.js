const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    
    const { data } = await graphql(`
        query Projects {
            mograph: allMdx(
                filter: {frontmatter: {key: {eq: "mograph"}}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
            photoedit: allMdx(
                filter: {frontmatter: {key: {eq: "photoedit"}}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
            photoman: allMdx(
                filter: {frontmatter: {key: {eq: "photoman"}}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
            webdev: allMdx(
                filter: {frontmatter: {key: {eq: "webdev"}}}
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `)

    // Individual Project Pages

    data.mograph.nodes.forEach(node => {
        actions.createPage({
            path: '/motion-graphics/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.jsx'),
            context: { slug: node.frontmatter.slug }
        })
    })

    data.photoedit.nodes.forEach(node => {
        actions.createPage({
            path: '/photo-editing/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.jsx'),
            context: { slug: node.frontmatter.slug }
        })
    })

    data.photoman.nodes.forEach(node => {
        actions.createPage({
            path: '/photo-manipulation/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.jsx'),
            context: { slug: node.frontmatter.slug }
        })
    })

    data.webdev.nodes.forEach(node => {
        actions.createPage({
            path: '/web-development/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/project-details.jsx'),
            context: { slug: node.frontmatter.slug }
        })
    })
}