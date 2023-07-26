import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import TopBar from '@/components/TopBar/TopBar'
import Header from '@/components/Header/Header'
import Synopsis from '@/components/Synopsis/Synopsis'
import SocialMedia from '@/components/SocialMedia/SocialMedia'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Header />
      <Synopsis />
      <SocialMedia/>
    </main>
  )
}
