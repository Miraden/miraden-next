import {BlankLayout} from "@/modules/Base/BlankLayout";
import React from "react";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import styled from "styled-components";
import {Pagination, Types as PaginationType} from "@/components/ui/Pagination";

interface Props {
  className?: string
}

const PaginationPage = (props: Props) => {
  return (
    <BlankLayout>
      <UIKitHead title={"Pagination"} className={"Container"} backUrl={"/ui-kit"}/>
      <StyledPage className={"Container"}>
        <div className={"NavSection"}>
          <h3
            className={"Font_Accent_20_B NavSectionHeadline"}>{"Pagination page"}</h3>
          <Pagination total={10} type={PaginationType.Pages}/>
        </div>

        <div className={"NavSection"}>
          <h3
            className={"Font_Accent_20_B NavSectionHeadline"}>{"Pagination dots"}</h3>
          <Pagination total={4} type={PaginationType.Dotted}/>
        </div>
      </StyledPage>
    </BlankLayout>
  )
}

const StyledPage = styled.div`
  .NavSectionHeadline {
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .NavSection {
    margin-bottom: 20px;
  }
`

export default PaginationPage
