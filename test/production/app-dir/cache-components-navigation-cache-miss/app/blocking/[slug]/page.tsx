export { default } from '../../items/[slug]/page'

export const unstable_paramMatching = { slug: 'blocking' } as const

export function generateStaticParams() {
  return [{ slug: 'required' }]
}
