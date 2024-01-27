import styles from './home.module.css'
import IconBox from '@/components/Cards/IconBox/IconBox_v1'
import Portfolio_v1 from '@/components/Cards/Portfolio/Portfolio_v1'
import Portfolio_v2 from '@/components/Cards/Portfolio/Portfolio_v2'
import Testimonial from '@/components/Cards/Testimonial'
import Blog from '@/components/Cards/Blog/Blog_v1'
import Heading from '@/components/Heading'
import Description from '@/components/Description'
import Button from '@/components/Buttons'
import Contact_v1 from '@/components/Forms/Contact/Contact_v1'
import NewsletterForm from '@/components/Forms/NewsLetter/NewsLetter_v1'
import ListItems_v1 from '@/components/ListItems/ListItems_v1'
import {
    IconBoxData,
    PortfolioDataV1,
    PortfolioDataV2,
    TestimonialData,
    BlogData,
    HeadingData,
} from '@/content/sampleData'

export default function Home() {
    return (
        <>
            <div className="d-flex flex-column gap-3">
                <IconBox data={IconBoxData} />
                <Portfolio_v1 data={PortfolioDataV1} />
                <Portfolio_v2 data={PortfolioDataV2} />
                <Testimonial data={TestimonialData} />
                <Blog data={BlogData} />
                <Heading data={HeadingData} />
                <Description />
                <Button
                    variant="solid"
                    rounded="full"
                    text="Schedule a Call"
                    onClick={() => alert('Hello World')}
                />
                <Contact_v1 />
                <NewsletterForm />
                <ListItems_v1 />
            </div>
        </>
    )
}
