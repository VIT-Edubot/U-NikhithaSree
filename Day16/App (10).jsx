import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

function App() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    alert("Confirmed!");
    setOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
      {/* ✅ Displaying Something on the Screen */}
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Feature Management Dashboard</h1>
      <p className="text-lg text-gray-600">Click the button below to perform an important action.</p>

      {/* ✅ ShadCN Modal Trigger */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Open Modal
          </button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-lg p-6 w-96 shadow-lg">
            <Dialog.Title className="text-lg font-bold mb-2">Confirmation</Dialog.Title>
            <Dialog.Description className="mb-4">
              Are you sure you want to perform this action?
            </Dialog.Description>

            <div className="flex justify-end gap-4">
              <Dialog.Close asChild>
                <button className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500">
                  Cancel
                </button>
              </Dialog.Close>
              <button
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
