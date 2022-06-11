import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {Menu} from 'antd'

const items = [
  {
      key: '1',
      label: '首页'
  },
  {
      key: '2',
      label: '文章'
  }
]
const name = "Lvxl";
export const siteTitle = "Lvxl_Blog";

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="lvxl blog 博客"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <a >
            <Image src="/images/user.png" width={50} height={50} priority></Image>
          </a>
        </Link>
        <Menu className={styles.menu} mode="horizontal" items={items}></Menu>
        {/* {home ? (
          <>
            <Image
              priority
              src="/images/user.png"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/user.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
