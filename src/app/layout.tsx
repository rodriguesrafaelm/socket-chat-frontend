import "./page.module.css"

import styles from '../../styles/main.module.css'

export const metadata = {
  title: 'Socket.io Simple Chat',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      <body className={styles.mainCSS}>{children}</body>
    </html>
  )
}
