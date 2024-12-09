import { Provider } from '@/app/components/chakraUI/provider'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Provider as ApolloProvider } from '@/app/gql/provider'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
})

export const metadata: Metadata = {
    title: 'Anime / Manga Directory',
    description: 'A collection of anime and manga, powered by AniList.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Provider>
                    <ApolloProvider>{children}</ApolloProvider>
                </Provider>
            </body>
        </html>
    )
}
