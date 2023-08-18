import { Link as CustomLink } from '@/components/ui'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>Miraden</title>
        <meta name="description" content="Miraden" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="Container">
        <Link href="/ui-kit">Go back</Link>
        <h1 className="Font_52_120">Линки</h1>
        <StyledCheckboxes>
          <CustomLink href="/">Link</CustomLink>
          <CustomLink href="/" underlined>
            Link
          </CustomLink>
          <CustomLink href="/" disabled>
            Link
          </CustomLink>
        </StyledCheckboxes>
      </main>
    </>
  )
}

const StyledCheckboxes = styled.div`
  label {
    margin-top: 20px;
  }
`
