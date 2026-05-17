import { PageContainer } from './PageContainer'

type StubPageContentProps = {
  title: string
  description?: string
}

export function StubPageContent({ title, description }: StubPageContentProps) {
  return (
    <PageContainer>
      <div className="mx-auto max-w-2xl py-8 text-center">
        <h1 className="text-2xl font-bold text-[#2C1810]">{title}</h1>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-[#757575]">{description}</p>
        ) : null}
      </div>
    </PageContainer>
  )
}
