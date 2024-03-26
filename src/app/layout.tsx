import { ApolloWrapper } from "@ennismore/lib/apollo-provider";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("RootLayout", ApolloWrapper);
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Providers>{children}</Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
}
