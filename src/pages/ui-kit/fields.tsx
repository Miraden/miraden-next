import {
  MessageInput,
  PasswordInput,
  Search,
  TextAreaInput,
} from "@/components/ui";
import {DropdownInput} from "@/components/ui/DropdownInput";
import {DropdownInputCheckbox} from "@/components/ui/DropdownInputCheckbox";
import {Sort} from "@/components/ui/Sort/Sort";
import {TextInput} from "@/components/ui/TextInput";
import styled from "styled-components";
import {BlankLayout} from "@/modules/Base/BlankLayout";
import UIKitHead from "@/modules/UIKitTest/UIKitHead";
import {EditIcon} from "@/icons/EditIcon";

const options = ["Select 1", "Select 2", "Select 3", "Select 4"];

const options2 = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function FieldsPage() {
  return (
    <BlankLayout>
      <UIKitHead title={"Fields"} className={"Container"} backUrl={"/ui-kit"}/>
      <StyledFields className="Fields Container">
        <div className={"Fields_row"}>
          <TextInput label={"Text"} className={"Input"} />
          <TextInput disabled label={"Text"} className={"Input"} />
          <TextInput warning label={"Text"} className={"Input"} message={"Warning"} />
          <TextInput error label={"Text"} className={"Input"} message={"Error"} />
        </div>

        <div className={"Fields_row"}>
          <TextInput maxLength={40} className={"Input"} />
          <TextInput maxLength={40} warning className={"Input"} message={"Warning"} />
          <TextInput maxLength={40} disabled className={"Input"} />
          <TextInput maxLength={40} error className={"Input"} />
        </div>

        <div className={"Fields_row"}>
          <TextInput label={"Text"} icon={<EditIcon />} className={"Input"} />
          <TextInput label={"Text"} warning message={"Warning"} icon={<EditIcon />} className={"Input"} />
          <TextInput icon={<EditIcon />} error message={"Error"} className={"Input"} />
          <TextInput icon={<EditIcon />} disabled className={"Input"} />
        </div>

        <div className={"Fields_row"}>
          <TextAreaInput maxLength={500} label={"Text"} />
          <TextAreaInput maxLength={500} warning message={"Warning"} />
          <TextAreaInput maxLength={500} error />
          <TextAreaInput maxLength={500} disabled />
        </div>

        <div className={"Fields_row"}>
          <PasswordInput label="password" className={"Input"} />
          <PasswordInput warning className={"Input"} message={"Warning"} />
          <PasswordInput error className={"Input"} />
          <PasswordInput label="password" disabled className={"Input"} />
        </div>

        <div className={"Fields_row"}>
          <Search options={options} placeholder={"Text"} className={"Input"} />
          <Search options={options} placeholder={"Text"} disabled className={"Input"} />
        </div>

        <div className={"Fields_row Dropdowns"}>
          <DropdownInput options={options} placeholder={"Select"} />
          <DropdownInput options={options} message={"Message"} placeholder={"Select"} />
          <DropdownInput error className={"Input"} message={"Error message"} placeholder={"Select"} />
          <DropdownInput disabled placeholder={"Select"}/>
        </div>

        <div className={"Fields_row"}>
          <DropdownInputCheckbox options={options2} />
        </div>

        <div className={"Fields_row"}>
          <MessageInput className={"Input"} />
        </div>

        <div className={"Fields_row"}>
          <DropdownInput options={options} className={"Sort"} placeholder={"Без диапазона"} />
        </div>
      </StyledFields>
    </BlankLayout>
  );
}

const StyledFields = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-bottom: 20px;

  .Fields_row {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .Dropdowns {
    > div {
      width: 100%;
    }
  }

  .Sort {
    width: 150px;
  }
`;
