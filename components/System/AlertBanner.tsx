/* eslint-disable @next/next/no-html-link-for-pages */
import DefaultContainer from './DefaultContainer'

export default function Alert({
  preview,
  loading,
}: {
  preview?: boolean
  loading?: boolean
}) {
  if (!preview) return

  return (
    <div className="border-b border-accent-7 bg-accent-7 text-white">
      <DefaultContainer>
        <div className="py-2 text-center text-sm">
          {loading ? 'Loading... ' : 'This page is a preview. '}
          <a
            href="/api/exit-preview"
            className="underline transition-colors duration-200 hover:text-cyan"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </DefaultContainer>
    </div>
  )
}
