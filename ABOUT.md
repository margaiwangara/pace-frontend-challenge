# Development Journey

Application deployed at [Calendar Events View](https://pace-frontend-challenge.vercel.app)

Some of the choices I utilized in the development of the project include:

- Positioning for events display

  - I used relative positioning on the entire container holding the hours within the days from 1am to 1am in order to effectively position events within the display area. This enabled me to give the event cards absolute positioning and placed them from the top.

- Utilized percentages to place event cards within the display area

  - Using the data from the API, specifically the start-time and end-time, I calculated percentages to display the start of the event cards and height of the cards.

  ```js
  const topPercentage =
    ((eventStartHourFormat * 60 + eventStartMinuteFormat) / MINUTES_IN_DAY) *
    100;
  const bottomPercentage =
    ((eventEndHourFormat * 60 + eventEndMinuteFormat) / MINUTES_IN_DAY) * 100;

  const eventHeight = bottomPercentage - topPercentage;
  ```

  - The formula above is used to get the distance from the top of the days wrapper in percentage format, this is used to place the event card. The second `bottomPercentage` formula is used to calculate the height of the event card.

- Utilized object to store counters for displaying events on with the same start times.
  - I used objects to store the start times of events so as to prevent overlapping. By storing the start times with counters, I placed events with the same start times side by side

Some of the challenges I faced include:

- Positioning of events within the display area
  - It took me some time to figure out how to effectively place the events within the display area at the appropriate time areas. Since, the time starts at 1am, I had to subtract 1hour from the start and end times to calculate the display area start and end positions.
- Calculating percentages to display the event cards
  - This section required a bit of thinking and calculations based on the date provided. I had to convert hours to minutes then add with the available minutes then divide by total minutes in a day then multiple by 100 to get the percentage to display

Some of the tradeoffs I chose include:

- I had to use a couple of magic number to ensure events were positioned well within the calendar

What I liked about my solution:

- I was able to effectively display the events the way I envisioned
- It was simple and straightforward
- It took me a couple of hours to implement with most of it spent on figuring out how to position events within the calendar

What I didn't like about my solution:

- I utilized a couple of magic numbers in regards to addition and subtraction while handling events positioning.

What areas would I work on next?

- I'd use constant variables for the magic numbers
- I'd find a better way to display events with same start times
- I'd use better styling
- I'd write tests
- I'd provide a way for users to add and delete events
