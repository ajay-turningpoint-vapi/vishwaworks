import { createFileRoute } from "@tanstack/react-router";
import { AreaPage, areaHead } from "@/components/site/AreaPage";
import { getAreaBySlug } from "@/config/areas";

const area = getAreaBySlug("window-repair-colaba-fort")!;

export const Route = createFileRoute("/window-repair-colaba-fort")({
  head: () =>
    areaHead({
      title: area.title,
      description: area.description,
      path: area.path,
      areaName: area.name,
    }),
  component: () => <AreaPage content={{ ...area, areaName: area.name }} />,
});
