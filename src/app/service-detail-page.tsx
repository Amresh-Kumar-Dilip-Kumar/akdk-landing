import React from 'react'
import { useParams } from 'react-router-dom'

import Markdown from 'react-markdown'
import NotFoundPage from './not-found-page';
export const allowedServices = {
    webDevelopment: "web-development",
    mobileApps: "mobile-apps",
    digitalMarketing: "digital-marketing",
    seo: "seo",
    contentWriting: "content-writing",
    graphicDesign: "graphic-design"
} as const

const allowedServicesArray = Object.values(allowedServices)

import { serviceDetail } from './service-detail';

function ServiceDetailPage() {

    const { servicename } = useParams<{ servicename: string }>();
    if (!servicename) return <NotFoundPage />
    if (!allowedServicesArray.includes(servicename as typeof allowedServicesArray[number])) {
        return <NotFoundPage />
    }

    return (
        <div

        >
            <div>
                ServiceDetailPage: {servicename}
            </div>
            <div
                className='prose mx-auto py-24'
            >

                {servicename == allowedServices.webDevelopment ?

                    <Markdown>
                        {serviceDetail.webDevelopment}
                    </Markdown>
                    : <></>

                }
            </div>
        </div>
    )
}

export default ServiceDetailPage