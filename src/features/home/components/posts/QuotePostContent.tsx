import { Icon } from '@/shared/components/ui/Icon'

type QuotePostContentProps = {
  quote: string
  attribution: string
}

export function QuotePostContent({ quote, attribution }: QuotePostContentProps) {
  return (
    <div className="relative mb-6 pl-8">
      <Icon name="format_quote" size="xl" className="absolute left-0 top-0 text-stone-200" />
      <p className="font-[Newsreader,Georgia,serif] text-base italic leading-relaxed text-[#2C1810]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-2 text-xs font-bold text-stone-500">{attribution}</p>
    </div>
  )
}
