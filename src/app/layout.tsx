import type { Metadata } from "next";
import "./globals.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import * as Brands from '@fortawesome/free-brands-svg-icons';
import {
  IconDefinition,
  IconPrefix,
  IconPack
} from "@fortawesome/free-solid-svg-icons";

type IconDefinitionOrPack = IconDefinition | IconPack;

interface ImportedIcons {
  [key: string]: IconPrefix | IconDefinitionOrPack;
}

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => (Icons as ImportedIcons)[icon])

library.add(...(iconList as IconDefinitionOrPack[]))

const brandList = Object
  .keys(Brands)
  .filter(key => key !== "fas" && key !== "prefix")
  .map(icon => (Brands as ImportedIcons)[icon])

library.add(...(brandList as IconDefinitionOrPack[]))

export const metadata: Metadata = {
  title: "CV",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-gray-100 dark:bg-night-900"}>{children}</body>
    </html>
  );
}
