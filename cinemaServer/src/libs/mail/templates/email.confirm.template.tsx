import { Body, Heading, Link, Tailwind, Text } from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

interface ConfirmTemplateProps {
  domain: string;
  token: string;
}

export function ConfirmTemplate({ domain, token }: ConfirmTemplateProps) {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  return (
    <Tailwind>
      <Html>
        <Body className="text-black">
          <Heading>Подтверждение почты</Heading>
          <Text>Подтверждение почты в сервисе VirtualCinema</Text>
          <Link href={confirmLink}>Поддвердить почту</Link>
          <Text>
            Действительно в течении часа. Если это были не вы, проигнорируете
            сообщение.
          </Text>
        </Body>
      </Html>
    </Tailwind>
  );
}
