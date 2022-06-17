const contentfulManagement = require("contentful-management")

module.exports = function() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: 'CFPAT-LaHfANlGjdytVavmQ-aVEPZ2t7lA-Ce6-yLo4ulCmnk',
  })

  return contentfulClient
    .getSpace('lqd32b3frij1')
    .then(space => space.getEnvironment('master'))
}