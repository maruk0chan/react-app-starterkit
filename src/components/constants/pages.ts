import { type FormType } from "@formio/react";

import completion_notes from "@/components/sample-input-json/completion_notes.json";
import frontPage from "@/components/sample-input-json/frontPage.json";
import glossary from "@/components/sample-input-json/glossary.json";
import index from "@/components/sample-input-json/index.json";
import section_a1 from "@/components/sample-input-json/section-a1-BQ17005.json";
import section_a10 from "@/components/sample-input-json/section-A10-BQ17056.json";
import section_a11 from "@/components/sample-input-json/section-a11-BQ17066.json";
import section_a12 from "@/components/sample-input-json/section-a12-BQ22A1201.json";
import section_a2 from "@/components/sample-input-json/section-a2-BQ17006.json";
import section_a3 from "@/components/sample-input-json/section-a3-BQ17011.json";
import section_a4 from "@/components/sample-input-json/section-a4-BQ17014.json";
import section_a5 from "@/components/sample-input-json/section-a5-BQ17015.json";
import section_a6 from "@/components/sample-input-json/section-a6-BQ17019.json";
import section_a7 from "@/components/sample-input-json/section-a7-BQ17023.json";
import section_a8 from "@/components/sample-input-json/section-a8-BQ17024.json";
import section_a9 from "@/components/sample-input-json/section-a9-BQ17040A.json";
import supplyInfo from "@/components/sample-input-json/supplyInfo.json";

export interface Page {
    id: string;
    label: string;
    verify: boolean;
    src?: FormType;
}
export const pages: Page[] = [
    {
        id: "front_page",
        label: "Front Page",
        verify: false,
        src: frontPage as FormType,
    },
    {
        id: "completion_notes",
        label: "Completion Notes",
        verify: false,
        src: completion_notes as FormType,
    },
    {
        id: "index",
        label: "Index",
        verify: false,
        src: index as FormType,
    },
    {
        id: "glossary",
        label: "Glossary",
        verify: false,
        src: glossary as FormType,
    },
    {
        id: "section a1",
        label: "Section A1 - Business Overview (BQ17005)",
        verify: false,
        src: section_a1 as FormType,
    },
    {
        id: "section a2",
        label: "Section A2 - Management and Supervision (BQ17006 - BQ17010)",
        verify: false,
        src: section_a2 as FormType,
    },
    {
        id: "section_a3",
        label: "section A3 - remote booking and transfer pricing arrangements and other non-regulated business activities (bq17011 - bq17013)",
        verify: false,
        src: section_a3 as FormType,
    },
    {
        id: "section a4",
        label: "Section A4 - Outsourcing (BQ17014 - BQ17014B)",
        verify: false,
        src: section_a4 as FormType,
    },
    {
        id: "section a5",
        label: "Section A5 - Compliance (BQ17015 - BQ17018)",
        verify: false,
        src: section_a5 as FormType,
    },
    {
        id: "section a6",
        label: "Section A6 - Internal Audit (BQ17019 - BQ17022)",
        verify: false,
        src: section_a6 as FormType,
    },
    {
        id: "section a7",
        label: "Section A7 - Finance and Accounting (BQ17023)",
        verify: false,
        src: section_a7 as FormType,
    },
    {
        id: "section a8",
        label: "Section A8 - Handling of Client Accounts and Client Assets Protection (BQ17024 - BQ17039)",
        verify: false,
        src: section_a8 as FormType,
    },
    {
        id: "section a9",
        label: "Section A9 - Risk Management (BQ17040A - BQ17055)",
        verify: false,
        src: section_a9 as FormType,
    },
    {
        id: "section a10",
        label: "Section A10 - Information Technology (BQ17056 - BQ17065)",
        verify: false,
        src: section_a10 as FormType,
    },
    {
        id: "section a11",
        label: "Section A11 - Complaint Handling (BQ17066 - BQ17068)",
        verify: false,
        src: section_a11 as FormType,
    },
    {
        id: "section a12",
        label: "Section A12 - Anti-Money Laundering and Counter-Financing of Terrorism (BQ22A1201 - BQ22A1235)",
        verify: false,
        src: section_a12 as FormType,
    },
    {
        id: "supplementary_information_bq17245a",
        label: "Supplementary Information (BQ17245A)",
        verify: false,
        src: supplyInfo as FormType,
    },
];
