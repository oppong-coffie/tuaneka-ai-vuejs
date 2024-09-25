<template>
   <main className='ml-9 mr-9'>
        <h2 className="md:text-3xl font-bold mb-6">Generate your invoice with AI</h2>

        <h3 className="md:text-md bg-slate-800 text-white p-2 md:p-4 rounded-3xl md:pl-12">
        Got it! An invoice for Zuludesk Ltd. Since we have your business details on file, we'll use those for the invoice. What specific items or services are we invoicing Zuludesk Ltd for this time?
        </h3>

        <div className='flex justify-start items-center gap-1 pt-5 md:pt-5 md:py-1'>
          <h4 className="text-lg"> Items or services </h4>
          <h6 className='text-sm bg-pink-600 rounded-full w-3 h-3 flex justify-center p-2 text-white items-center'>?</h6>
        </div>

        <div className='border h-[20vh] rounded-2xl p-3'>
          <textarea
            className="w-full h-[11vh] border-none focus:border-none focus:outline-none focus:ring-0 p-2 align-top"
          />
          <img className='w-32' src='/images/frame129.png'>
        </div>
          <div className='md:pr-5 text-end py-5'>
          <Button className='text-sm bg-pink-600 rounded-xl px-10 py-2 w-[100%] md:w-44 text-white'>Generate</Button>
          </div>
        <Divider />


        <h6 className="text-center mt-4 md:mt-9 md:mb-2 text-sm font-semibold italic">Invoice 1.0 generating</h6>
        <div className='bg-pink-700 py-3 md:py-0 md:pt-4 md:mx-40 px-16 md:px-60 h-52'>
          <div className='bg-white h-full'>
          ss
          </div>
        </div>

      </main>
</template>

<script>

export default {
  name: 'InvoiceGenerate2',
}
</script>

