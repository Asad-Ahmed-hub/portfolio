import Image from 'next/image'
import  {AboutMe, Banner, Footer, MyWork, Progress, Testimonials, ContactForm} from '@/components'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-between">
    <Banner />
    <AboutMe />
    <Progress />
    <MyWork />
    <ContactForm />
    <Footer />
    </div>
  )
}
