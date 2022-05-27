// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import works from './works'
import testimonials from './testimonials'
import brands from './brands'
import about from './about'
import experiences from './experiences'
import skills from './skills'
import workexperiences from './workexperiences'
import contacts from './contacts'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    works,
    testimonials,
    brands,
    about,
    experiences,
    skills,
    workexperiences,
    contacts,
  ]),
})
