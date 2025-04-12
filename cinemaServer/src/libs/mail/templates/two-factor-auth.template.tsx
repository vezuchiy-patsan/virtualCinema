import { Body, Heading, Link, Tailwind, Text } from "@react-email/components";
import { Html } from "@react-email/html";
import * as React from "react";

interface TwoFactorProps {
  token: string;
}

export function TwoFactor({ token }: TwoFactorProps) {
  return (
    <Tailwind>
      <Html>
        <Body className="text-black">
          <Heading>Двухфакторная аутентификация</Heading>
          <Text>
            Ваш код: <strong>{token}</strong>
          </Text>
          <Text>
            Пожалуйста, введите этот код в приложении для завершения процесса
            аутентификации
          </Text>
        </Body>
      </Html>
    </Tailwind>
  );
}
