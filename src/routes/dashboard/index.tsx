import { getSessionFn } from '#/data/session'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
  loader: () => getSessionFn()
})

function RouteComponent() {
  return <div>hello</div>
}
