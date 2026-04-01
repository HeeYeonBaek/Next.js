import PassingData from '@/_learn/ui/passing-data'
import { cn } from '@/utils'

export default function Page() {

  // 서버 함수 readLike()를 실행해
  // 
  
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-5',
        'bg-background min-h-screen',
      )}
    >
      <header>
        <h1
          className={cn(
            'text-foreground text-center text-4xl font-extralight',
            'selection:bg-foreground selection:text-background',
          )}
        >
          데이터 전달
          <br />
          <span
            lang="en"
            className="inline-block -translate-y-2.5 text-xl text-slate-500"
          >
           <PassingData />
          </span>
        </h1>
      </header>
      <main>
        
      </main>
    </div>
  )
}
