import Head from "next/head";
import React from "react";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import cn from "classnames";
import styled from "styled-components";
import {CreateStart} from "@/modules/Customer";

export default function AddLead(): JSX.Element {
  return (
    <>
      <Head>
        <title>Miraden - Создать заявку</title>
      </Head>
      <BlankLayout>
        <StyledPage className={'ContainerFull'}>
          <div className={cn('PageWrapper')}>
            <div className={cn('PageContent')}>
              <div className="Reg">
                <CreateStart />
              </div>
            </div>
          </div>
        </StyledPage>
      </BlankLayout>
    </>
  )
}

const StyledPage = styled.div`
  max-width: calc(1920px);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  position: relative;
  margin-top: 30px;

  .PageWrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-gap: 30px;
    padding-left: 55px;
    padding-right: 55px;
  }

  .PageContent {
    min-width: 970px;
    max-width: 970px;
    grid-column: 5 / span 10;
  }
`
