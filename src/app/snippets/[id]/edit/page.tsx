import { notFound } from "next/navigation";
import { db } from "@/db";

import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: { id: string };
}

export default async function SnippetEditPage(props: Readonly<SnippetEditPageProps>) {
  const { id } = props.params;

  const snippet = await db.snippet.findFirst({ where: { id: Number(id) } });

  if (!snippet) return notFound();

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
