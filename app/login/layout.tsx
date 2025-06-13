export default function LoginLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      {children}
    </div>
  )
}
