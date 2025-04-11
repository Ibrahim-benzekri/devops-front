import React from 'react'

export default function Case({word,error}) {
  return (
    <div class="mt-6 space-y-8 xl:mt-12">
    <div class="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            <div class="flex flex-col items-center mx-5 space-y-1">
                <h2 class="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">{word}</h2>
                
                <div class="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                    word
                </div>
            </div>
        </div>

        <h2 class="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">{error} <span class="text-base font-medium">/ bad choices</span></h2>
    </div>
</div>
  )
}
