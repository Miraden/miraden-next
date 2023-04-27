import { PasswordInput, Search, TextAreaInput } from "@/components/ui";
import { TextInput } from "@/components/ui/TextInput";
import { PenIcon, ShowPassIcon } from "@/icons";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const options = ["Select 1", "Select 2", "Select 3", "Select 4"];

export default function FieldsPage() {
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
        <h1 className="Font_52_120">Fields</h1>
        <StyledCheckboxes className="Fields">
          <TextInput />
          <TextInput disabled />
          <TextInput maxLength={40} />
          <TextInput maxLength={40} disabled />
          <TextInput icon={<PenIcon />} />
          <TextInput icon={<PenIcon />} disabled />
          <TextInput maxLength={40} warning />
          <TextInput maxLength={40} error />
          <TextAreaInput maxLength={500} />
          <TextAreaInput maxLength={500} warning />
          <TextAreaInput maxLength={500} error />
          <TextAreaInput maxLength={500} disabled />
          <PasswordInput icon={<ShowPassIcon />} />
          <PasswordInput icon={<ShowPassIcon />} disabled />
          <Search options={options} />
          <Search options={options} disabled />
        </StyledCheckboxes>
      </main>
    </>
  );
}

const StyledCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
