import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Features from './Features'
import ClientList from './ClientList'
import ImageWithText from './ImageWithText'
import PricingSection from './PricingSection'

const PageSection = ({section}) => {
    if (section.__typename === 'HeroRecord') {
        return <section id="home"><Hero details={section} /></section>
    } else if (section.__typename === 'AboutUsBlockRecord') {
        return <AboutUs details={section} />
    } else if (section.__typename === 'FeatureSectionRecord') {
        return <Features details={section} />
    } else if (section.__typename === 'ClientBlockRecord') {
        return <ClientList details={section} />
    } else if (section.__typename === 'TextWithImageRecord') {
        return (
            <div className="bg-slate-100 pt-24 pb-12" id="our-features">
                <ImageWithText imageSrc={section.image.url} imageAlt={section.title} title={section.title} text={section.text} imageOnLeft={section.imageLeftAligned} />
            </div>
        )
    } else if (section.__typename === 'PricingSectionRecord') {
        return <PricingSection details={section} />
    } else {
        return null
    }
}

export default PageSection