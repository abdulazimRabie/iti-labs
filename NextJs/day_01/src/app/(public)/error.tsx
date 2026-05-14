'use client';
    export default function Error({ reset }: { reset: () => void }) {
      return (
        <div className="p-20 text-center">
          <h2 className="text-red-500 font-bold">Something went wrong!</h2>
          <button onClick={() => reset()} className="mt-4 underline">Try again</button>
        </div>
      );
    }