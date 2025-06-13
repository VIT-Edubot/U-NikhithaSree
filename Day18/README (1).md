# Web_Development_Crash_Course_Day_18_Assignment

###  How to Run the App

To run this app, first install all the required packages using `npm install`. After that, start the app by running `npm run dev`. The app will open in your browser, and you can explore its features.


###  What is TanStack Query?

TanStack Query (also called React Query) helps us fetch data from an API and manage it easily in our app. It also saves (caches) the data, so we don’t have to fetch it again if we visit the same page.


###  How Data is Fetched

We use a special function called `useQuery` from TanStack Query to get data from the JSONPlaceholder API. It helps us show loading messages, errors, or the actual data on the screen automatically.


###  Caching Feature

When the data is fetched once, TanStack Query saves it in memory. If the user comes back to the same page, it shows the saved data instantly instead of fetching again. This makes the app faster.


###  Refetching and Sync

There is a button in the app that lets users manually refetch the data. Also, if the same data is used in another part of the app, TanStack Query keeps everything updated and in sync.


###  Loading and Error Messages

If the data is still loading, the app shows a "Loading..." message. If something goes wrong, it shows an error message. These are handled automatically by TanStack Query using the values it gives us.


