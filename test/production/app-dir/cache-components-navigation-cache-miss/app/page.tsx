import { Suspense } from 'react'
import { LinkAccordion } from './link-accordion'

async function Target({
  searchParams,
}: {
  searchParams: Promise<{ target: string }>
}) {
  const { target } = await searchParams
  return <LinkAccordion href={target} />
}

export default function Page(props: {
  searchParams: Promise<{ target: string }>
}) {
  return (
    <Suspense fallback="Loading link">
      <Target {...props} />
    </Suspense>
  )
}
