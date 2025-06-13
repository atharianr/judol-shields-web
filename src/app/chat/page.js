"use client";

import { ChatProvider } from "./contexts/ChatContext";
import { ErrorProvider } from "./contexts/ErrorContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import PageContent from "./PageContent";

export default function Home() {
  return (
    <ErrorProvider>
      <ChatProvider>
        <LoadingProvider>
          <PageContent />
        </LoadingProvider>
      </ChatProvider>
    </ErrorProvider>
  );
}