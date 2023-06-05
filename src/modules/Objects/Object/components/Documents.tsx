import { PurposeCheckIcon } from "@/icons/PurposeCheckIcon";
import { useState, useCallback } from "react";
import styled from "styled-components";
import { Accordion } from "./Accordion";
import { DownloadIcon } from "@/icons/DownloadIcon";

const Documents = () => {
  const [openAccordion, setOpenAccordion] = useState(true);

  const handleOpenAccordion = useCallback(() => {
    setOpenAccordion(!openAccordion);
  }, [openAccordion]);

  const documents = [
    { title: "Разрешение на строительство" },
    { title: "Реквизиты застройщика" },
    { title: "Документ, подтверждающий титул" },
    { title: "Договор купли-продажи недвижимости" },
  ];

  return (
    <StyledObjectDescription className="ObjectDescription">
      <Accordion
        title="Документы"
        key="Документы"
        expanded={openAccordion}
        onChange={handleOpenAccordion}
      >
        {documents.map((document) => {
          return (
            <div className="SingleApplication__location">
              <div>
                <PurposeCheckIcon width={18} height={18} />
                <p>{document.title}</p>
              </div>
              <div className="SingleApplication__locationInfo">
                <DownloadIcon />
              </div>
            </div>
          );
        })}
      </Accordion>
    </StyledObjectDescription>
  );
};

const StyledObjectDescription = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 20px;

  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  width: 100%;
  transition: 0.15s ease;
  margin-top: 20px;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px inset #c7d2e9;
  }

  .ObjectDescription__title {
    margin-bottom: 30px;
  }

  .SingleApplication__location {
    display: flex;
    padding-top: 20px;
    padding-bottom: 19px;
    border-bottom: 1px solid #e1edfd;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 15px;
      }
    }

    div:first-child {
      min-width: 250px;
      color: #7786a5;
    }
  }

  .SingleApplication__locationInfoText {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      align-self: flex-start;
      margin-top: 20px;
    }
  }

  .SingleApplication__location:last-child {
    border-bottom: none;
    align-items: start;
  }

  .SingleApplication__locationInfo {
    display: flex;

    p:not(:first-child) {
      margin-left: 10px;
      border-left: 2px solid #c7d2e9;
      padding-left: 10px;
    }
  }

  .ObjectCard__indicators {
    display: flex;
    align-items: center;
    margin-top: 20px;
    div:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media (max-width: 1024px) {
    &.ContainerFull {
      padding: 0;
    }
  }
`;

export { Documents };
