import React from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
          <h2 className="text-lg font-semibold">
            Something went wrong
          </h2>
          <Button onClick={() => window.location.reload()}>
            Reload App
          </Button>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary