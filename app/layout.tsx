import { Metadata } from "next"

export const metadata:Metadata={
    title:'Coinearth | News Portal',
  description : 'Stay updated with the latest news from around the world.',
keywords : 'news, breaking news, current events, world news'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        
        <body>
            
            <nav>News Portal</nav>
            
            {children}</body>
      </html>
    )
  }