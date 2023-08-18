import { ImageUploader } from '@/components/ui/Dropzone'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

export default function DropzonePage() {
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
        <h1 className="Font_52_120">Dropzone</h1>
        <StyledCheckboxes>
          <ImageUploader />
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
