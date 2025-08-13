import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Custom404() {
  return (
    <section className="block">
      <div className="px-6 py-16 md:py-24 lg:py-32">
        <div className="w-full mx-auto flex flex-col gap-y-8 items-center text-center">
          <h2 className="flex flex-col gap-y-4 items-center justify-center">
            <span className="font-bold text-8xl">404</span>
            <span className="font-bold text-4xl">Not Found</span>
          </h2>
          <div className="mx-auto">
            <p className="font-bold text-lg mb-2">
              お探しのページへたどり着く事ができませんでした。
            </p>
            <p className="font-medium">
              引き続き問題が発生する場合は、サポートまでご連絡ください。
            </p>
          </div>
          <Link href="/" passHref>
            <Button
              variant="outline"
              className="shadow rounded-md px-8 py-6 text-lg font-bold hover:bg-gray-50 transition-all duration-300 ease-out"
            >
                ホームページへ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
