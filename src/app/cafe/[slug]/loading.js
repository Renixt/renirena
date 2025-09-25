export default function Loading() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-[#f6dfb2] to-[#FFFFFF]'>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:20px_20px]'></div>
      <div className='pointer-events-none absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(249,173,44,0.3)_40%,rgba(248,250,252,1)_100%)]'></div>

      <div className='flex h-48 flex-col items-center justify-center items-center'>
        <div className='relative flex flex-col items-center'>
          {/* Humo */}
          <div className='absolute -top-2 -ml-1 flex space-x-2'>
            <span className='h-3 w-2 animate-bounce rounded-full bg-[#562a17] delay-75'></span>
            <span className='h-4 w-2 animate-bounce rounded-full bg-[#562a17] delay-150'></span>
            <span className='h-3 w-2 animate-bounce rounded-full bg-[#562a17]'></span>
          </div>

          {/* Taza (tu SVG) */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='64'
            height='64'
            viewBox='0 0 24 24'
            fill='#562a17'
          >
            <path
              d='M17 4C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V8.035C19.8771 8.15997 20.6742 8.61292 21.2304 9.30249C21.7867 9.99206 22.0608 10.8669 21.9973 11.7506C21.9339 12.6343 21.5377 13.4611 20.8886 14.0641C20.2396 14.6671 19.386 15.0016 18.5 15H17.712C16.9225 16.2626 15.8166 17.2968 14.504 18H17C17.2652 18 17.5196 18.1054 17.7071 18.2929C17.8946 18.4804 18 18.7348 18 19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19C3 18.7348 3.10536 18.4804 3.29289 18.2929C3.48043 18.1054 3.73478 18 4 18H6.496C5.13742 17.2745 4.00149 16.1935 3.2096 14.8725C2.4177 13.5515 1.99961 12.0402 2 10.5V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4H17ZM19 10.085V10.5C19 11.368 18.87 12.206 18.628 12.995C18.9577 12.967 19.269 12.8308 19.5132 12.6075C19.7575 12.3842 19.921 12.0865 19.9784 11.7605C20.0358 11.4346 19.9839 11.0989 19.8306 10.8056C19.6773 10.5123 19.4313 10.2779 19.131 10.139L19 10.085Z'
              fill='#562a17'
            />
          </svg>
        </div>

       {/* <p className='mt-4 font-mono text-sm text-[#562a17]'>
          Preparando tu café…
        </p>*/}
      </div>
    </div>
  )
}
