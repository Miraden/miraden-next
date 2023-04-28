import {
  MessageInput,
  PasswordInput,
  Search,
  TextAreaInput,
} from "@/components/ui";
import { DropdownInput } from "@/components/ui/DropdownInput";
import { DropdownInputCheckbox } from "@/components/ui/DropdownInputCheckbox";
import { Sort } from "@/components/ui/Sort/Sort";
import { TextInput } from "@/components/ui/TextInput";
import { PenIcon, ShowPassIcon } from "@/icons";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const options = ["Select 1", "Select 2", "Select 3", "Select 4"];

const options2 = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

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
        <StyledFields className="Fields">
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
          <DropdownInput />
          <DropdownInput warning />
          <DropdownInput error />
          <DropdownInput disabled />
          <MessageInput />
          <DropdownInputCheckbox options={options2} />
          <Sort />
        </StyledFields>
      </main>
    </>
  );
}

const StyledFields = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 20px;
`;
