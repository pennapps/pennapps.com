import * as React from 'react'
import CommitteeSection from './CommitteeSection'

export default function ApplicationsCommittees() {
  const committees = {
    OUTREACH:
            "We’re looking for people who really care and share the vision of PennApps, since we're the ones who reach out to universities and high schools across the world, run the application process(and review applications), communicate with hackers, manage travel for the top- notch hackers, and check hackers in.In Outreach, you'll interact with the hackers the most because you are with them before they get here and until they leave. If you're a dependable person willing to take on the commitment and want to be a part of the dopest squad at PennApps, apply to join the outreach fam!",
    SPONSORSHIP:
            "Looking to make an impact? You'll fit right in with the sponsorship team. As the branch responsible for generating revenue and managing corporate relations, the sponsorship team is a unique opportunity to build professional relationships with representatives from some of the tech industry's biggest names (Google, Blackrock, and Facebook to name a few). Interested in knowing more about what goes on behind the scenes?",
    CREATIVE:
            'Creative fuels the visual presentation of all PennApps events! This includes illustrations, social media posts, website designs, and (most importantly) swag. To accomplish this, we need graphic designers and UI/UX designers to join our team. Experience is preferred—we typically use Adobe Illustrator for graphics and Figma for web.',
    DEVELOPER:
            "Want to build and maintain systems that thousands of PennApps participants use? We're looking for committed web and mobile developers that are willing to learn and help continue building on and refining our internal PennApps tools, along with our application and real-time communication systems used during events. Coding experience (any language) is preferred, but not required.",
  }

  return (
    <div className="applications-committees">
      <h3>Our Committees</h3>
      <div>We have five committees you can choose to apply to! Feel free to apply to as many as you wish. </div>
      {
                Object.keys(committees).map((key, index) => (
                  <CommitteeSection
                    name={key}
                    descrip={committees[key]}
                  />
                ))
            }
    </div>
  )
}
