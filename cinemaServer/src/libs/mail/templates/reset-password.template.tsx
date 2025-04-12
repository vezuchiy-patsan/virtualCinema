import { Body, Heading, Link, Tailwind, Text } from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

interface ResetPasswordProps {
  domain: string;
  token: string;
}

export function ResetPasswordTemplate({ domain, token }: ResetPasswordProps) {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  return (
    <Tailwind>
      <Html>
        <Body className="text-black">
          <Heading>Сброс пароля</Heading>
          <Text>Сброс пароля в сервисе VirtualCinema</Text>
          <Link href={resetLink}>Поддвердить сброс</Link>
          <Text>Если это были не вы, проигнорируете сообщение.</Text>
        </Body>
      </Html>
    </Tailwind>
  );
}
