import { InputGroup } from "@/components/ui/input-group";
import styles from "./page.module.css";
import { Field } from "@/components/ui/field";
import { Input } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      Login Page
      <InputGroup>
        <Field label="name">
          <Input />
        </Field>
      </InputGroup>
      <InputGroup>
        <Field label="job title">
          <Input />
        </Field>
      </InputGroup>
      <Link href="characters">Submit</Link>
    </div>
  );
}
