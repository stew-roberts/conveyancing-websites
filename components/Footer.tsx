import React from 'react'
import ImageWithText from '../components/ImageWithText';

type Props = {}

function Footer({}: Props) {
  return (
    <div className="mx-auto px-8 py-6 bg-base-900 text-white">
        <div className="conatiner mx-auto">
            <div className="lg:flex lg:justify-around mt-8">
              <div className="lg:flex-col lg:w-96">
                <p><img src="https://www.datocms-assets.com/98233/1680893689-fulllogo_transparent_nobuffer.png" alt="mini-logo" className="w-48 py-2" /></p>
                <p className="text-xs">Conveyancing Websites is owned and managed by Technical Property Limited (Company No. 11180243), a company registered in England and Wales. We are partnered with The Conveyancing Network Limited</p>
              </div>
              <div className="lg:flex-col lg:w-96">
                <h3 className="text-xs py-4">The Quote Engine</h3>
                <p className="text-xs">The Conveyancing Quote plugin is owned and managed by The Conveyancing Network. Please visit The Coveyancing Network website for informtion on privacy and terms of use of the plugin on your website.</p>
              </div>
              <div className="lg:flex-col lg:w-96">
                <h3 className="text-xs py-4">Contact Us</h3>
                <p className="text-xs"><span className='font-bold'>Conveyancing Websites</span><br />Technical Property Ltd<br />71-75 Shelton Street<br />Convent Garden<br />London WC2H 9JQ</p>
              </div>
              <div className="lg:flex-col lg:w-96">
                <h3 className="text-xs py-4">Fine Print</h3>
                <p className="text-xs">+ Items for project delivery are once we have any and all required content to start a build. Any new content items received will be classed as a content change from your package.</p>
                <p className="text-xs">++ In relation to content changes, these are subject to fair a use policy and a maximum of 1 hour per day.</p>
                <p className="text-xs">^ Additional Monthly cost for each item.</p>
              </div>
            </div>
        </div>
        <div className="border-t mt-8">
          <div className="container mx-auto pt-12 pb-4">
            <p className="text-xs text-center">Owned and operated by <a href="https://www.technicalproperty.co.uk" target="_blank">Technical Property Limited</a> &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
    </div>
  )
}

export default Footer