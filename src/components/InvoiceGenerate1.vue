<template>
     <main className='ml-9 mr-9'>
        <h2 className="md:text-3xl text-xl font-bold mb-6">Generate your invoice with AI</h2>

        <h3 className="text-xl bg-slate-800 text-white md:p-4 p-2 rounded-3xl md:pl-12">Fantastic! Let's get started on your invoice. Could you tell me the name of the client this invoice is for?</h3>

        <div className='flex justify-start items-center gap-1 pt-6 md:py-1'>
          <h4 className="text-lg mb-2">Suggested Prompts </h4>
          <h6 className='text-sm bg-pink-600 rounded-full w-3 h-3 flex justify-center p-2 text-white items-center'>?</h6>
        </div>

        <div className=''>
          <textarea
            className="w-full h-[15vh] rounded-2xl border-slate-300 border-2 focus:border-none focus:outline-none  p-2 align-top"
          />
          <div className=' text-end'>
          <Button className='text-sm bg-pink-600 rounded-xl w-[100%] md:w-44 text-white p-2 mt-5'>Generate</Button>
          </div>
        </div>
        <Divider />


        <h6 className="text-center mt-9 mb-2 text-sm font-semibold italic">Invoice 1.0 generating</h6>
        <div className='bg-pink-700 pt-4 md:pt-4 mx-4 md:mx-40 px-10 md:px-60 h-52'>
          <div className='bg-white h-full'>
ss
          </div>
        </div>

      </main>
</template>

<script>
name: 'InvoiceGenerate1'
</script>